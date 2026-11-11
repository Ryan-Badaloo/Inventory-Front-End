<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="confirmDeleteWorkbench()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
                <TextField id="workbench_name" labelFor="workbench_name" name="workbench_name" fieldName="Enter Workbench Name: " v-model="workbench_name"/>

        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Remove Workbench"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class } from '@/utils/descriptions';

const workbench_name = ref();


async function confirmDeleteWorkbench() {
    try {

        const token = localStorage.getItem('token');
        const response = await axios.delete(`${useBaseURLComposable()}delete-workbench/`, {
            params: {
                workbench_name: workbench_name.value,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        alert(response.data.message)
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find User. Check console.");
    }
}


</script>