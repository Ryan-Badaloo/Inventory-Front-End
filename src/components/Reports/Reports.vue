<template>
    <SectionTemplate templateName="Reports">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectLocationCount()" buttonText="Location Count" icon="person" :isActive="deviceActive==='location_count'"/>
            <SelectItemButton @click="selectLocationReport()" buttonText="Location Report" icon="person" :isActive="deviceActive==='location_report'"/>
            <!-- <SelectItemButton @click="selectConnectionType()" buttonText="Edit Connection Type" icon="person" :isActive="deviceActive==='connection_type'"/>
            <SelectItemButton @click="selectPrinterFeature()" buttonText="Edit Printer Feature" icon="person" :isActive="deviceActive==='printer_feature'"/> -->

        </div>
    </SectionTemplate>
</template>

<script setup>
import { ref } from 'vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SelectItemButton from '../SelectItem/SelectItemButton.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')

function selectLocationCount() {
    deviceActive.value = 'location_count';
    emit('deviceSelected', deviceActive.value);
}
function selectLocationReport() {
    deviceActive.value = 'location_report';
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