<template>
  <div class="grid grid-cols-[max-content_1fr] gap-6 items-center">
    <font-awesome-icon
      icon="fa-check"
      :class="enabled ? 'text-[#BA4270]' : 'text-transparent'"
    />
    <span :class="`text-[#36536B] ${enabled || 'opacity-60'}`">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    enabled: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
