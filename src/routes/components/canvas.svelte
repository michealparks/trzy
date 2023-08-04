<script lang='ts' context='module'>

import { onMount } from 'svelte'
import { useTrzy } from '$lib'

const { renderer } = useTrzy({ rendererParameters: { alpha: true } })

</script>

<script lang='ts'>

export let height = 400

let div: HTMLElement
let ready = false

onMount(() => {
  const canvas = renderer.domElement
  canvas.style.cssText = `height: ${height}px; width: 100%;`
  div.replaceWith(canvas)
  ready = true
})

</script>

<div class='relative'>
  <div bind:this={div} />

  {#if ready}
    <slot />
  {/if}
</div>

