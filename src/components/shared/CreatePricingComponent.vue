<template>
  <div class="flex flex-col items-start max-w-[350px]">
    <div class="flex flex-col gap-2">
      <h1 class="font-dm-serif-display text-3xl text-[#BA4270]">
        {{ pricingProps.title }}
      </h1>
      <p class="font-public-sans tracking-[-0.246154px] text-[#6C8294]">
        {{ pricingProps.description }}
      </p>

      <h1
        class="font-dm-serif-display text-6xl tracking-[-0.430769px] text-[#36536B]"
      >
        ${{ pricingProps.pricingPlan }}
      </h1>
    </div>

    <div class="h-[1px] w-full my-6 bg-[#36536B] opacity-25" />

    <div
      v-for="(benefit, index) in pricingProps.benefits"
      :key="index"
      class="flex flex-col gap-2"
    >
      <BenefitsItems :text="benefit.text" :enabled="benefit.enabled" />
    </div>

    <div class="h-[1px] w-full my-6 bg-[#36536B] opacity-25" />

    <ButtonComponent buttonText="Request Access" buttonType="secondary-black" />
  </div>
</template>

<script>
import BenefitsItems from "./BenefitsItems.vue";
import ButtonComponent from "./ButtonComponent.vue";

export default {
  components: {
    BenefitsItems,
    ButtonComponent,
  },
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
      benefits: {
        text: {
          type: String,
          required: true,
        },
        enabled: {
          type: Boolean,
          required: true,
        },
      },
    },
  },
};
</script>
