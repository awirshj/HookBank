<script>
  // Component logic

  import GetStartedBtn from "../BTNs/GetStartedBtn.svelte";
</script>

<!-- Component markup -->
<section
  id="ctaCard"
  class="mx-auto my-24 mt-32 flex items-center justify-center px-16 lg:px-10"
>
  <div
    class="flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-3 py-6 text-center sm:px-6 sm:py-8 md:w-full md:flex-row md:justify-between md:px-12 md:py-12"
    style="
    background: linear-gradient(125.17deg, #27272741, #11101d);
  
  "
  >
    <div
      class="flex flex-col items-center gap-2 md:w-2/3 md:items-start md:gap-8"
    >
      <h2
        class="text-center text-4xl font-bold leading-snug text-textColorExtraLighter md:text-left"
      >
        Let’s try our service now!
      </h2>
      <p
        class="text-center text-lg font-medium leading-loose tracking-wide text-textColor opacity-90 md:text-left"
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div class="h-fit w-fit"><GetStartedBtn /></div>
  </div>
</section>

<style>
  /* Component styles */
</style>
