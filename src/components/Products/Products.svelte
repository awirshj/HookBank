<script>
  // Component logic

  import GetStartedBtn from "../BTNs/GetStartedBtn.svelte";
  import GetApp from "./GetApp/GetApp.svelte";
</script>

<section id="products" class="mx-auto my-24 px-8 pt-16">
  <GetApp />

  <div
    class="mx-auto my-16 flex flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:justify-start lg:gap-8"
  >
    <div
      class="flex flex-col items-center justify-center gap-12 lg:w-1/2 lg:items-start lg:justify-start"
    >
      <h2
        class="text-center text-4xl font-bold leading-tight text-textColorExtraLighter lg:text-left lg:text-5xl"
      >
        Find a better card deal in few easy steps.
      </h2>
      <p
        class="text-center text-lg font-medium leading-loose tracking-wide text-textColorSemiLighter lg:text-left"
      >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <GetStartedBtn />
    </div>
    <div class="my-16 md:w-2/3 lg:my-0 lg:w-1/2">
      <img src="./src/assets/card.png" alt="card" />
    </div>
  </div>
</section>

<!-- Component markup -->

<style>
  /* Component styles */
</style>
