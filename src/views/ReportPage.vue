<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
        <Reports @device-selected="selectedDevice = $event" />

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
import Reports from '@/components/Reports/Reports.vue';
import SideBar from '@/components/SideBar.vue';
import LocationCount from '@/components/Reports/LocationCount.vue';
import LocationReport from '@/components/Reports/LocationReport.vue';
import CPUType from '@/components/Settings/CPUType.vue';
import ConnectionType from '@/components/Settings/ConnectionType.vue';
import PrinterFeature from '@/components/Settings/PrinterFeature.vue';


import Settings from '@/components/Settings/Settings.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'location_count':
      return LocationCount;
    case 'location_report':
      return LocationReport;
    case 'connection_type':
      return ConnectionType;
    case 'printer_feature':
      return PrinterFeature;
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