<script>
  // Component logic
  import CardTestimonial from "./CardTestimonial.svelte";
  import ClientsLogo from "./ClientsLogo.svelte";
  const testimonialData = [
    {
      text: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      author: "Herman Jensen",
      position: "Founder & Leader",
      imgSrc: "./src/assets/people01.png",
    },
    {
      text: "Money makes your life easier. If you're lucky to have it, you're lucky.",
      author: "Steve Mark",
      position: "Founder & Leader",
      imgSrc: "./src/assets/people02.png",
    },
    {
      text: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      position: "Founder & Leader",
      imgSrc: "./src/assets/people03.png",
    },
  ];
</script>

<section id="clients" class="mx-auto my-24 px-16 pt-16 lg:px-10">
  <div
    class="mb-16 flex flex-col items-center gap-12 md:mx-16 lg:mx-auto lg:flex-row lg:justify-between lg:gap-0"
  >
    <h2
      class="text-center text-4xl font-bold leading-snug text-textColorExtraLighter lg:w-5/12 lg:text-left lg:text-5xl"
    >
      What people are saying about us
    </h2>

    <p
      class="text-center text-lg font-medium leading-loose tracking-wide text-textColorSemiLighter lg:w-5/12 lg:text-left"
    >
      Everything you need to accept card payments and grow your business
      anywhere on the planet.
    </p>
  </div>

  <div
    class="mx-auto flex flex-col flex-wrap items-center justify-center gap-16 md:flex-row md:items-stretch md:gap-6 lg:flex-nowrap"
  >
    {#each testimonialData as tData (tData.author)}
      <CardTestimonial data={tData} />
    {/each}
  </div>

  <ClientsLogo />
</section>

<!-- Component markup -->

<style>
  /* Component styles */
</style>
