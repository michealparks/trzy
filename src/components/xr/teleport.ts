import * as THREE from 'three'
import { line, lineBasicMat, plane, shaderMat } from '../objects'

const offsetPosition = { w: 1, x: 0, y: 0, z: 0 }

const offsetRotation = new THREE.Quaternion()
const m4 = new THREE.Matrix4()

const fragmentShader = `
uniform float time;
varying vec2 vUv;
void main(){
  float sinx = sin(time) / 8. + 0.3;
  float strength = 1.0 - step(0.01, abs(distance(vUv, vec2(0.5)) - sinx));
  gl_FragColor = vec4(strength);
}`

const vertexShader = `
varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

export const createTeleport = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  controllers: THREE.XRTargetRaySpace[],
  raycaster = new THREE.Raycaster()
) => {
  const objects: THREE.Object3D[] = []
  const originalPosition = new THREE.Vector3()

  const raylines: THREE.Line[] = []

  let enabled = false
  let baseReferenceSpace: XRReferenceSpace | null
  let selecting = -1
  let intersection: THREE.Vector3 | undefined

  renderer.xr.addEventListener('sessionstart', () => {
    baseReferenceSpace = renderer.xr.getReferenceSpace()
  })

  const material = shaderMat({
    fragmentShader,
    vertexShader,
    uniforms: {
      time: { value: 0 },
    },
    polygonOffset: true,
    polygonOffsetFactor: -1,
    transparent: true,
  })
  const marker = plane(material, 0.5, 0.5)
  marker.geometry.rotateX(-Math.PI / 2)
  marker.name = 'Teleport Marker'
  marker.visible = false

  const handleSelectStart = (event: { target: THREE.Object3D }) => {
    selecting = event.target.userData.index
    raylines[selecting]!.visible = true
  }

  const handleSelectEnd = (event: { target: THREE.Object3D }) => {
    const { index } = event.target.userData

    if (selecting === index) {
      selecting = -1
    }

    raylines[index]!.visible = false

    if (intersection === undefined) {
      return
    }

    offsetPosition.x = -intersection.x
    offsetPosition.y = -intersection.y
    offsetPosition.z = -intersection.z
    offsetPosition.w = 1

    const transform = new XRRigidTransform(offsetPosition, offsetRotation)
    const teleportSpaceOffset = baseReferenceSpace!.getOffsetReferenceSpace(transform)

    renderer.xr.setReferenceSpace(teleportSpaceOffset)
  }

  for (let index = 0; index < 2; index += 1) {
    const lineMaterial = lineBasicMat({
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexColors: true,
      name: `XR Controller ${index === 0 ? 'Left' : 'Right'} Ray Line`,
      visible: false,
    })
    const rayline = line(lineMaterial)
    rayline.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, -1], 3)
    )
    rayline.geometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute([0.5, 0.5, 0.5, 0, 0, 0], 3)
    )
    raylines.push(rayline)

    const controller = controllers[index]!
    controller.add(rayline)
    controller.addEventListener('selectstart', handleSelectStart)
    controller.addEventListener('selectend', handleSelectEnd)
  }

  let time = 0

  const update = (delta: number) => {
    if (!enabled) {
      return
    }

    time += delta

    intersection = undefined

    if (selecting > -1) {
      const activeController = controllers[selecting]!

      m4.identity().extractRotation(activeController.matrixWorld)
      raycaster.ray.origin.setFromMatrixPosition(activeController.matrixWorld)
      raycaster.ray.direction.set(0, 0, -1).applyMatrix4(m4)

      const intersects = raycaster.intersectObjects(objects)

      if (intersects.length > 0) {
        intersection = intersects[0]!.point
      }

      if (intersection) {
        marker.position.copy(intersection)
      }

      material.uniforms.time!.value = time / 200
    }

    marker.visible = intersection !== undefined
  }

  const enable = (...navMesh: THREE.Object3D[]) => {
    objects.push(...navMesh)
    scene.add(marker)

    if (!enabled) {
      originalPosition.copy(camera.position)
    }

    enabled = true
  }

  const disable = () => {
    objects.splice(0, objects.length)

    scene.remove(marker)

    if (enabled) {
      camera.position.copy(originalPosition)
    }

    enabled = false
  }

  return {
    enable,
    disable,
    update,
  }
}
