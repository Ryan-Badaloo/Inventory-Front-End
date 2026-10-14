<template>
<SectionTemplate templateName="Remove Client">
    <form @submit.prevent="confirmDeleteClient()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
                <TextField id="client_email" labelFor="client_email" name="client_email" fieldName="Enter Client Email: " v-model="client_email"/>
        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Remove Client"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const fieldNames = [
  "client_email"
];

const clientRefs = {};


fieldNames.forEach(name => {
    const key = name;
    const saved = localStorage.getItem(`${key}_val`);
    /* clientRefs[key] = ref(saved || null); */
    clientRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(clientRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    client_email
} = clientRefs;

async function confirmDeleteClient() {
    if (!client_email.value) {
        alert("Email is required")
    } else {
        try {

            const token = localStorage.getItem('token');
            const response = await axios.delete(`${useBaseURLComposable()}delete-client/`, {
                params: {
                    email: client_email.value
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data == "Client Not Found") {
                alert("Client Not Found", response.data)
                console.log(response.data)
            }
            else {
                console.log(response.data)
                alert("Client successfully deleted.", response.data);
            }
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to find Client. Check console.");
        }
    }
}
</script>