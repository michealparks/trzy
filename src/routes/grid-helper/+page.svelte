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
  scene.add(new GridHelper(0.1, 1, '#333'))
})

</script>

<Docs title='GridHelper'>
  <p>A shader-based grid implementation.</p>

  <Canvas />

  <Code {code} />
</Docs>
