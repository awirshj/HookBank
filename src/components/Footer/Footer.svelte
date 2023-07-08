<script>
  // Component logic
  import { logoSrc, footerLinks } from "../../store";

  import ContactUsApps from "./ContactUsApps.svelte";
  import LinksCol from "./LinksCol.svelte";
</script>

<!-- Component markup -->
<footer
  class="mx-auto border-t-2 border-solid border-gray-800 border-opacity-40 px-10 pt-32"
>
  <div
    class="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-3"
  >
    <div class="flex flex-col items-center gap-4 md:items-start">
      <a href="#top" class=" inline-block w-1/4 md:w-[200px]">
        <img src={$logoSrc} alt="logo" class="h-auto w-full" />
      </a>
      <p
        class="w-1/2 text-center text-base font-medium tracking-wide text-textColor lg:text-left"
      >
        A new way to make the payments easy, reliable and secure.
      </p>
      <div class="mt-4 flex items-center gap-6">
        <ContactUsApps />
      </div>
    </div>

    <div
      class="mx-auto flex w-full max-w-xl items-start justify-between space-x-3"
    >
      {#each $footerLinks as linksCol}
        <LinksCol {linksCol} />
      {/each}
    </div>
  </div>
  <div
    class="mt-20 border-t-[1px] border-solid border-gray-800 py-4 text-textColor"
  >
    Copyright &copy; OJR ( {@html '<a target="_blank" class="text-red-700" href="https://github.com/awirshj">Awirshj</a>'}
    ), Inspired by ( {@html "<a class='text-red-700' target='_blank' href='https://github.com/OmidPishkar/HooBank'>Omid Pishkar</a>"}
    )
  </div>
</footer>

<style>
  /* Component styles */
</style>
