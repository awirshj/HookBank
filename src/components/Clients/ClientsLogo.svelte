<script>
  const imgSRC = ["airbnb.png", "binance.png", "coinbase.png", "dropbox.png"];
  // Component logic
</script>

<!-- Component markup -->
<div
  class="my-10 grid grid-cols-2 grid-rows-2 items-center justify-center gap-x-0 gap-y-8 lg:mt-24 lg:grid-cols-4 lg:grid-rows-1"
>
  {#each imgSRC as src}
    <div class="flex h-full w-full items-center justify-center">
      <img
        class="w-8/12 md:w-1/2 lg:w-2/3 xl:w-1/2"
        src="./src/assets/{src}"
        alt="{src.split('.')[0]} logo"
      />
    </div>
  {/each}
</div>

<style>
  /* Component styles */
</style>
