<script lang='ts'>

import { onMount } from 'svelte'
import * as THREE from 'three'
import { useTrzy, useFrame, pointerEvents, shadows, box, randomPointOnCircle } from '$lib'
import code from './snippet?raw'
import { setup } from '../lib/setup'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'

onMount(() => {
  const { scene, camera, renderer } = useTrzy()

  const { dispose } = pointerEvents({ target: renderer.domElement, camera: camera.current })

  setup()

  const cubes = Array.from({ length: 100 }).map(() => {
    const material = new THREE.MeshStandardMaterial({ color: 'yellow' })
    const size = 0.1
    const mesh = box(material, size, size, size)
    const [x, z] = randomPointOnCircle(1.5)
    mesh.position.set(x, -0.25, z)

    mesh.userData.rotation = {
      y: (Math.random() - 0.5) * 0.1,
      z: (Math.random() - 0.5) * 0.1,
    }

    mesh.addEventListener('pointerenter', (event) => {
      event.stopPropagation()
      material.color.set('hotpink')
    })
    mesh.addEventListener('pointerleave', () => material.color.set('yellow'))
    mesh.addEventListener('click', () => (material.color.set('blue')))

    return mesh
  })

  scene.add(...cubes)

  shadows(scene)

  const { stop } = useFrame(() => {
    cubes.forEach((cube) => {
      cube.rotation.y += cube.userData.rotation.y
      cube.rotation.z += cube.userData.rotation.z
    })
  })

  return () => {
    disposeBvh()
    stop()
    dispose()
  }
})

</script>

<Docs title='pointerEvents'>
  <p>Adds pointer events to all rendererable objects.</p>

  <Canvas />

  <Code {code} />
</Docs>
