<script lang='ts'>

import { useTrzy, ViewHelper, GridHelper, AxesHelper, box, standardMat } from '$lib'
import { onMount } from 'svelte'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'
import code from './snippet?raw'
import { setup } from '../lib/setup'

onMount(() => {
  setup()

  const { scene, camera, renderer } = useTrzy()

  const helper = new ViewHelper(camera.current, renderer)
  
  scene.add(new GridHelper(0.1, 1, '#ccc'))
  scene.add(new AxesHelper())
  scene.add(box(standardMat(), 0.5, 0.4, 0.3))

  return () => helper.dispose()
})

</script>

<Docs title='ViewHelper'>
  <p>Creates a screen space view helper.</p>

  <Canvas />

  <Code {code} />
</Docs>
