<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <AssignWorkbench />
    </div>
  </div>
</template>
  
<script setup>
import SideBar from '@/components/SideBar.vue';
import AssignWorkbench from '@/components/AssignWorkbench/AssignWorkbench.vue';
</script>