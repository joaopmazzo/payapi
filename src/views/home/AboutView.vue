<template>
  <main>
    <section
      class="bg-cicle-patter bg-pricing-main-cicle bg-no-repeat bg-pricing-main-cicle-patter-position pt-36"
    >
      <div class="w-4/5 mx-auto px-28 flex flex-col gap-14">
        <h1
          class="font-dm-serif-display text-6xl track-[-0.430769px] text-[#36536B] max-w-3xl"
        >
          We empower innovators by delivering access to the financial system
        </h1>
        <CreateValuesAbout :title="value1.title" :text="value1.text" />
        <CreateValuesAbout :title="value2.title" :text="value2.text" />
      </div>

      <div
        class="bg-cicle-patter bg-about-cicle-patter-position bg-no-repeat bg-about-cicle py-36 -my-9"
      >
        <img
          :src="
            getImageUrl('../../assets/about/desktop/image-team-members.jpg')
          "
          value4
          alt="group having a chat"
          class="w-full"
        />
      </div>

      <div class="w-4/5 mx-auto flex flex-row justify-center gap-5 mb-20">
        <div v-for="(statisticAbout, index) in statisticsAbout" :key="index">
          <StatisticAboutComponent
            :title="statisticAbout.title"
            :value="statisticAbout.value"
          />
        </div>
      </div>

      <div class="w-4/5 mx-auto px-28 flex flex-col gap-14">
        <CreateValuesAbout :title="value3.title" :text="value3.text" />
        <CreateValuesAbout :title="value4.title" :text="value4.text" />
      </div>
    </section>
  </main>
</template>

<script>
import CreateValuesAbout from "../../components/shared/CreateValuesAbout.vue";
import StatisticAboutComponent from "../../components/shared/StatisticAboutComponent.vue";

export default {
  components: {
    CreateValuesAbout,
    StatisticAboutComponent,
  },
  data() {
    return {
      value1: {
        title: "Our Vision",
        text: "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
      },
      value2: {
        title: "Our Business",
        text: "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
      },
      value3: {
        title: "The Culture",
        text: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
      },
      value4: {
        title: "The People",
        text: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
      },
      statisticsAbout: [
        {
          title: "Team Members",
          value: "300+",
        },
        {
          title: "Offices in the US",
          value: "3",
        },
        {
          title: "Transactions analyzed",
          value: "10M+",
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
