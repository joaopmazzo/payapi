<template>
  <form
    class="flex rounded-3xl overflow-hidden drop-shadow-schedule-demo-shadow"
  >
    <input
      type="text"
      placeholder="Enter email address"
      class="px-6 py-3 w-72 outline-none"
    />
    <ButtonComponent buttonText="Schedule a Demo" buttonType="primary" />
  </form>
</template>

<script>
import ButtonComponent from "../../components/shared/ButtonComponent.vue";

export default {
  components: {
    ButtonComponent,
  },
};
</script>
