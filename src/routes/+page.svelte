<script lang='ts'>
  import Docs from './components/docs.svelte'
  import Code from './components/code.svelte'
</script>

<Docs title='Trzy'>
  <p>The Trzy library mainly consists of extras, utils, and helpers, but also contains 
    a very thin framework meant to act as a vanilla replacement for some features provided
    by React Three Fiber or Threlte.</p>

  <p>The <code>trzy()</code> function will instantiate everything you need to get a THREE.js project started. It should be only called once per project.</p>

  <Code code={`
import { trzy } from 'trzy'

trzy()
`} />

  <h3>useTrzy</h3>

  <p>The `useTrzy` function will provide all instantiated objects.</p>

  <Code code={`
import { useTrzy, ambientLight, box } from 'trzy'

const { scene, camera, renderer } = useTrzy()

document.append(renderer.domElement)
`} />

  <p>The renderer will automatically resize to the size of its parent.</p>
  <p>Trzy will automatically create a render loop, and callbacks can be added to it.</p>

  <Code code={`
import { useFrame } from 'trzy'

useFrame((ctx, delta) => {
  ctx.camera.current.position.z += 0.1
})
`} />

  <p>Frame callbacks can be manually started and stopped, and render order can be specified.</p>

  <Code code={`
import { useFrame } from 'trzy'

useFrame((ctx, delta) => {
  ctx.camera.current.position.z += 0.1
})
`} />

  <p>Cameras can be changed by reassigning the default camera.</p>

  <Code code={`
import { useTrzy } from 'trzy'

const { camera } = useTrzy()

camera.current = new THREE.OrthographicCamera()
`} />

</Docs>