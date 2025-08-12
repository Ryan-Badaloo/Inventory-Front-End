<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <UpdateRequest />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import UpdateRequest from '@/components/UpdateDevice/UpdateRequest.vue';
</script>