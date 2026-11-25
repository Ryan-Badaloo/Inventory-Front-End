<template>
<SectionTemplate templateName="Edit Hard Disk Capacities">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Hard Disk Capacity" />

            <input list="hard_disk_capacities" name="hard_disk_capacities_input" id="hard_disk_capacities_input" :class="[option_field_class]" v-model="selectedHardDiskCapacity">

            <datalist id="hard_disk_capacities">
                <option v-for="hard_disk_capacity in hard_disk_capacities" :key="hard_disk_capacity.hard_disk_capacity_id" :value="`${hard_disk_capacity.hard_disk_capacity_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_hard_disk_capacity(selectedHardDiskCapacity)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_hard_disk_capacity(selectedHardDiskCapacity)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getHardDiskCapacities, option_field_class } from '@/utils/descriptions';
import { useBaseURLComposable } from '@/composable/useUrlcomposable'


const hard_disk_capacities = ref([])
const selectedHardDiskCapacity = ref();
const isHardDiskCapacity = ref();

onMounted(async () => {
    try {
        hard_disk_capacities.value = await getHardDiskCapacities();
        console.log(hard_disk_capacities.value);

    } catch (err) {
        console.error("Failed to load something", err);
    }
});

async function add_hard_disk_capacity(hardDiskCapacityText) {
    console.log(hardDiskCapacityText)

    const token = localStorage.getItem('token');
    if (!selectedHardDiskCapacity.value) {
        alert("Please Enter a Hard Disk Capacity")
    } else {
        const response = await axios.get(`${useBaseURLComposable()}get-hard-disk-capacity/`, {
            params: {
                hard_disk_capacity: hardDiskCapacityText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isHardDiskCapacity.value = response.data;

        console.log(isHardDiskCapacity.value)

        if (isHardDiskCapacity.value == true) {
            alert("This Hard Disk Capacity Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-hard-disk-capacity/`, { hard_disk_capacity: hardDiskCapacityText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                hard_disk_capacities.value = await getHardDiskCapacities();
                console.log("Hard Disk Capacity Added Successfully")
                alert("Hard Disk Capacity successfully added.");
            } catch (error) {
                console.error(
                    "Error creating item:",
                    error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add Hard Disk Capacity. Check console.");
            }
        }
    }
}

async function remove_hard_disk_capacity(hardDiskCapacityText) {
    console.log(hardDiskCapacityText)

    const token = localStorage.getItem('token');
    if (!selectedHardDiskCapacity.value) {
        alert("Please Enter a Hard Disk Capacity")
        return;
    }

    const response = await axios.get(`${useBaseURLComposable()}get-hard-disk-capacity/`, {
        params: {
            hard_disk_capacity: hardDiskCapacityText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isHardDiskCapacity.value = response.data;

    console.log(isHardDiskCapacity.value)

    if (isHardDiskCapacity.value == false) {
        alert("This Hard Disk Capacity Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-hard-disk-capacity/`, {
                params: {
                    hard_disk_capacity: hardDiskCapacityText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            hard_disk_capacities.value = await getHardDiskCapacities();
            console.log("Hard Disk Capacity Has Been Deleted")
            alert("Hard Disk Capacity Has Been Deleted")
        } catch (error) {
            console.error(
                "Error deleting item:",
                error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to delete Hard Disk Capacity. Check console.");
        }
    }
}
</script>