<template>
    <SectionTemplate templateName="Settings">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectCPUType()" buttonText="Edit CPU Type" icon="person" :isActive="deviceActive==='cpu_type'"/>
            <SelectItemButton @click="selectConnectionType()" buttonText="Edit Connection Type" icon="person" :isActive="deviceActive==='connection_type'"/>
            <SelectItemButton @click="selectPrinterFeature()" buttonText="Edit Printer Feature" icon="person" :isActive="deviceActive==='printer_feature'"/>
            <SelectItemButton @click="selectFormFactor()" buttonText="Edit Form Factor" icon="person" :isActive="deviceActive==='form_factor'"/>
            <SelectItemButton @click="selectRaidType()" buttonText="Edit Raid Type" icon="person" :isActive="deviceActive==='raid_type'"/>
            <SelectItemButton @click="selectMeetingRoom()" buttonText="Edit Meeting Room" icon="person" :isActive="deviceActive==='meeting_room'"/>
            <SelectItemButton @click="selectMonitorType()" buttonText="Edit Monitor Type" icon="person" :isActive="deviceActive==='monitor_type'"/>
            <SelectItemButton @click="selectMonitorFunction()" buttonText="Edit Monitor Function" icon="person" :isActive="deviceActive==='monitor_function'"/>
            <SelectItemButton @click="selectBagType()" buttonText="Edit Bag Type" icon="person" :isActive="deviceActive==='bag_type'"/>
            <SelectItemButton @click="selectBagFabricType()" buttonText="Edit Bag Fabric Type" icon="person" :isActive="deviceActive==='bag_fabric_type'"/>
            <SelectItemButton @click="selectDivision()" buttonText="Edit Divisions" icon="person" :isActive="deviceActive==='division'"/>
        </div>
    </SectionTemplate>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SelectItemButton from '../SelectItem/SelectItemButton.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')

function scrollToSecondForm() {
    const sections = document.querySelectorAll(".device-form-section")

    if (sections.length > 1) {
        sections[1].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
}

async function selectSystemStatus() {
    deviceActive.value = 'system_status';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectCPUType() {
    deviceActive.value = 'cpu_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectConnectionType() {
    deviceActive.value = 'connection_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectPrinterFeature() {
    deviceActive.value = 'printer_feature';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectFormFactor() {
    deviceActive.value = 'form_factor';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectRaidType() {
    deviceActive.value = 'raid_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectMeetingRoom() {
    deviceActive.value = 'meeting_room';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectMonitorType() {
    deviceActive.value = 'monitor_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectMonitorFunction() {
    deviceActive.value = 'monitor_function';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectBagType() {
    deviceActive.value = 'bag_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectBagFabricType() {
    deviceActive.value = 'bag_fabric_type';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}
async function selectDivision() {
    deviceActive.value = 'division';
    emit('deviceSelected', deviceActive.value);

    await nextTick();
    scrollToSecondForm();
}

</script>