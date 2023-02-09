<template>
  <button
    v-if="buttonType === 'primary'"
    type="button"
    class="bg-[#ba4270] rounded-3xl px-6 py-3 text-[#FBFCFE] right-6 hover:bg-[#DA6D97]"
  >
    {{ buttonText }}
  </button>
  <button
    v-if="buttonType === 'secondary'"
    type="button"
    class="border border-white rounded-3xl px-6 py-3 hover:bg-white hover:text-[#1b262f]"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      required: true,
    },
  },
};
</script>
