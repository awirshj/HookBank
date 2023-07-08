<script>
  import { quotes } from "../../assets";

  export let data;
  const { author, text, position, imgSrc } = data;
  // Component logic
</script>

<div
  class="hoverEffect group flex w-full max-w-md flex-col justify-center gap-6 rounded-2xl border-2 border-solid border-gray-800 border-opacity-40 px-8 py-4 transition hover:border-opacity-100 lg:w-1/3"
>
  <div class="w-1/4 self-start pb-4 pt-1 opacity-80">
    <img src={quotes} alt="quotes" />
  </div>

  <p class="text-lg font-medium text-textColorSemiLighter opacity-90">{text}</p>
  <div class="flex w-full flex-row items-center justify-between pt-4">
    <div class="w-1/6 opacity-75 grayscale group-hover:grayscale-0 lg:w-1/4">
      <img src={imgSrc} class="w-full" alt={author} />
    </div>
    <div>
      <p class="mb-1 text-lg font-bold tracking-wide text-textColorLighter">
        {author}
      </p>
      <p
        class="text-base font-medium tracking-wide text-textColorDarker opacity-80"
      >
        {position}
      </p>
    </div>
  </div>
</div>

<style>
  .hoverEffect:hover {
    background: linear-gradient(125.17deg, #27272741, #11101d);
  }
  /* Component styles */
</style>
