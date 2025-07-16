<template>
    <SectionTemplate templateName="Modify Users">
        <div class="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8 justify-items-center">
            <SelectItemButton @click="selectViewUsers()" buttonText="View Users" icon="person" :isActive="deviceActive==='view_users'"/>
            <SelectItemButton @click="selectAddUser()" buttonText="Add User" icon="person_add" :isActive="deviceActive==='add_user'"/>
            <SelectItemButton @click="selectRemoveUser()" buttonText="Remove User" icon="person_remove" :isActive="deviceActive==='remove_user'"/>
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
    deviceActive.value = 'add_user';
    emit('deviceSelected', deviceActive.value);
}

function selectRemoveUser() {
    deviceActive.value = 'remove_user';
    emit('deviceSelected', deviceActive.value);
}

function selectViewUsers() {
    deviceActive.value = 'view_users';
    emit('deviceSelected', deviceActive.value);
}
</script>