<template>
<SectionTemplate templateName="Edit Printer Feature">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Printer Feature" />

            <input list="features" name="features_input" id="features_input" :class="[option_field_class]" v-model="selectedFeature">

            <datalist id="features">
                <option v-for="feature in features" :key="feature.feature_id" :value="`${feature.feature_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_printer_feature(selectedFeature)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_printer_feature(selectedFeature)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getPrinterFeatures, option_field_class} from '@/utils/descriptions';
import { useBaseURLComposable } from '../../composable/useUrlcomposable'

const features = ref([])
const selectedFeature = ref();

onMounted(async () => {
  try {
    features.value = await getPrinterFeatures();
    console.log(features.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_printer_feature(printerFeatureText) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-printer-feature/`, { printer_feature: printerFeatureText }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        features.value = await getPrinterFeatures();
        console.log("Printer Feature Added Succefully")
        alert("Printer Feature successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

async function remove_printer_feature(printerFeatureText) {
    try {
        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-printer-feature/`, {
            params: {
                printer_feature: printerFeatureText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        features.value = await getPrinterFeatures();
        console.log("Printer Feature Has Been Deleted")
        alert("Printer Feature Has Been Deleted")
    } catch (error) {
        console.error('Error finding Client:', error.response?.data || error.message);
        alert("Failed to find Client. Check console.");
    }
}
</script>