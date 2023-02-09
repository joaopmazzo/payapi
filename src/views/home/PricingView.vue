<template>
  <main>
    <section
      class="bg-cicle-patter bg-pricing-main-cicle bg-no-repeat bg-pricing-main-cicle-patter-position pt-32"
    >
      <div class="w-4/5 mx-auto">
        <h1
          class="font-dm-serif-display text-6xl text-[#36536B] pt-10 pb-[72px]"
        >
          Pricing
        </h1>
      </div>
    </section>
    <div class="w-4/5 mx-auto flex flex-row gap-10">
      <div v-for="(pricingProp, index) in pricingProps" :key="index">
        <CreatePricingComponent :pricingProps="pricingProp" />
      </div>
    </div>
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
            {
              text: "Transactions",
              enabled: true,
            },
            {
              text: "Auth",
              enabled: true,
            },
            {
              text: "Identity",
              enabled: true,
            },
            {
              text: "Investments",
              enabled: false,
            },
            {
              text: "Assets",
              enabled: false,
            },
            {
              text: "Liabilities",
              enabled: false,
            },
            {
              text: "Income",
              enabled: false,
            },
          ],
        },
        {
          title: "Basic Plan",
          description:
            "Launch your project with unlimited requests and no contractual minimums",
          pricingPlan: "249.00",
          benefits: [
            {
              text: "Transactions",
              enabled: true,
            },
            {
              text: "Auth",
              enabled: true,
            },
            {
              text: "Identity",
              enabled: true,
            },
            {
              text: "Investments",
              enabled: true,
            },
            {
              text: "Assets",
              enabled: true,
            },
            {
              text: "Liabilities",
              enabled: false,
            },
            {
              text: "Income",
              enabled: false,
            },
          ],
        },
        {
          title: "Premium Plan",
          description:
            "Get Tailored solutions, volume pricing, and dedicated support for your team",
          pricingPlan: "499.00",
          benefits: [
            {
              text: "Transactions",
              enabled: true,
            },
            {
              text: "Auth",
              enabled: true,
            },
            {
              text: "Identity",
              enabled: true,
            },
            {
              text: "Investments",
              enabled: true,
            },
            {
              text: "Assets",
              enabled: true,
            },
            {
              text: "Liabilities",
              enabled: true,
            },
            {
              text: "Income",
              enabled: true,
            },
          ],
        },
      ],
    };
  },
};
</script>
