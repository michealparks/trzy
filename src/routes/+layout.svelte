<script lang='ts'>

import '../app.css'
import Nav from './components/nav.svelte'

</script>

<main>
  <Nav routes={[
    ['Trzy', ''],
    ['Helpers'],
    ['AxesHelper', 'axes-helper'],
    ['GridHelper', 'grid-helper'],
    ['ViewHelper', 'view-helper'],
    ['Objects'],
    ['HTML', 'html'],
    ['CameraShake', 'camera-shake'],
    ['Hooks'],
    ['pointerEvents', 'pointer-events'],
    ['useGamepad', 'use-gamepad'],
    ['useKeyboard', 'use-keyboard'],
    ['Utilities'],
    ['Math', 'math'],
  ]} />

  <div>
    <slot />
  </div>
</main>

<style>
  :root {
    --color1: #dbd8e3;
    --color2: #5c5470;
    --color3: #352f44;
    --color4: #2a2438;
  }

  div {
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
  }

  main {
    display: flex;
    height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
