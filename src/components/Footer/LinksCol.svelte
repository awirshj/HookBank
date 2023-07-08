<script>
  // Component logic
  export let linksCol;
  //   {

  // title:partner
  // links:['link1',link2,....]

  //   }
  const { title, links } = linksCol;
</script>

<!-- Component markup -->
<div class="group">
  <h4
    class="mb-4 w-fit border-b-2 border-solid border-gray-800 border-opacity-60 text-xl font-semibold italic tracking-wide text-textColorLighter transition-all duration-300 group-hover:border-gray-600"
  >
    {title}
  </h4>
  <ul class=" flex flex-col flex-nowrap gap-3">
    {#each links as l, i (i)}
      <li class="w-fit transition hover:-translate-y-[3px]">
        <a
          class="text-textColor opacity-90 transition hover:text-textColorExtraLighter hover:opacity-100"
          href="#top">{l}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  /* Component styles */
  li {
    transition: all 0.25s ease-in;
  }
</style>
