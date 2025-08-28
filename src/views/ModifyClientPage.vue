<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
        <ModifyClient @device-selected="selectedDevice = $event" />

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
import AddClient from '@/components/ModifyClient/AddClient.vue';
import RemoveClient from '@/components/ModifyClient/RemoveClient.vue';
import ViewClient from '@/components/ModifyClient/ViewClient.vue';

import ModifyClient from '@/components/ModifyClient/ModifyClient.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'add_client':
      return AddClient;
    case 'remove_client':
      return RemoveClient;
    case 'view_client':
      return ViewClient;
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