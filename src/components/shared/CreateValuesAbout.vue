<template>
  <div class="grid grid-cols-[26%_1fr]">
    <h2
      class="font-dm-serif-display text-3xl track-[-0.246154px] text-[#36536B] text-center"
    >
      {{ title }}
    </h2>
    <p class="font-public-sans text-[#6C8294]">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
