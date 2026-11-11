<template>
<SectionTemplate templateName="Add User">
    <form @submit.prevent="createWorkbench()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
            <TextField id="workbench_name" labelFor="workbench_name" name="workbench_name" fieldName="Enter Workbench Name: " v-model="workbench_name"/>
            
            <div class="flex mb-6 group"> 
                <TextLabel fieldName="Choose Your Client:" />

                <input list="allClients" name="allClient" id="allClient" :class="[option_field_class]" v-model="assignClientName">

                <datalist id="allClients">
                    <option v-for="client in allClients" :key="client.client_id" :value="`${client.firstname} ${client.lastname}`" class="text-black"></option>

                </datalist>
            </div>
        </div>


            

        
        <div class="flex justify-center">
            <AddItemButton button-name="Create Workbench"/>
        </div>
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import PasswordField from '../Fields/PasswordField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class, getRoles } from '@/utils/descriptions';
import TextLabel from '@/components/Fields/TextLabel.vue';

const roles = ref([]);

onMounted(async () => {
    try{
        roles.value = await getRoles();

        get_clients();
        console.log(allClients.value)
    } catch (err) {
        console.error("Failed to load something", err);
    }
});


const allClients = ref()
const assignClientName = ref("")
const assignClient = ref(null);

watch(assignClientName, (newName) => {
  const match = allClients.value.find(
    client => `${client.firstname} ${client.lastname}` === newName
  );
  assignClient.value = match || null;
});

const workbench_name = ref();

async function get_clients() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-clients/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log(response.data)
        allClients.value = response.data
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find Client. Check console.");
    }
}

async function createWorkbench() {
    console.log("Workbench name:", workbench_name.value)
    console.log("Something 1::", assignClient.value)
    console.log("Something 2:", assignClient.value?.client_id)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-workbench/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                workbench_name: workbench_name.value,
                client_id: assignClient.value?.client_id,
            }
        });

        alert(response.data.message)

    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to create workbench. Check console.");
    }
}



</script>