<script>
  import { usageCountData } from "../../store";

  const { userActive, trustedCopmanies, transaction } = $usageCountData;

  const data = [userActive, trustedCopmanies, transaction];
</script>

<div
  class=" mb-24 flex flex-col items-center gap-8 px-[4.5rem] py-8 text-textColorExtraLighter lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-0"
>
  {#each data as dCount}
    <div class="flex items-center gap-2">
      <span class="text-[44px] font-bold leading-relaxed"
        >{dCount.split("+")[0] + "+"}</span
      >
      <span class="liner-gradiant-text text-[17px] font-bold"
        >{dCount.split("+")[1]}</span
      >
    </div>
  {/each}
</div>

<style>
  /* Component styles */
</style>
