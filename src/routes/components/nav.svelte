<script lang='ts'>

import { page } from '$app/stores'
import { base } from '$app/paths'

export let routes: [name: string, link?: string][]

</script>

<nav class='sticky top-0 self-start py-12'>
  {#each routes as [name, link] (name)}
    {#if link !== undefined}
      <a
        href='{base}/{link}'
        class='block py-1 px-6 text-sm no-underline text-white text-opacity-70'
        class:active={`/${link}` === $page.route.id}
      >
        {name}
      </a>
    {:else}
      <p class='uppercase text-xs font-bold pt-4 pb-1 px-6 text-white'>
        {name}
      </p>
    {/if}
  {/each}
</nav>

<style>
  nav {
    background-color: #444;
    color: #ddd;
  }

  .active {
    background-color: #fff;
    color: #444;
  }
</style>
