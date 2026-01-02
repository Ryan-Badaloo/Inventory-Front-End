<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <AssignItem />
    </div>
  </div>
</template>
  
<script setup>
import SideBar from '@/components/SideBar.vue';
import AssignItem from '@/components/AssignItem/UnassignItem.vue';
</script>