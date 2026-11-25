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
import CPUType from '@/components/Settings/CPUType.vue';
import ConnectionType from '@/components/Settings/ConnectionType.vue';
import PrinterFeature from '@/components/Settings/PrinterFeature.vue';
import FormFactor from '@/components/Settings/FormFactor.vue';
import RaidType from '@/components/Settings/RaidType.vue';
import MeetingRoom from '@/components/Settings/MeetingRoom.vue';
import MonitorType from '@/components/Settings/MonitorType.vue';
import MonitorFunction from '@/components/Settings/MonitorFunction.vue';
import BagType from '@/components/Settings/BagType.vue';
import BagFabricType from '@/components/Settings/BagFabricType.vue';
import OperatingSystem from '@/components/Settings/OperatingSystem.vue';
import MemoryCapacity from '@/components/Settings/MemoryCapacity.vue';
import HardDiskCapacity from '@/components/Settings/HardDiskCapacity.vue';
import MicrosoftOfficeVersion from '@/components/Settings/MicrosoftOfficeVersion.vue';
import ProcessorType from '@/components/Settings/ProcessorType.vue';

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
        case 'form_factor':
            return FormFactor;
        case 'raid_type':
            return RaidType;
        case 'meeting_room':
            return MeetingRoom;
        case 'monitor_type':
            return MonitorType;
        case 'monitor_function':
            return MonitorFunction;
        case 'bag_type':
            return BagType;
        case 'bag_fabric_type':
            return BagFabricType;
        case 'operating_system':
            return OperatingSystem;
        case 'memory_capacity':
            return MemoryCapacity;
        case 'hard_disk_capacity':
            return HardDiskCapacity;
        case 'microsoft_office_version':
            return MicrosoftOfficeVersion;
        case 'processor_type':
            return ProcessorType;
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