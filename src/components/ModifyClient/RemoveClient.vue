<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="confirmDeleteClient()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
                <TextField id="first_name" labelFor="first_name" name="first_name" fieldName="Enter First Name: " v-model="first_name"/>

                <TextField id="last_name" labelFor="last_name" name="last_name" fieldName="Enter Last Name: " v-model="last_name"/>
        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Remove Client"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'



const first_name = ref();
const last_name = ref();

async function confirmDeleteClient() {
    try {

        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-client/`, {
            params: {
                first_name: first_name.value,
                last_name: last_name.value,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        alert("Client Has Been Deleted")
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find Client. Check console.");
    }
}
</script>