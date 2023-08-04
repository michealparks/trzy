<script lang='ts'>

import { CameraShake, useTrzy, useFrame } from '$lib'
import { onMount } from 'svelte'
import Canvas from '../components/canvas.svelte'
import Docs from '../components/docs.svelte'
import Code from '../components/code.svelte'
import code from './snippet?raw'
import { setup } from '../lib/setup'
import { strawberry } from '../lib/strawberry'

onMount(() => {
  const controls = setup()

  const { scene, camera } = useTrzy()
  const cameraShake = new CameraShake(camera.current)
  cameraShake.controls = controls
  cameraShake.enabled = true

  const { stop } = useFrame(() => cameraShake.update())

  strawberry().then((group) => scene.add(group))

  return () => {
    stop()
  }
})

</script>

<Docs title='CameraShake'>
  <p>Uses simplex noise to shake the camera.</p>

  <Canvas />

  <Code {code} />
</Docs>
