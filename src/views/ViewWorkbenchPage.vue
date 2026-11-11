<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <ViewWorkbench  />
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/components/SideBar.vue';
import ViewWorkbench from '@/components/ModifyWorkbench/ViewWorkbenchTemplate.vue';
</script>

