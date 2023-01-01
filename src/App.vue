<script setup>
import { RouterView } from "vue-router";
import Header from "../src/components/shared/Header.vue";
</script>

<template>
  <Header />

  <RouterView />

  <footer></footer>
</template>
