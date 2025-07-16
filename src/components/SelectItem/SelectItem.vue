<template>
<AddTemplate templateName="Select A Device To Add">
    <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
        <SelectDeviceButton @click="selectLaptop()" buttonText="Laptop" icon="laptop" :isActive="deviceActive==='laptop'"/>
        <SelectDeviceButton @click="selectTablet()" buttonText="Tablet" icon="tablet" :isActive="deviceActive==='tablet'"/>
        <SelectDeviceButton @click="selectMouse()" buttonText="Mouse" icon="mouse" :isActive="deviceActive==='mouse'"/>
        <SelectDeviceButton @click="selectKeyboard()" buttonText="Keyboard" icon="keyboard" :isActive="deviceActive==='keyboard'"/>
        <SelectDeviceButton @click="selectScanner()" buttonText="Scanner" icon="adf_scanner" :isActive="deviceActive==='scanner'"/>
        <SelectDeviceButton @click="selectSurgeProtector()" buttonText="Surge Protector" icon="bolt" :isActive="deviceActive==='surge_protector'"/>
        <SelectDeviceButton @click="selectUPS()" buttonText="UPS" icon="battery_charging_full" :isActive="deviceActive==='ups'"/>
        <SelectDeviceButton @click="selectSpeaker()" buttonText="Speaker" icon="volume_up" :isActive="deviceActive==='speaker'"/>
        <SelectDeviceButton @click="selectWebcam()" buttonText="Webcam" icon="camera" :isActive="deviceActive==='webcam'"/>
        <SelectDeviceButton @click="selectOtherEquipment()" buttonText="Other Equipment" icon="settings" :isActive="deviceActive==='other_equipment'"/>
        <SelectDeviceButton @click="selectPrinter()" buttonText="Printer" icon="print" :isActive="deviceActive==='printer'"/>
        <SelectDeviceButton @click="selectProjector()" buttonText="Projector" icon="present_to_all" :isActive="deviceActive==='projector'"/>
        <SelectDeviceButton @click="selectConferenceRoom_AV_Equipment()" buttonText="Conference Room AV Equipment" icon="construction" :isActive="deviceActive==='conference_room_av_equipment'"/>

    </div>
</AddTemplate>
</template>

<script setup>
import { ref } from 'vue';
import SelectDeviceButton from '@/components/SelectItem/SelectItemButton.vue';
import AddTemplate from '@/components/SectionTemplate.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')

function selectLaptop() {
    deviceActive.value = 'laptop';
    emit('deviceSelected', deviceActive.value);
}

function selectTablet() {
    deviceActive.value = 'tablet';
    emit('deviceSelected', deviceActive.value);
}

function selectMouse() {
    deviceActive.value = 'mouse';
    emit('deviceSelected', deviceActive.value);
}

function selectKeyboard() {
    deviceActive.value = 'keyboard';
    emit('deviceSelected', deviceActive.value);
}

function selectScanner() {
    deviceActive.value = 'scanner';
    emit('deviceSelected', deviceActive.value);
}

function selectSurgeProtector() {
    deviceActive.value = 'surge_protector';
    emit('deviceSelected', deviceActive.value);
}

function selectUPS() {
    deviceActive.value = 'ups';
    emit('deviceSelected', deviceActive.value);
}

function selectSpeaker() {
    deviceActive.value = 'speaker';
    emit('deviceSelected', deviceActive.value);
}

function selectWebcam() {
    deviceActive.value = 'webcam';
    emit('deviceSelected', deviceActive.value);
}

function selectOtherEquipment() {
    deviceActive.value = 'other_equipment';
    emit('deviceSelected', deviceActive.value);
}

function selectPrinter() {
    deviceActive.value = 'printer';
    emit('deviceSelected', deviceActive.value);
}

function selectProjector() {
    deviceActive.value = 'projector';
    emit('deviceSelected', deviceActive.value);
}

function selectConferenceRoom_AV_Equipment() {
    deviceActive.value = 'conference_room_av_equipment';
    emit('deviceSelected', deviceActive.value);
}

</script>
