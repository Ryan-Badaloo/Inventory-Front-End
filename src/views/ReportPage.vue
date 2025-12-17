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
import DeliveryDate from '@/components/Reports/DeliveryDate.vue';
import DeploymentDate from '@/components/Reports/DeploymentDate.vue';
import BeingRepaired from '@/components/Reports/BeingRepaired.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'location_count':
      return LocationCount;
    case 'location_report':
      return LocationReport;
    case 'delivery_date':
      return DeliveryDate;
    case 'deployment_date':
      return DeploymentDate;
    case 'being_repaired':
      return BeingRepaired;
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