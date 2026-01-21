<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
        <Settings @device-selected="selectedDevice = $event" />

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
import SystemStatus from '@/components/Settings/SystemStatus.vue';
import CPUType from '@/components/Settings/CPUType.vue';
import ConnectionType from '@/components/Settings/ConnectionType.vue';
import PrinterFeature from '@/components/Settings/PrinterFeature.vue';
import Division from '@/components/Settings/Division.vue';



import Settings from '@/components/Settings/Settings.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'system_status':
      return SystemStatus;
    case 'cpu_type':
      return CPUType;
    case 'connection_type':
      return ConnectionType;
    case 'printer_feature':
      return PrinterFeature;
    case 'division':
      return Division;
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