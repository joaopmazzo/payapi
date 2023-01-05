<template>
  <header class="w-full absolute">
    <div
      class="w-4/5 mx-auto py-10 flex flex-row items-center justify-between font-public-sans font-bold"
    >
      <CreateNavigation :header="true" />

      <button
        type="button"
        class="bg-[#BA4270] rounded-3xl px-6 py-3 text-[#FBFCFE]"
      >
        Schedule a Demo
      </button>
    </div>
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
