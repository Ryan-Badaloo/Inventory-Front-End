<template>
<SectionTemplate templateName="Edit System Status">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Division Name" />

            <input list="divisions" name="division_input" id="division_input" :class="[option_field_class]" v-model="selectedDivision">

            <datalist id="divisions">
                <option v-for="division in divisions" :key="division.division_id" :value="`${division.division_name}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_division(selectedDivision)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_division(selectedDivision)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getDivisions, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const divisions = ref([])
const selectedDivision = ref();

onMounted(async () => {
  try {
    divisions.value = await getDivisions();
    console.log(divisions.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_division(divisionText) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-division/`, { division: divisionText }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        divisions.value = await getDivisions();
        console.log("Division Added Succefully")
        alert("Division successfully added.", response.data);
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to add item. Check console.");
    }
}

async function remove_division(divisionText) {
    try {

        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-division/`, {
            params: {
                division: divisionText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        divisions.value = await getDivisions();
        console.log("Division Has Been Deleted")
        alert("Division Has Been Deleted")
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