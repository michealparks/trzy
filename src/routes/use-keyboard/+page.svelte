<script lang='ts'>

import { onMount } from 'svelte'
import * as THREE from 'three'
import { useFrame, useTrzy, useKeyboard, box, GridHelper } from '$lib'
import code from './snippet?raw'
import { setup } from '../lib/setup'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'

let output = ''

onMount(() => {
  const controls = setup()
  controls.enabled = controls.autoRotate = false

  const { scene } = useTrzy()
  const player = box(new THREE.MeshStandardMaterial({ color: 'hotpink' }), 0.25, 0.25, 0.25)
  const grid = new GridHelper()
  grid.color = '#ccc'
  grid.cellSize = 0.1
  grid.position.y = -0.125
  scene.add(player, grid)

  controls.target = player.position

  const { keyboard, disposeKeyboard } = useKeyboard()

  const { stop } = useFrame(() => {
    player.position.x += keyboard.x / 50
    player.position.z += -(keyboard.y / 50)
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
