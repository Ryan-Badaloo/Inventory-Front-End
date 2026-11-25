<template>
<SectionTemplate templateName="Edit Memory Capacities">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Memory Capacity" />

            <input list="memory_capacities" name="memory_capacities_input" id="memory_capacities_input" :class="[option_field_class]" v-model="selectedMemoryCapacity">

            <datalist id="memory_capacities">
                <option v-for="memory_capacity in memory_capacities" :key="memory_capacity.memory_capacity_id" :value="`${memory_capacity.memory_capacity_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_memory_capacity(selectedMemoryCapacity)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_memory_capacity(selectedMemoryCapacity)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getMemoryCapacities, option_field_class } from '@/utils/descriptions';
import { useBaseURLComposable } from '@/composable/useUrlcomposable'


const memory_capacities = ref([])
const selectedMemoryCapacity = ref();
const isMemoryCapacity = ref();

onMounted(async () => {
    try {
        memory_capacities.value = await getMemoryCapacities();
        console.log(memory_capacities.value);

    } catch (err) {
        console.error("Failed to load something", err);
    }
});

async function add_memory_capacity(memoryCapacityText) {
    console.log(memoryCapacityText)

    const token = localStorage.getItem('token');
    if (!selectedMemoryCapacity.value) {
        alert("Please Enter a Memory Capacity")
    } else {
        const response = await axios.get(`${useBaseURLComposable()}get-memory-capacity/`, {
            params: {
                memory_capacity: memoryCapacityText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isMemoryCapacity.value = response.data;

        console.log(isMemoryCapacity.value)

        if (isMemoryCapacity.value == true) {
            alert("This Memory Capacity Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-memory-capacity/`, { memory_capacity: memoryCapacityText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                memory_capacities.value = await getMemoryCapacities();
                console.log("Memory Capacity Added Successfully")
                alert("Memory Capacity successfully added.");
            } catch (error) {
                console.error(
                    "Error creating item:",
                    error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add Memory Capacity. Check console.");
            }
        }
    }
}

async function remove_memory_capacity(memoryCapacityText) {
    console.log(memoryCapacityText)

    const token = localStorage.getItem('token');
    if (!selectedMemoryCapacity.value) {
        alert("Please Enter a Memory Capacity")
        return;
    }

    const response = await axios.get(`${useBaseURLComposable()}get-memory-capacity/`, {
        params: {
            memory_capacity: memoryCapacityText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isMemoryCapacity.value = response.data;

    console.log(isMemoryCapacity.value)

    if (isMemoryCapacity.value == false) {
        alert("This Memory Capacity Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-memory-capacity/`, {
                params: {
                    memory_capacity: memoryCapacityText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            memory_capacities.value = await getMemoryCapacities();
            console.log("Memory Capacity Has Been Deleted")
            alert("Memory Capacity Has Been Deleted")
        } catch (error) {
            console.error(
                "Error deleting item:",
                error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to delete Memory Capacity. Check console.");
        }
    }
}
</script>