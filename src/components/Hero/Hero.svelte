<script>
  import { arrowUp, discount, robot } from "../../assets";
  import Usage from "./Usage.svelte";
</script>

<section id="home">
  <div class="flex items-center justify-center">
    <div class="w-full xl:max-w-[1280px]">
      <section
        id="hero"
        class="flex flex-col items-center gap-10 py-6 sm:py-16 md:gap-20 lg:flex-row lg:gap-0"
      >
        <div
          class="flex flex-1 flex-col items-center justify-start gap-1 px-6 pt-16 sm:px-10 lg:items-start xl:px-0"
        >
          <div
            class=" mb-10 flex w-fit items-center gap-2 rounded-xl px-6 py-2 pl-1"
            style="  background:linear-gradient(125.17deg,#272727,#11101d);"
          >
            <img src="{discount}" alt="discount" />
            <p class="text-[18px] font-semibold italic text-textColor">
              <span
                class="border-spacing-1 border-b-2 border-gray-700 px-0.5 text-textColorLighter"
              >
                20%</span
              >
              DISCOUNT FOR
              <span
                class="border-spacing-1 border-b-2 border-gray-700 text-textColorLighter"
              >
                1 MONTH</span
              > ACCOUNT
            </p>
          </div>

          <div
            class="mt-2 flex
        w-full items-center justify-center lg:justify-between"
          >
            <h1
              class="text-center text-5xl font-bold leading-none text-textColorExtraLighter lg:text-left lg:text-[80px]"
            >
              The Next <br /><span
                class="liner-gradiant-text text-center lg:text-left"
                >Generation</span
              >
            </h1>
            <div
              class=" liner-gradiant-text ml-1 hidden h-full w-full cursor-pointer items-center justify-center lg:flex"
            >
              <div
                class="flex flex-col items-center justify-center gap-3 rounded-full border-2 border-solid border-[#33bbcf] px-9 py-9"
              >
                <div
                  class=" flex flex-row-reverse items-center justify-between gap-0.5"
                >
                  <div><img src="{arrowUp}" alt="" /></div>

                  <p
                    class="text-[18px] font-bold tracking-wide text-textColorLighter"
                  >
                    Get
                  </p>
                </div>
                <p
                  class="text-[18px] font-bold tracking-wide text-textColorLighter"
                >
                  Started
                </p>
              </div>
            </div>
            <div />
          </div>

          <h2
            class="mt-1 w-full text-center text-5xl font-bold text-textColorExtraLighter lg:mt-0 lg:text-left
           lg:text-[68px]"
          >
            Payment Method
          </h2>

          <p
            class="mt-10 w-4/5 text-center text-[18px] font-medium italic leading-relaxed tracking-wide text-textColorSemiLighter lg:text-left"
          >
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div class=" relative my-10 max-w-2xl flex-1 self-end md:my-0">
          <img
            class=" w-full self-end"
            src="{robot}"
            alt="robot hand"
          />
        </div>

        <!-- useage counter -->
      </section>
      <Usage />
    </div>
  </div>
</section>

<!-- Component markup -->

<style>
  /* Component styles */
</style>
