<template>
    <SectionTemplate templateName="Settings">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectSystemStatus()" buttonText="Edit System Status" icon="person" :isActive="deviceActive==='system_status'"/>
            <SelectItemButton @click="selectCPUType()" buttonText="Edit CPU Type" icon="person" :isActive="deviceActive==='cpu_type'"/>
            <SelectItemButton @click="selectConnectionType()" buttonText="Edit Connection Type" icon="person" :isActive="deviceActive==='connection_type'"/>
            <SelectItemButton @click="selectPrinterFeature()" buttonText="Edit Printer Feature" icon="person" :isActive="deviceActive==='printer_feature'"/>

        </div>
    </SectionTemplate>
</template>

<script setup>
import { ref } from 'vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SelectItemButton from '../SelectItem/SelectItemButton.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')

function selectSystemStatus() {
    deviceActive.value = 'system_status';
    emit('deviceSelected', deviceActive.value);
}
function selectCPUType() {
    deviceActive.value = 'cpu_type';
    emit('deviceSelected', deviceActive.value);
}
function selectConnectionType() {
    deviceActive.value = 'connection_type';
    emit('deviceSelected', deviceActive.value);
}
function selectPrinterFeature() {
    deviceActive.value = 'printer_feature';
    emit('deviceSelected', deviceActive.value);
}
</script>