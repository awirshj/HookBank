<script>
  import { airbnb, binance, coinbase, dropbox } from "../../assets";
  const imgSRC = [
    { src: airbnb, name: "airbnb" },
    { src: binance, name: "binance" },
    { src: coinbase, name: "coinbase" },
    { src: dropbox, name: "dropbox" },
  ]; // Component logic
</script>

<!-- Component markup -->
<div
  class="my-10 grid grid-cols-2 grid-rows-2 items-center justify-center gap-x-0 gap-y-8 lg:mt-24 lg:grid-cols-4 lg:grid-rows-1"
>
  {#each imgSRC as img}
    <div class="flex h-full w-full items-center justify-center">
      <img
        class="w-8/12 md:w-1/2 lg:w-2/3 xl:w-1/2"
        src={img.src}
        alt={img.name}
      />
    </div>
  {/each}
</div>

<style>
  /* Component styles */
</style>
