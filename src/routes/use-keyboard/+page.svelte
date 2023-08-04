<script lang='ts'>

import { onMount } from 'svelte'
import * as THREE from 'three'
import { useFrame, useTrzy, useKeyboard, box, GridHelper, AxesHelper } from '$lib'
import code from './snippet?raw'
import { setup } from '../lib/setup'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'

let output = ''

onMount(() => {
  const controls = setup()
  controls.enabled = controls.autoRotate = false

  const { scene, camera } = useTrzy()
  const player = box(new THREE.MeshStandardMaterial({ color: 'hotpink' }), 0.25, 0.25, 0.25)
  scene.add(new GridHelper(0.1, 1, '#ccc').translateY(-0.125))
  scene.add(new AxesHelper().translateY(-0.125))
  scene.add(player)

  controls.target = player.position

  const { keyboard, disposeKeyboard } = useKeyboard()

  const { stop } = useFrame(() => {
    const dx = keyboard.x / 50
    const dz = -(keyboard.y / 50)
  
    player.position.x += dx
    player.position.z += dz
    
    camera.current.position.x += dx
    camera.current.position.z += dz
    output = JSON.stringify(keyboard, undefined, '  ')
  })

  return () => {
    controls.enabled = controls.autoRotate = true
    controls.target = new THREE.Vector3()
    stop()
    disposeKeyboard()
  }
})

</script>

<Docs title='useKeyboard'>
  <p>Normalizes common keyboard inputs for games.</p>

  <Canvas>
    <pre class='absolute top-2 left-2 text-xs'>{output}</pre>
  </Canvas>

  <Code {code} />
</Docs>
