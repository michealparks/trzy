<script lang='ts'>

import { useTrzy, GridHelper } from '$lib'
import { onMount } from 'svelte'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'
import code from './snippet?raw'
import { setup } from '../lib/setup'

onMount(() => {
  setup()

  const { scene } = useTrzy()
  const grid = new GridHelper()
  grid.color = '#333'
  grid.cellSize = 0.1
  grid.largeCellSize = 1
  scene.add(grid)
})

</script>

<Docs title='GridHelper'>
  <p>A shader-based grid implementation.</p>

  <Canvas />

  <Code {code} />
</Docs>
