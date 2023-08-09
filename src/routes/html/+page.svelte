<script lang='ts'>

import { onMount } from 'svelte'
import * as THREE from 'three'
import { Html, useFrame, useTrzy } from '$lib'
import code from './snippet?raw'
import { setup } from '../lib/setup'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'

onMount(() => {
  const { scene } = useTrzy()

  setup()

  const cubes: THREE.Mesh[] = []
  const htmls: Html[] = []

  const n = 6

  for (let index = 0; index < n; index += 1) {
    const element = document.createElement('div')
    element.innerHTML = `Cube ${index}`
    element.style.cssText = `
      background: white;
      padding: 0.25rem 0.5rem;
    `

    const object3D = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshStandardMaterial()
    )
    object3D.position.set(THREE.MathUtils.randInt(-2, 2), -0.25, THREE.MathUtils.randInt(-2, 2))
    scene.add(object3D)
    cubes.push(object3D)

    htmls.push(new Html({ element, object3D }))
  }

  const { stop } = useFrame(() => {
    cubes.forEach((cube) => (cube.rotation.y += 0.01))
  })

  const { stop: stopAfter } = useFrame((ctx) => {
    htmls.forEach((html) => html.update(ctx.camera.current, ctx.renderer))
  }, { stage: 'after' })

  return () => {
    htmls.forEach((html) => html.dispose())
    stop()
    stopAfter()
  }
})

</script>

<Docs title='HTML'>
  <p>HTML elements that are positioned relatively to objects.</p>

  <Canvas />

  <Code {code} />
</Docs>
