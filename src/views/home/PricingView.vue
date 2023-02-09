<template>
  <main>
    <section
      class="bg-cicle-patter bg-no-repeat bg-home-main-cicle-patter-position pt-32"
    >
      <div class="w-4/5 mx-auto">
        <h1
          class="font-dm-serif-display text-6xl text-[#36536B] pt-10 pb-[72px]"
        >
          Pricing
        </h1>
      </div>
    </section>
    <section v-for="(index, pricingProp) in pricingProps" :key="index">
      <CreatePricingComponent :pricingProps="pricingProp" />
    </section>
  </main>
</template>

<script>
import CreatePricingComponent from "../../components/shared/CreatePricingComponent.vue";

export default {
  components: {
    CreatePricingComponent,
  },
  data() {
    return {
      // pricingProps: Object,
      pricingProps: [
        {
          title: "Free Plan",
          description:
            "Build and test using our core set of products with up to 100 API requests",
          pricingPlan: "0.00",
          benefits: [
            "Transactions",
            "Auth",
            "Identity",
            "Investments",
            "Assets",
            "Liabilities",
            "Income",
          ],
        },
      ],
    };
  },
};
</script>
