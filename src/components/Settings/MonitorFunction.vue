<template>
<SectionTemplate templateName="Edit Monitor Functions">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Monitor Function Name" />

            <input list="monitor_functions" name="monitor_functions_input" id="monitor_functions_input" :class="[option_field_class]" v-model="selectedMonitorFunction">

            <datalist id="monitor_functions">
                <option v-for="monitor_function in monitor_functions" :key="monitor_function.monitor_function_id" :value="`${monitor_function.monitor_function_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_monitor_function(selectedMonitorFunction)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_monitor_function(selectedMonitorFunction)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getMonitorFunctions, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const monitor_functions = ref([])
const selectedMonitorFunction = ref();
const isMonitorFunction = ref();

onMounted(async () => {
  try {
    monitor_functions.value = await getMonitorFunctions();
    console.log(monitor_functions.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_monitor_function(monitorFunctionText) {
    console.log(monitorFunctionText)

    const token = localStorage.getItem('token');
    if (!selectedMonitorFunction.value) {
        alert("Please Enter a Monitor Function")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-monitor-function/`, {
            params: {
                monitor_function: monitorFunctionText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isMonitorFunction.value = response.data;

        console.log(isMonitorFunction.value)

        if (isMonitorFunction.value == true) {
            alert("This Monitor Function Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-monitor-function/`, { monitor_function: monitorFunctionText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                monitor_functions.value = await getMonitorFunctions();
                console.log("Monitor Function Added Succefully")
                alert("Monitor Function successfully added.", response.data);
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

async function remove_monitor_function(monitorFunctionText) {
    console.log(monitorFunctionText)

    const token = localStorage.getItem('token');
    if (!selectedMonitorFunction.value) {
        alert("Please Enter a Monitor Function")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-monitor-function/`, {
        params: {
            monitor_function: monitorFunctionText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isMonitorFunction.value = response.data;

    console.log(isMonitorFunction.value)

    if (isMonitorFunction.value == false) {
        alert("This Monitor Function Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-monitor-function/`, {
                params: {
                    monitor_function: monitorFunctionText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            monitor_functions.value = await getMonitorFunctions();
            console.log("Monitor Function Has Been Deleted")
            alert("Monitor Function Has Been Deleted")
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