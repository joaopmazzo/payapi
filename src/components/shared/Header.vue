<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/">
    <img src="../../assets/shared/logo.svg" alt="payapi logo" />
  </RouterLink>

  <nav>
    <RouterLink to="/">Pricing</RouterLink>
    <RouterLink to="/">About</RouterLink>
    <RouterLink to="/">Contact</RouterLink>
  </nav>
</template>
