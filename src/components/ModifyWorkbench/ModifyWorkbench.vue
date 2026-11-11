<template>
    <SectionTemplate templateName="Modify Workbench">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectViewWorkbenches()" buttonText="View Workbenches" icon="person" :isActive="deviceActive==='view_workbenches'"/>
            <SelectItemButton @click="selectAddWorkbench()" buttonText="Add Workbench" icon="person_add" :isActive="deviceActive==='add_workbench'"/>
            <SelectItemButton @click="selectRemoveWorkbench()" buttonText="Remove Workbench" icon="person_remove" :isActive="deviceActive==='remove_workbench'"/>
        </div>
    </SectionTemplate>
</template>

<script setup>
import { ref } from 'vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SelectItemButton from '../SelectItem/SelectItemButton.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')


function selectViewWorkbenches() {
    deviceActive.value = 'view_workbenches';
    emit('deviceSelected', deviceActive.value);
}

function selectAddWorkbench() {
    deviceActive.value = 'add_workbench';
    emit('deviceSelected', deviceActive.value);
}

function selectRemoveWorkbench() {
    deviceActive.value = 'remove_workbench';
    emit('deviceSelected', deviceActive.value);
}
</script>