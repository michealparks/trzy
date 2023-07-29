<script lang='ts'>

import Code from '../components/code.svelte'
import Docs from '../components/docs.svelte'

</script>

<Docs title='Math'>
  <h3>Circle</h3>
  <Code code={`
import { randomPointOnCircle, randomPointWithinCircle } from 'trzy'

const [x1, y1] = randomPointOnCircle()
const [x2, y2] = randomPointWithinCircle()
  `} />

  <h3>Sphere</h3>
  <Code code={`
import { randomPointOnSphere, randomPointWithinSphere } from 'trzy'

const [x1, y1, z1] = randomPointOnSphere()
const [x2, y2, z2] = randomPointWithinSphere()
  `} />
</Docs>
