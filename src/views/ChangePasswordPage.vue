<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <ChangePassword />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import ChangePassword from '@/components/ChangePassword.vue';
</script>