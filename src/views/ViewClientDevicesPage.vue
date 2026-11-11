<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <ViewClient />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import ViewClient from '@/components/ViewClientDevices.vue';
</script>