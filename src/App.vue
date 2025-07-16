<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <div class="bg-gray-200">
    <Navbar />
    <RouterView />
  </div>

</template>

<style scoped>

</style>
