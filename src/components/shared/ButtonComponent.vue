<template>
  <button
    v-if="buttonType === 'primary'"
    type="button"
    class="bg-[#ba4270] rounded-3xl px-6 py-3 text-[#FBFCFE] right-6 hover:bg-[#DA6D97]"
  >
    {{ buttonText }}
  </button>
  <button
    v-if="buttonType === 'secondary-white'"
    type="button"
    class="border border-white rounded-3xl px-6 py-3 hover:bg-white hover:text-[#1b262f]"
  >
    {{ buttonText }}
  </button>
  <button
    v-if="buttonType === 'secondary-black'"
    type="button"
    class="border border-[#36536B] text-[#36536B] rounded-3xl px-6 py-3 hover:bg-[#36536B] hover:text-white"
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
