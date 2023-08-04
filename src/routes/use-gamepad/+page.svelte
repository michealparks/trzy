<script lang='ts'>

import { onMount } from 'svelte'
import * as THREE from 'three'
import { useFrame, useTrzy, useGamepad, box, GridHelper } from '$lib'
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
  const { gamepad, updateGamepads, disposeGamepads } = useGamepad()

  const player = box(new THREE.MeshStandardMaterial({ color: 'hotpink' }), 0.25, 0.25, 0.25)
  const grid = new GridHelper()
  grid.color = '#ccc'
  grid.cellSize = 0.1
  grid.position.y = -0.125
  scene.add(player, grid)

  controls.target = player.position

  const { stop } = useFrame(() => {
    updateGamepads()

    const dx = gamepad.leftStickX / 50
    const dz = gamepad.leftStickY / 50

    player.position.x += dx
    player.position.z += dz

    camera.current.position.x += dx
    camera.current.position.z += dz

    output = JSON.stringify(gamepad, undefined, '  ')
  })

  return () => {
    controls.enabled = controls.autoRotate = true
    controls.target = new THREE.Vector3()
    stop()
    disposeGamepads()
  }
})

</script>

<Docs title='useGamepad'>
  <p>Normalizes gamepad input.</p>

  <Canvas>
    <pre class='absolute top-2 left-2 text-xs'>{output}</pre>
  </Canvas>

  <Code {code} />
</Docs>
