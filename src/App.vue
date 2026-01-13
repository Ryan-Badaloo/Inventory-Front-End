<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div class="bg-gray-100">
    <Navbar />
    <RouterView />
  </div>
</template>
