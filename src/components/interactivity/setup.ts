/* eslint-disable func-style */
/* eslint-disable unicorn/prefer-array-some */

import type * as THREE from 'three'
import type { DomEvent, Intersection, IntersectionEvent } from './types'
import { context } from './context'

const getIntersectionId = (event: Intersection) => {
  return `${(event.eventObject || event.object).uuid}/${event.index}${event.instanceId}`
}

const domEvents = [
  ['click', false],
  ['contextmenu', false],
  ['dblclick', false],
  ['wheel', false],
  ['pointerdown', true],
  ['pointerup', true],
  ['pointerleave', true],
  ['pointerenter', true],
  ['pointermove', true],
  ['pointercancel', true],
] as const

type DomEventName = typeof domEvents[number][0]

const calculateDistance = (event: DomEvent) => {
  const dx = event.offsetX - (context.initialClick[0] ?? 0)
  const dy = event.offsetY - (context.initialClick[1] ?? 0)
  return Math.round(Math.hypot(dx, dy))
}

const cancelPointer = (intersections: Intersection[]) => {
  context.hovered.forEach((hoveredObj) => {
    /*
     * When no objects were hit or the the hovered object wasn't found underneath the cursor
     * we call pointerout and delete the object from the hovered elements map
     */
    if (
      intersections.length === 0 ||
      !intersections.some((hit) => {
        return (
          hit.object === hoveredObj.object &&
          hit.index === hoveredObj.index &&
          hit.instanceId === hoveredObj.instanceId
        )
      })
    ) {
      const { eventObject } = hoveredObj
      context.hovered.delete(getIntersectionId(hoveredObj))

      // Clear out intersects, they are outdated by now
      eventObject.dispatchEvent({ type: 'pointerout', ...hoveredObj, intersections })
      eventObject.dispatchEvent({ type: 'pointerleave', ...hoveredObj, intersections })
    }
  })
}

const getHits = (): Intersection[] => {
  const duplicates = new Set<string>()
  const intersections: Intersection[] = []

  let hits = context.raycaster
    .intersectObjects(context.interactiveObjects)
    // Sort by distance
    .sort((a, b) => a.distance - b.distance)
    // Filter out duplicates
    .filter((item) => {
      const id = getIntersectionId(item as Intersection)
      if (duplicates.has(id)) {
        return false
      }
      duplicates.add(id)
      return true
    })

  if (context.filter) {
    // eslint-disable-next-line unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
    hits = context.filter(hits, context)
  }

  // Bubble up the events, find the event source (eventObject)
  hits.forEach((hit) => {
    let eventObject: THREE.Object3D | null = hit.object
    // Bubble event up
    while (eventObject) {
      intersections.push({ ...hit, eventObject })
      eventObject = eventObject.parent
    }
  })

  return intersections
}

const pointerMissed = (event: MouseEvent, objects: THREE.Object3D[]) => {
  objects.forEach((object) => {
    object.dispatchEvent({ type: 'pointermissed', event })
  })
}

const getEventHandler = (name: DomEventName): ((event: DomEvent) => void) => {
  // Deal with cancelation
  if (name === 'pointerleave' || name === 'pointercancel') {
    return () => {
      context.pointerOverTarget = false
      cancelPointer([])
    }
  }

  if (name === 'pointerenter') {
    return () => {
      context.pointerOverTarget = true
    }
  }

  return (event: DomEvent) => {
    const isPointerMove = name === 'pointermove'
    const isClickEvent = name === 'click' || name === 'contextmenu' || name === 'dblclick'

    /**
     * Will set up the raycaster. The default implementation will use the
     * mouse position on the renderers domElement.
     */
    context.compute(event, context)

    const hits = context.enabled ? getHits() : []
    const delta = isClickEvent ? calculateDistance(event) : 0

    // Save initial coordinates on pointer-down
    if (name === 'pointerdown') {
      context.initialClick = [event.offsetX, event.offsetY]
      context.initialHits = hits.map((hit) => hit.eventObject)
    }

    /*
     * If a click yields no results, pass it back to the user as a miss
     * Missed events have to come first in order to establish user-land side-effect clean up
     */
    if (isClickEvent && hits.length === 0 && delta <= 2) {
      pointerMissed(event, context.interactiveObjects)
    }

    // Take care of unhover
    if (isPointerMove) {
      cancelPointer(hits)
    }

    let stopped = false

    const stop = () => {
      stopped = true
    }

    // Loop through all hits and dispatch events
    for (let i = 0, l = hits.length; i < l; i += 1) {
      const hit = hits[i]!
      const intersectionEvent: IntersectionEvent<DomEvent> = {
        stopped,
        ...hit,
        intersections: hits,
        stopPropagation () {
          stop()
          intersectionEvent.stopped = true
          const values = [...context.hovered.values()]
          if (
            context.hovered.size > 0 &&
            values.some((x) => x.eventObject === hit.eventObject)
          ) {
            // Objects cannot flush out higher up objects that have already caught the event
            const higher = hits.slice(0, hits.indexOf(hit))
            cancelPointer([...higher, hit])
          }
        },
        camera: context.raycaster.camera,
        delta,
        nativeEvent: event,
        pointer: context.pointer,
        ray: context.raycaster.ray,
      }

      if (isPointerMove) {
        // Move event ...

        const id = getIntersectionId(intersectionEvent)
        const hoveredItem = context.hovered.get(id)
        if (!hoveredItem) {
          // If the object wasn't previously hovered, book it and call its handler
          context.hovered.set(id, intersectionEvent)
          hit.eventObject.dispatchEvent({ type: 'pointerover', ...intersectionEvent as IntersectionEvent<PointerEvent> })
          hit.eventObject.dispatchEvent({ type: 'pointerenter', ...intersectionEvent as IntersectionEvent<PointerEvent> })
        } else if (hoveredItem.stopped) {
          // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
          intersectionEvent.stopPropagation()
        }

        // Call pointer move
        hit.eventObject.dispatchEvent({ type: 'pointermove', ...intersectionEvent as IntersectionEvent<PointerEvent> })

      // All other events
      } else if (!isClickEvent || context.initialHits.includes(hit.eventObject)) {
        // Missed events have to come first
        pointerMissed(
          event,
          context.interactiveObjects.filter((object) => !context.initialHits.includes(object))
        )

        // Call the event
        hit.eventObject.dispatchEvent({ type: name, ...intersectionEvent })
      }

      if (stopped) {
        break
      }
    }
  }
}

export const setupInteractivity = () => {
  domEvents.forEach(([eventName, passive]) => {
    context.target?.addEventListener(eventName, getEventHandler(eventName), { passive })
  })

  return () => {
    domEvents.forEach(([eventName]) => {
      context.target?.removeEventListener(eventName, getEventHandler(eventName))
    })
  }
}
