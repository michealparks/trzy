<script lang='ts'>

export let title: string

</script>

<article class='p-8'>
  <h1 class='m-0 py-4 font-bold text-3xl'>{title}</h1>

  <slot />  
</article>

<style>
  article :global(canvas) {
    margin: 1rem 0;
  }
</style>
