<template>
<SectionTemplate templateName="Edit System Status">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Status Name" />

            <input list="statuses" name="status_input" id="status_input" :class="[option_field_class]" v-model="selectedStatus">

            <datalist id="statuses">
                <option v-for="status in statuses" :key="status.status_id" :value="`${status.status_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_status(selectedStatus)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_status(selectedStatus)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                delete
            </button>
        </div>
        
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import TextLabel from '../Fields/TextLabel.vue';
import { getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const statuses = ref([])
const selectedStatus = ref();

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    console.log(statuses.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_status(statusText) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-status/`, { status: statusText }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        statuses.value = await getStatuses();
        console.log("Status Added Succefully")
        alert("Status successfully added.", response.data);
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to add item. Check console.");
    }
}

async function remove_status(statusText) {
    try {

        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-status/`, {
            params: {
                status: statusText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        statuses.value = await getStatuses();
        console.log("Status Has Been Deleted")
        alert("Status Has Been Deleted")
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