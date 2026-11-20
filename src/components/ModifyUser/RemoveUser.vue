<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="confirmDeleteUser()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
                <TextField id="username" labelFor="username" name="username" fieldName="Enter Email: " v-model="username" required/>
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
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class } from '@/utils/descriptions';

const username = ref();

async function confirmDeleteUser() {
    try {

        const token = localStorage.getItem('token');
        const response = await axios.delete(`${useBaseURLComposable()}delete-user/`, {
            params: {
                email: username.value,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("User Has Been Deleted")
        alert(response.data.message)

    } catch (error) {
        console.error("Error creating item:", error.response?.data || error.message);
        console.error("Detail:", error.response?.data?.detail);

        if (error.response?.status === 404) {
            console.log("User not found");
            alert("User not found")
        } else {
            console.log("An error occurred");
            alert("An error occurred")
        }
    }
}


</script>