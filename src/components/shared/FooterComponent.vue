<template>
  <footer>
    <div class="flex items-center justify-between w-4/5 mx-auto my-24">
      <h1 class="font-dm-serif-display text-5xl text-[#36536B]">
        Ready to start?
      </h1>
      <ScheduleDemoInputComponentVue />
    </div>

    <div
      class="bg-[#1B262F] bg-cicle-patter bg-no-repeat bg-footer-cicle-patter-position"
    >
      <div
        class="w-4/5 mx-auto py-8 flex flex-row items-center justify-between font-public-sans font-bold"
      >
        <CreateNavigation />

        <div class="flex items-center gap-6 mr-3">
          <a href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ScheduleDemoInputComponentVue from "../../components/shared/ScheduleDemoInputComponent.vue";
import CreateNavigation from "./CreateNavigation.vue";

import FacebookIcon from "../icons/FacebookIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import LinkedinIcon from "../icons/LinkedinIcon.vue";

export default {
  components: {
    ScheduleDemoInputComponentVue,
    CreateNavigation,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
  },
};
</script>
