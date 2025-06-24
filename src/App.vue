<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Extension from './components/extension/Extension.vue'
</script>

<template>
  <div class="p-2 mt-2 mx-10">
    <RouterLink :to="{ name: 'home' }" />
    <RouterView />
    <Extension />
  </div>
</template>

<style scoped></style>
