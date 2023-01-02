<template>
  <header
    class="w-4/5 mx-auto my-10 flex flex-row items-center justify-between font-public-sans font-bold bg-transparent"
  >
    <div class="flex gap-16 items-center">
      <router-link to="/">
        <img src="../../assets/shared/logo.svg" alt="payapi logo" />
      </router-link>

      <nav
        class="flex gap-10 t text-[#36536B] text-opacity-70 hover:text-opacity-100"
        v-for="(item, index) of navItems"
        :key="index"
      >
        <router-link :to="item.url">{{ item.label }}</router-link>
      </nav>
    </div>

    <button
      type="button"
      class="bg-[#ba4270] rounded-3xl px-6 py-3 text-[#FBFCFE]"
    >
      Schedule a Demo
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          url: "/pricing",
          label: "Pricing",
        },
        {
          url: "/about",
          label: "About",
        },
        {
          url: "/contact",
          label: "Contact",
        },
      ],
    };
  },
};
</script>
