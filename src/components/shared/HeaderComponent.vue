<template>
  <header class="w-full absolute z-50">
    <div
      class="w-4/5 mx-auto py-10 flex flex-row items-center justify-between font-public-sans font-bold"
    >
      <CreateNavigation :header="true" />

      <ButtonComponent buttonText="Schedule a Demo" buttonType="primary" />
    </div>
  </header>
</template>

<script>
import CreateNavigation from "./CreateNavigation.vue";
import ButtonComponent from "../../components/shared/ButtonComponent.vue";

export default {
  components: {
    CreateNavigation,
    ButtonComponent,
  },
};
</script>
