<template>
<SectionTemplate templateName="Edit Operating Systems">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Operating System Name" />

            <input list="operating_systems" name="operating_systems_input" id="operating_systems_input" :class="[option_field_class]" v-model="selectedOperatingSystem">

            <datalist id="operating_systems">
                <option v-for="operating_system in operating_systems" :key="operating_system.operating_system_id" :value="`${operating_system.operating_system_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_operating_system(selectedOperatingSystem)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_operating_system(selectedOperatingSystem)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getOperatingSystems, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const operating_systems = ref([])
const selectedOperatingSystem = ref();
const isOperatingSystem = ref();

onMounted(async () => {
  try {
    operating_systems.value = await getOperatingSystems();
    console.log(operating_systems.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_operating_system(OperatingSystemText) {
    console.log(OperatingSystemText)

    const token = localStorage.getItem('token');
    if (!selectedOperatingSystem.value) {
        alert("Please Enter a Operating System")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-operating-system/`, {
            params: {
                operating_system: OperatingSystemText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isOperatingSystem.value = response.data;

        console.log(isOperatingSystem.value)

        if (isOperatingSystem.value == true) {
            alert("This Operating System Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-operating-system/`, { operating_system: OperatingSystemText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                operating_systems.value = await getOperatingSystems();
                console.log("Operating System Added Succefully")
                alert("Operating System successfully added.", response.data);
            } catch (error) {
                console.error(
                "Error creating item:",
                error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add item. Check console.");
            }
        }
    }
}

async function remove_operating_system(OperatingSystemText) {
    console.log(OperatingSystemText)

    const token = localStorage.getItem('token');
    if (!selectedOperatingSystem.value) {
        alert("Please Enter an Operating System")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-operating-system/`, {
        params: {
            operating_system: OperatingSystemText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isOperatingSystem.value = response.data;

    console.log(isOperatingSystem.value)

    if (isOperatingSystem.value == false) {
        alert("This Operating System Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-operating-system/`, {
                params: {
                    operating_system: OperatingSystemText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            operating_systems.value = await getOperatingSystems();
            console.log("Operating System Has Been Deleted")
            alert("Operating System Has Been Deleted")
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