<template>
<SectionTemplate templateName="Edit Monitor Types">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Monitor Type Name" />

            <input list="monitor_types" name="monitor_types_input" id="monitor_types_input" :class="[option_field_class]" v-model="selectedMonitorType">

            <datalist id="monitor_types">
                <option v-for="monitor_type in monitor_types" :key="monitor_type.monitor_type_id" :value="`${monitor_type.monitor_type_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_monitor_type(selectedMonitorType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_monitor_type(selectedMonitorType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getMonitorTypes, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const monitor_types = ref([])
const selectedMonitorType = ref();
const isMonitorType = ref();

onMounted(async () => {
  try {
    monitor_types.value = await getMonitorTypes();
    console.log(monitor_types.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_monitor_type(monitorTypeText) {
    console.log(monitorTypeText)

    const token = localStorage.getItem('token');
    if (!selectedMonitorType.value) {
        alert("Please Enter a Monitor Type")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-monitor-type/`, {
            params: {
                monitor_type: monitorTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isMonitorType.value = response.data;

        console.log(isMonitorType.value)

        if (isMonitorType.value == true) {
            alert("This Monitor Type Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-monitor-type/`, { monitor_type: monitorTypeText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                monitor_types.value = await getMonitorTypes();
                console.log("Monitor Type Added Succefully")
                alert("Monitor Type successfully added.", response.data);
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

async function remove_monitor_type(monitorTypeText) {
    console.log(monitorTypeText)

    const token = localStorage.getItem('token');
    if (!selectedMonitorType.value) {
        alert("Please Enter a Monitor Type")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-monitor-type/`, {
        params: {
            monitor_type: monitorTypeText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isMonitorType.value = response.data;

    console.log(isMonitorType.value)

    if (isMonitorType.value == false) {
        alert("This Monitor Type Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-monitor-type/`, {
                params: {
                    monitor_type: monitorTypeText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            monitor_types.value = await getMonitorTypes();
            console.log("Monitor Type Has Been Deleted")
            alert("Monitor Type Has Been Deleted")
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