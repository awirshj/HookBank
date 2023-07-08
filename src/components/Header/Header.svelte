<script>
  import { onMount } from "svelte";
  import { logo } from "../../assets";
  let navMenuClass = "hidden";
  let navMenuBtnClass = "";

  function updateScreenWidth() {
    if (window.innerWidth < 768 || navMenuBtnClass === "") return;

    navMenuClass = "hidden";
    navMenuBtnClass = "";
  }
  onMount(() => {
    // EventHanler for resize the broswer

    window.addEventListener("resize", updateScreenWidth);

    // EventHandler for click on burger menu
    const menuBtn = document.querySelector(".burgerMenu--btn");
    const menuItmes = document.querySelector(".nav--menu");

    if (!menuBtn || !menuItmes) return;

    menuBtn.addEventListener("click", handleBurgerMenuBtn);
    function handleBurgerMenuBtn() {
      if (navMenuBtnClass !== "") {
        navMenuBtnClass = "";
        navMenuClass = "hidden";
      } else {
        navMenuBtnClass = "burgerMenu--btn-open";

        navMenuClass = "burgerMenu--style";
      }
    }
    // event handler for scroll into section
    document
      .querySelector(".nav-link-container")
      .addEventListener("click", scrollTo);
    function scrollTo(e) {
      if (!e.target.closest("nav-link-event")) return;
      const id = e.target.getAttributes("href");
      if (!id) return;
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }

    // event handler for sticky nav  with interSectionObserver
    const header = document.getElementById("header");
    const stickyNavObs = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        !entry.isIntersecting
          ? header.classList.add("sticky-nav")
          : header.classList.remove("sticky-nav");
      },
      {
        root: null,
        threshold: 0,
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px  `,
      }
    );
    const secHero = document.getElementById("hero");
    stickyNavObs.observe(secHero);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      menuBtn.removeEventListener("click", handleBurgerMenuBtn);
    };
  });
</script>

<div
  id="header"
  class=" container relative mx-auto flex
     h-20 max-w-4xl flex-nowrap items-center justify-between
      border-opacity-40 px-10 py-4 md:max-w-full md:px-16"
>
  <div class="w-1/4 md:w-[160px]">
    <img src={logo} alt="logo" class="h-auto w-full" />
  </div>

  <div>
    <button class="{navMenuBtnClass} burgerMenu--btn md:hidden">
      <span class="fLine--btn" />
      <span class="sLine--btn" />
      <span class="tLine--btn" />
    </button>
  </div>

  <div
    class="nav-link-container {navMenuClass} nav--menu items-center gap-6 px-6 py-2 text-base
    font-semibold
    text-textColor
    opacity-60 transition
    md:flex md:opacity-100"
  >
    <a
      href="#home"
      class="nav-link-event transition duration-300
      hover:-translate-y-0.5 hover:scale-105 hover:text-textColorSemiLighter"
      >Home</a
    >
    <a
      href="#feature"
      class="nav-link-event transition duration-300
      hover:-translate-y-0.5 hover:scale-105 hover:text-textColorSemiLighter"
      >Features</a
    >
    <a
      href="#products"
      class="nav-link-event transition duration-300
      hover:-translate-y-0.5 hover:scale-105 hover:text-textColorSemiLighter"
      >Products</a
    >
    <a
      href="#clients"
      class="nav-link-event transition duration-300
      hover:-translate-y-0.5 hover:scale-105 hover:text-textColorSemiLighter"
      >Clients</a
    >
  </div>
</div>

<style>
  a {
    display: inline-block;
  }

  .sticky-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* background-color: #1a1d2788; */
    background-color: #1a1d2799;
    z-index: 99999;
    border-color: rgba(24, 26, 36, 0.6);
    border-bottom: 2px solid;
  }
</style>
