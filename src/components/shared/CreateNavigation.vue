<template>
  <div class="flex gap-16 items-center">
    <router-link to="/">
      <img
        v-if="header"
        src="../../assets/shared/logo-dark-blue.svg"
        alt="payapi logo"
      />
      <img
        v-if="!header"
        src="../../assets/shared/logo-light.svg"
        alt="payapi logo"
      />
    </router-link>

    <nav
      class="flex gap-10 text-opacity-70 hover:text-opacity-100"
      :class="header ? 'text-[#36536B]' : 'text-[#FBFCFE]'"
      v-for="(item, index) of navItems"
      :key="index"
    >
      <router-link :to="item.url">{{ item.label }}</router-link>
    </nav>
  </div>
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
  props: {
    header: Boolean,
  },
};
</script>
