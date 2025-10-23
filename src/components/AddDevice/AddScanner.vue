<template>
<AddTemplate templateName="Scanner">
    <form @submit.prevent="createScanner()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="scanner_brand" labelFor="scanner_brand" fieldName="Brand: " v-model="scanner_brand"/>

            <TextField id="scanner_model" labelFor="scanner_model" fieldName="Model: " v-model="scanner_model"/>

            <TextField id="scanner_serial_number" labelFor="scanner_serial_number" fieldName="Serial Number: " v-model="scanner_serial_number"/>

            <TextField id="scanner_inventory_number" labelFor="scanner_inventory_number" fieldName="Inventory Number: " v-model="scanner_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="scanner_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="scanner_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="scanner_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="scanner_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_status" :class="[option_field_class]" class="bg-white" v-model="scanner_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="scanner_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_parish" :class="[option_field_class]" class="bg-white" v-model="scanner_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="scanner_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_location_type" :class="[option_field_class]" class="bg-white" v-model="scanner_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="scanner_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_location" :class="[option_field_class]" class="bg-white" v-model="scanner_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="scanner_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_division" :class="[option_field_class]" class="bg-white" v-model="scanner_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="scanner_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="scanner_comment" labelFor="scanner_comment" fieldName="Comment: " v-model="scanner_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';

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

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "parish", "location_type", "location",
  "division", "comment"
];

const scannerRefs = {};

fieldNames.forEach(name => {
  const key = `scanner_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  scannerRefs[key] = ref(saved || "");

  watch(scannerRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  scanner_brand,
  scanner_model,
  scanner_serial_number,
  scanner_inventory_number,
  scanner_delivery_date,
  scanner_deployment_date,
  scanner_status,
  scanner_parish,
  scanner_location_type,
  scanner_location,
  scanner_division,
  scanner_comment,
} = scannerRefs;

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function createScanner() {
    const scanner = {
        category: "Scanner",
        division_id: scanner_division.value,
        brand: scanner_brand.value,
        model: scanner_model.value,
        serial_number: scanner_serial_number.value,
        inventory_number: scanner_inventory_number.value,
        delivery_date: formatDate(scanner_delivery_date.value),
        deployment_date: formatDate(scanner_deployment_date.value),
        status_id: scanner_status.value,
    }

    for (const key in scanner) {
        if (scanner[key] === undefined || scanner[key] === "") {
            scanner[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/add-device/', scanner, {
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