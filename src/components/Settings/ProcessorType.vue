<template>
<SectionTemplate templateName="Edit Processor Types">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Processor Type" />

            <input list="processor_types" name="processor_types_input" id="processor_types_input" :class="[option_field_class]" v-model="selectedProcessorType">

            <datalist id="processor_types">
                <option v-for="processor_type in processor_types" :key="processor_type.processor_type_id" :value="`${processor_type.processor_type_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_processor_type(selectedProcessorType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_processor_type(selectedProcessorType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getProcessorTypes, option_field_class } from '@/utils/descriptions';
import { useBaseURLComposable } from '@/composable/useUrlcomposable'


const processor_types = ref([])
const selectedProcessorType = ref();
const isProcessorType = ref();

onMounted(async () => {
    try {
        processor_types.value = await getProcessorTypes();
        console.log(processor_types.value);

    } catch (err) {
        console.error("Failed to load something", err);
    }
});

async function add_processor_type(processorTypeText) {
    console.log(processorTypeText)

    const token = localStorage.getItem('token');
    if (!selectedProcessorType.value) {
        alert("Please Enter a Processor Type")
    } else {
        const response = await axios.get(`${useBaseURLComposable()}get-processor-type/`, {
            params: {
                processor_type: processorTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isProcessorType.value = response.data;

        console.log(isProcessorType.value)

        if (isProcessorType.value == true) {
            alert("This Processor Type Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-processor-type/`, { processor_type: processorTypeText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                processor_types.value = await getProcessorTypes();
                console.log("Processor Type Added Successfully")
                alert("Processor Type successfully added.");
            } catch (error) {
                console.error(
                    "Error creating item:",
                    error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add Processor Type. Check console.");
            }
        }
    }
}

async function remove_processor_type(processorTypeText) {
    console.log(processorTypeText)

    const token = localStorage.getItem('token');
    if (!selectedProcessorType.value) {
        alert("Please Enter a Processor Type")
        return;
    }

    const response = await axios.get(`${useBaseURLComposable()}get-processor-type/`, {
        params: {
            processor_type: processorTypeText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isProcessorType.value = response.data;

    console.log(isProcessorType.value)

    if (isProcessorType.value == false) {
        alert("This Processor Type Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-processor-type/`, {
                params: {
                    processor_type: processorTypeText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            processor_types.value = await getProcessorTypes();
            console.log("Processor Type Has Been Deleted")
            alert("Processor Type Has Been Deleted")
        } catch (error) {
            console.error(
                "Error deleting item:",
                error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to delete Processor Type. Check console.");
        }
    }
}
</script>