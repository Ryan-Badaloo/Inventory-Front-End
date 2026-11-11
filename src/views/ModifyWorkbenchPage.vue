<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
        <ModifyWorkbench @device-selected="selectedDevice = $event" />

        <Transition name="fade" mode="out-in">
            <component
                :is="getComponent(selectedDevice)"
                v-if="selectedDevice"
                :key="selectedDevice"
            />
        </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import ViewWorkbenches from '@/components/ModifyWorkbench/ViewWorkbenches.vue';
import AddWorkbench from '@/components/ModifyWorkbench/AddWorkbench.vue';
import RemoveWorkbench from '@/components/ModifyWorkbench/RemoveWorkbench.vue';

import ModifyWorkbench from '@/components/ModifyWorkbench/ModifyWorkbench.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'view_workbenches':
      return ViewWorkbenches;
    case 'add_workbench':
      return AddWorkbench;
    case 'remove_workbench':
      return RemoveWorkbench;
    default:
      return null;
  }
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>