<template>
<SectionTemplate templateName="Edit CPU Type">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter CPU Type" />

            <input list="cpu_types" name="cpu_types_input" id="cpu_types_input" :class="[option_field_class]" v-model="selectedCPUType">

            <datalist id="cpu_types">
                <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value="`${cpu_type.cpu_type_description}`" class="text-black">{{ cpu_type.cpu_type_description }}</option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_cpu_type(selectedCPUType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_cpu_type(selectedCPUType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getCPUTypes, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const cpu_types = ref([])
const selectedCPUType = ref();

onMounted(async () => {
  try {
    cpu_types.value = await getCPUTypes();
    console.log(cpu_types.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_cpu_type(cpuTypeText) {
    try {
        const token = localStorage.getItem('token');
        console.log(cpuTypeText)
        const response = await axios.post(`${useBaseURLComposable()}add-cpu-type/`, { cpu_type: cpuTypeText }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        cpu_types.value = await getCPUTypes();
        console.log("CPU Type Added Succefully")
        alert("CPU Type successfully added.", response.data);
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to add item. Check console.");
    }
}

async function remove_cpu_type(cpuTypeText) {
    try {

        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-cpu-type/`, {
            params: {
                cpu_type: cpuTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        cpu_types.value = await getCPUTypes();
        console.log("CPU Type Has Been Deleted")
        alert("CPU Type Has Been Deleted")
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