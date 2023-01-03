<template>
  <header
    class="w-4/5 mx-auto py-10 flex flex-row items-center justify-between font-public-sans font-bold bg-transparent"
  >
    <CreateNavigation :header="true" />

    <button
      type="button"
      class="bg-[#ba4270] rounded-3xl px-6 py-3 text-[#FBFCFE]"
    >
      Schedule a Demo
    </button>
  </header>
</template>

<script>
import CreateNavigation from "./CreateNavigation.vue";

export default {
  components: {
    CreateNavigation,
  },
};
</script>
