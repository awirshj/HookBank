<script>
  import GetStartedBtn from "../BTNs/GetStartedBtn.svelte";
</script>

<section id="feature" class="pt-24">
  <div
    class=" mx-auto flex flex-col items-stretch justify-start gap-10 px-10 py-8 md:items-center lg:flex-row lg:justify-between lg:gap-12 lg:px-16"
  >
    <div class=" flex flex-col items-center gap-10 lg:w-1/2 lg:items-start">
      <h1
        class="w-full text-center text-4xl font-bold leading-snug text-textColorLighter lg:text-start lg:text-5xl"
      >
        You do the business,<br /> we’ll handle the money.
      </h1>

      <p
        class="text-center text-xl font-medium leading-relaxed text-textColor lg:text-left"
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <GetStartedBtn />
    </div>
    <div class=" flex flex-col items-start gap-12 lg:gap-6">
      <div
        class="featureItemHover flex w-full max-w-xl flex-col items-center gap-5 rounded-2xl px-8 py-6 pl-2 transition md:flex-row"
      >
        <div
          class="z-0 h-fit w-fit rounded-full border-2 border-solid border-gray-800 bg-gray-900 px-4 py-4"
        >
          <img class="z-10" src="./src/assets/star.svg" alt="start" />
        </div>

        <div class="flex flex-col items-center gap-4 md:items-start md:gap-0">
          <h4 class=" text-xl font-semibold text-textColorLighter">Rewards</h4>
          <p class="text-center text-textColor opacity-90 md:text-start">
            The best credit cards offer some tantalizing combinations of
            promotions and prizes
          </p>
        </div>
      </div>
      <div
        class="featureItemHover flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl px-8 py-6 pl-2 transition md:flex-row"
      >
        <div
          class="z-0 h-fit w-fit rounded-full border-2 border-solid border-gray-800 bg-gray-900 px-4 py-4"
        >
          <img class="z-10" src="./src/assets/shield.svg" alt="shield" />
        </div>

        <div class="flex flex-col items-center gap-4 md:items-start md:gap-0">
          <h4 class="text-xl font-semibold text-textColorLighter">
            100% Secured
          </h4>
          <p class="text-center text-textColor opacity-90 md:text-start">
            We take proactive steps make sure your information and transactions
            are secure.
          </p>
        </div>
      </div>
      <div
        class="featureItemHover flex w-full max-w-xl flex-col items-center gap-4 rounded-2xl px-8 py-6 pl-2 transition md:flex-row"
      >
        <div
          class="z-0 h-fit w-fit rounded-full border-2 border-solid border-gray-800 bg-gray-900 px-4 py-4"
        >
          <img class="z-10" src="./src/assets/send.svg" alt="send" />
        </div>

        <div class="flex flex-col items-center gap-4 md:items-start md:gap-0">
          <h4 class="text-xl font-semibold text-textColorLighter">
            Balance Transfer
          </h4>
          <p class="text-center text-textColor opacity-90 md:text-start">
            A balance transfer credit card can save you a lot of money in
            interest charges.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .featureItemHover:hover {
    background: linear-gradient(125.17deg, #27272741, #11101d);
  }
</style>
