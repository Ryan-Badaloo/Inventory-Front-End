<template>
<AddTemplate templateName="Surge Protector">
    <form @submit.prevent="createSurge()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="surge_protector_brand" labelFor="surge_protector_brand" fieldName="Brand: " v-model="surge_protector_brand"/>

            <TextField id="surge_protector_model" labelFor="surge_protector_model" fieldName="Model: " v-model="surge_protector_model"/>

            <TextField id="surge_protector_serial_number" labelFor="surge_protector_serial_number" fieldName="Serial Number: " v-model="surge_protector_serial_number"/>

            <TextField id="surge_protector_inventory_number" labelFor="surge_protector_inventory_number" fieldName="Inventory Number: " v-model="surge_protector_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_status" :class="[option_field_class]" class="bg-white" v-model="surge_protector_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="surge_protector_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <!-- <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_parish" :class="[option_field_class]" class="bg-white" v-model="surge_protector_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="surge_protector_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_location_type" :class="[option_field_class]" class="bg-white" v-model="surge_protector_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="surge_protector_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_location" :class="[option_field_class]" class="bg-white" v-model="surge_protector_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="surge_protector_location" fieldName="Location" />
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_division" :class="[option_field_class]" class="bg-white" v-model="surge_protector_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="surge_protector_division" fieldName="Division" />
            </div>
        </div>

        <!-- <CommentField id="surge_protector_comment" labelFor="surge_protector_comment" fieldName="Comment: " v-model="surge_protector_comment"/> -->
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetSurgeProtectorForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
                Refresh
            </button>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { getStatuses, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const divisions = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

const surgeProtectorFieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "parish", "location_type", "location",
  "division", "comment"
];

const surgeProtectorRefs = {};

surgeProtectorFieldNames.forEach(name => {
  const key = `surge_protector_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  surgeProtectorRefs[key] = ref(saved || "");

  watch(surgeProtectorRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  surge_protector_brand,
  surge_protector_model,
  surge_protector_serial_number,
  surge_protector_inventory_number,
  surge_protector_delivery_date,
  surge_protector_deployment_date,
  surge_protector_status,
  surge_protector_parish,
  surge_protector_location_type,
  surge_protector_location,
  surge_protector_division,
  surge_protector_comment,
} = surgeProtectorRefs;

function resetSurgeProtectorForm() {
  Object.keys(surgeProtectorRefs).forEach(key => {
    surgeProtectorRefs[key].value = "";
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function createSurge() {
    const surge = {
        category: "Surge Protector",
        division_id: surge_protector_division.value,
        brand: surge_protector_brand.value,
        model: surge_protector_model.value,
        serial_number: surge_protector_serial_number.value,
        inventory_number: surge_protector_inventory_number.value,
        delivery_date: formatDate(surge_protector_delivery_date.value),
        deployment_date: formatDate(surge_protector_deployment_date.value),
        status_id: surge_protector_status.value,
    }

    for (const key in surge) {
        if (surge[key] === undefined || surge[key] === "") {
            surge[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-device/`, surge, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

</script>