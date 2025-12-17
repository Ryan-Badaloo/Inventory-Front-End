<template>
<SectionTemplate templateName="Edit Connection Type">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Connection Type Name" />

            <input list="connection_types" name="connection_types_input" id="connection_types_input" :class="[option_field_class]" v-model="selectedConnectionType">

            <datalist id="connection_types">
                <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value="`${ctype.ctype_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_connection_type(selectedConnectionType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_connection_type(selectedConnectionType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getConnectionTypes, option_field_class} from '@/utils/descriptions';
import { useBaseURLComposable } from '../../composable/useUrlcomposable'

const connection_types = ref([])
const selectedConnectionType = ref();

onMounted(async () => {
  try {
    connection_types.value = await getConnectionTypes();
    console.log(connection_types.value)

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_connection_type(connectionTypeText) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-connection-type/`, { ctype: connectionTypeText }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        connection_types.value = await getConnectionTypes();
        console.log("Connection Type Added Succefully")
        alert("Connection Type successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}


async function remove_connection_type(connectionTypeText) {
    try {

        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-connection-type/`, {
            params: {
                ctype: connectionTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        connection_types.value = await getConnectionTypes();
        console.log("Connection Type Has Been Deleted")
        alert("Connection Type Has Been Deleted")
    } catch (error) {
        console.error('Error finding Client:', error.response?.data || error.message);
        alert("Failed to find Client. Check console.");
    }
}
</script>