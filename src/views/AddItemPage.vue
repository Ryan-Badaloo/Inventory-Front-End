<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
      <SelectDevice @device-selected="selectedDevice = $event" />

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
import AddLaptop from '@/components/AddDevice/AddLaptop.vue';
import AddTablet from '@/components/AddDevice/AddTablet.vue';  
import AddMouse from '@/components/AddDevice/AddMouse.vue';
import AddKeyboard from '@/components/AddDevice/AddKeyboard.vue';
import AddScanner from '@/components/AddDevice/AddScanner.vue';
import AddSurgeProtector from '@/components/AddDevice/AddSurgeProtector.vue';
import AddUPS from '@/components/AddDevice/AddUPS.vue';
import AddSpeaker from '@/components/AddDevice/AddSpeaker.vue';
import AddWebcam from '@/components/AddDevice/AddWebcam.vue';
import AddOtherEquipment from '@/components/AddDevice/AddOtherEquipment.vue';
import AddPrinter from '@/components/AddDevice/AddPrinter.vue';
import AddProjector from '@/components/AddDevice/AddProjector.vue';
import AddConferenceRoom_AV_Equipment from '@/components/AddDevice/AddConferenceRoom_AV_Equipment.vue';

import SelectDevice from '@/components/SelectItem/SelectItem.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'laptop':
      return AddLaptop;
    case 'tablet':
      return AddTablet;
    case 'mouse':
      return AddMouse;
    case 'keyboard':
      return AddKeyboard;
    case 'scanner':
      return AddScanner;
    case 'surge_protector':
      return AddSurgeProtector;
    case 'ups':
      return AddUPS;
    case 'speaker':
      return AddSpeaker;
    case 'webcam':
      return AddWebcam;
    case 'other_equipment':
      return AddOtherEquipment;
    case 'printer':
      return AddPrinter;
    case 'projector':
      return AddProjector;
    case 'conference_room_av_equipment':
      return AddConferenceRoom_AV_Equipment;
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
