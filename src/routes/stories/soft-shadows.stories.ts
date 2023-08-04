

import { shadows, softShadows, useFrame, useTrzy } from '$lib'
import { setup } from '../lib/setup'
import { strawberry } from '../lib/strawberry'
import { floor } from '../lib/floor'

softShadows()

const { scene } = useTrzy()

setup()

// eslint-disable-next-line unicorn/prefer-top-level-await
strawberry().then((group) => {
  scene.add(group)
  useFrame(() => (group.rotation.y += 0.05))
})

scene.add(floor())

shadows(scene)
