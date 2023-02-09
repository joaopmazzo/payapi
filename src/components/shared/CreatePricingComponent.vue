<template>
  <div>
    <h1>{{ pricingProps.title }}</h1>
    <p>{{ pricingProps.description }}</p>

    <h1>${{ pricingProps.pricingPlan }}</h1>

    <!-- <div v-for="(index, benefit) in benefits" :key="index">
      <span>
        {{ benefit }}
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    pricingProps: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      pricingPlan: {
        type: String,
        required: true,
      },
      // benefits: {
      //   type: String,
      //   required: true,
      // },
    },
  },
};
</script>
