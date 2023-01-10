<template>
  <main>
    <section
      class="bg-cicle-patter bg-no-repeat bg-home-main-cicle-patter-position pt-32"
    >
      <div class="w-4/5 mx-auto flex items-center justify-between">
        <div class="w-[546px]">
          <h1 class="font-dm-serif-display text-7xl text-[#36536B]">
            Start building with our APIs for absolutely free.
          </h1>
          <div class="mt-10">
            <ScheduleDemoInputComponentVue class="mb-2" />
            <span class="ml-7">
              Have any questions? <strong>Contact us</strong>
            </span>
          </div>
        </div>
        <div>
          <img
            src="../../assets/home/desktop/illustration-phone-mockup.svg"
            alt="phone mockup"
          />
        </div>
      </div>
    </section>

    <section class="bg-[#1B262F] text-white py-24">
      <div class="w-4/5 mx-auto grid grid-cols-2">
        <div class="w-[445px]">
          <h1 class="font-dm-serif-display text-5xl mb-6">Who we work with</h1>
          <p class="font-public-sans text-[#FBFCFE] opacity-70 mb-7">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <button class="border border-white rounded-3xl px-6 py-3">
            About us
          </button>
        </div>
        <div
          class="flex flex-row flex-wrap items-center justify-end gap-14 fill-white"
        >
          <GoogleLogo />
          <HewlettPackardLogo />
          <MicrosoftLogo />
          <NvidiaLogo />
          <OracleLogo />
          <TeslaLogo />
        </div>
      </div>
    </section>

    <section class="bg-cicle-patter bg-no-repeat bg-[140%_center]">
      <div class="flex items-center gap-32 w-4/5 mx-auto">
        <img
          src="../../assets/home/desktop/illustration-easy-to-implement.svg"
          alt="example code for implementation"
        />
        <div class="w-[445px]">
          <h1 class="font-dm-serif-display text-5xl text-[#36536B]">
            Easy to implement
          </h1>
          <p class="font-public-sans text-[#6C8294] mt-6">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between w-4/5 mx-auto">
        <div class="w-[445px]">
          <h1 class="font-dm-serif-display text-5xl text-[#36536B]">
            Simple UI & UX
          </h1>
          <p class="font-public-sans text-[#6C8294] mt-6">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
        <img
          src="../../assets/home/desktop/illustration-simple-ui.svg"
          alt="phone ui illustration"
        />
      </div>

      <div class="flex items-center justify-between w-4/5 mx-auto">
        <div
          class="flex flex-col items-center justify-center max-w-[350px]"
          v-for="(topic, index) in topics"
          :key="index"
        >
          <img class="mb-8" :src="getImageUrl(topic.iconSrc)" />
          <h3
            class="mb-4 font-public-sans font-bold text-lg text-center text-[#36536B]"
          >
            {{ topic.title }}
          </h3>
          <p class="font-public-sans text-center text-[#6C8294]">
            {{ topic.text }}
          </p>
        </div>
      </div>

      <div class="flex items-center justify-between w-4/5 mx-auto my-24">
        <h1 class="font-dm-serif-display text-5xl text-[#36536B]">
          Ready to start?
        </h1>
        <ScheduleDemoInputComponentVue />
      </div>
    </section>
  </main>
</template>

<script>
import ScheduleDemoInputComponentVue from "../../components/shared/ScheduleDemoInputComponent.vue";

import GoogleLogo from "../../assets/shared/desktop/GoogleLogo.vue";
import HewlettPackardLogo from "../../assets/shared/desktop/HewlettPackardLogo.vue";
import MicrosoftLogo from "../../assets/shared/desktop/MicrosoftLogo.vue";
import NvidiaLogo from "../../assets/shared/desktop/NvidiaLogo.vue";
import OracleLogo from "../../assets/shared/desktop/OracleLogo.vue";
import TeslaLogo from "../../assets/shared/desktop/TeslaLogo.vue";

export default {
  name: "HomeView",
  components: {
    ScheduleDemoInputComponentVue,
    GoogleLogo,
    HewlettPackardLogo,
    MicrosoftLogo,
    NvidiaLogo,
    OracleLogo,
    TeslaLogo,
  },
  data() {
    return {
      topics: [
        {
          iconSrc: "../../assets/home/desktop/icon-banking-and-coverage.svg",
          title: "Personal Finances",
          text: "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.",
        },
        {
          iconSrc: "../../assets/home/desktop/icon-personal-finances.svg",
          title: "Banking & Coverage",
          text: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
        },
        {
          iconSrc: "../../assets/home/desktop/icon-consumer-payments.svg",
          title: "Consumer Payments",
          text: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
        },
      ],
    };
  },
  setup() {
    const getImageUrl = (path) => {
      return new URL(path, import.meta.url).href;
    };
    return { getImageUrl };
  },
};
</script>
