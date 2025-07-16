<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <UpdateItem />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import UpdateItem from '@/components/UpdateDevice/UpdateItem.vue';
</script>