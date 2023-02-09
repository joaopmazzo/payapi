<template>
  <div class="flex flex-col items-start gap-4 w-[350px]">
    <div class="h-[1px] w-full bg-[#36536B] opacity-25" />

    <div class="flex flex-col">
      <span class="font-public-sans text-[#36536B] opacity-70">{{
        title
      }}</span>
      <span
        class="font-dm-serif-display text-6xl tracking-[-0.430769px] text-[#BA4270]"
      >
        {{ value }}
      </span>
    </div>

    <div class="h-[1px] w-full bg-[#36536B] opacity-25" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>
