<script setup>
import { RouterView } from "vue-router";

import Header from "./components/shared/HeaderComponent.vue";
import Footer from "./components/shared/FooterComponent.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
