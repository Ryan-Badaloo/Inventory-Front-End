<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="confirmDeleteUser()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
                <TextField id="first_name" labelFor="first_name" name="first_name" fieldName="Enter First Name: " v-model="first_name"/>

                <TextField id="last_name" labelFor="last_name" name="last_name" fieldName="Enter Last Name: " v-model="last_name"/>

                <TextField id="username" labelFor="username" name="username" fieldName="Enter Email: " v-model="username"/>
        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Remove User"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '../../composable/useUrlcomposable'
import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class } from '@/utils/descriptions';

const first_name = ref();
const last_name = ref();
const username = ref();

async function confirmDeleteUser() {
    try {
        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-user/`, {
            params: {
                first_name: first_name.value,
                last_name: last_name.value,
                email: username.value,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("User Has Been Deleted")
    } catch (error) {
        console.error('Error finding User:', error.response?.data || error.message);
        alert("Failed to find User. Check console.");
    }
}
</script>