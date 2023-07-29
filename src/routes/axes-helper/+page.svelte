<script lang='ts'>

import { AxesHelper, useTrzy } from '$lib'
import { onMount } from 'svelte'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'
import code from './snippet?raw'
import { setup } from '../lib/setup'
    
onMount(() => {
  setup()

  const { scene } = useTrzy()
  scene.add(new AxesHelper())
})

</script>

<Docs title='AxesHelper'>
  <p>Similar to <code>THREE.AxesHelper</code> but uses <code>THREE.Line2</code> to render axes.</p>

  <Canvas />

  <Code {code} />
</Docs>
