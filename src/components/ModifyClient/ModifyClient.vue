<template>
    <SectionTemplate templateName="Modify Clients">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectViewUsers()" buttonText="View Clients" icon="person" :isActive="deviceActive==='view_client'"/>
            <SelectItemButton @click="selectAddUser()" buttonText="Add Client" icon="person_add" :isActive="deviceActive==='add_client'"/>
            <SelectItemButton @click="selectRemoveUser()" buttonText="Remove Client" icon="person_remove" :isActive="deviceActive==='remove_client'"/>
        </div>
    </SectionTemplate>
</template>

<script setup>
import { ref } from 'vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SelectItemButton from '../SelectItem/SelectItemButton.vue';

const emit = defineEmits(['deviceSelected']);
const deviceActive = ref('')

function selectAddUser() {
    deviceActive.value = 'add_client';
    emit('deviceSelected', deviceActive.value);
}

function selectRemoveUser() {
    deviceActive.value = 'remove_client';
    emit('deviceSelected', deviceActive.value);
}

function selectViewUsers() {
    deviceActive.value = 'view_client';
    emit('deviceSelected', deviceActive.value);
}
</script>