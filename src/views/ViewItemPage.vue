<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <ViewItem />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import ViewItem from '@/components/ViewItemTemplate.vue';
</script>