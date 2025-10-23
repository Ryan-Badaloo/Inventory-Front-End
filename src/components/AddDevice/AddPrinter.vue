<template>
<AddTemplate templateName="Printer">
    <form @submit.prevent="createPrinter()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="printer_brand" labelFor="printer_brand" fieldName="Brand: " v-model="printer_brand"/>

            <TextField id="printer_model" labelFor="printer_model" fieldName="Model: " v-model="printer_model"/>

            <TextField id="printer_serial_number" labelFor="printer_serial_number" fieldName="Serial Number: " v-model="printer_serial_number"/>

            <TextField id="printer_inventory_number" labelFor="printer_inventory_number" fieldName="Inventory Number: " v-model="printer_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_status" :class="[option_field_class]" class="bg-white" v-model="printer_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="printer_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_features" :class="[option_field_class]" v-model="printer_features">
                    <option selected class="text-blue-100">Choose a Feature</option>
                    <option v-for="feature in features" :key="feature.feature_id" :value=feature.feature_id class="text-black">{{ feature.feature_description }}</option>

                </select>
                <TextLabel labelFor="printer_features" fieldName="Features: "/>
            </div>

            <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: " v-model="printer_ip_address"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_connection_type" :class="[option_field_class]" v-model="printer_connection_type">
                    <option selected class="text-blue-100">Choose a Connection Type</option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>

                </select>
                <TextLabel labelFor="printer_connection_type" fieldName="Connection Type: "/>
            </div>

        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_parish" :class="[option_field_class]" class="bg-white" v-model="printer_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="printer_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_location_type" :class="[option_field_class]" class="bg-white" v-model="printer_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="printer_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_location" :class="[option_field_class]" class="bg-white" v-model="printer_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="printer_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_division" :class="[option_field_class]" class="bg-white" v-model="printer_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="printer_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="printer_comment" labelFor="printer_comment" fieldName="Comment: " v-model="printer_comment"/>
        
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

import { getStatuses, getConnectionTypes, getPrinterFeatures, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([]);
const connection_types = ref([]);
const features = ref([]);
const divisions = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    connection_types.value = await getConnectionTypes();
    features.value = await getPrinterFeatures();
    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});
const printerFieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "features", "ip_address", "connection_type",
  "parish", "location_type", "location",
  "division", "comment"
];

const printerRefs = {};

printerFieldNames.forEach(name => {
  const key = `printer_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  printerRefs[key] = ref(saved || "");

  watch(printerRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  printer_brand,
  printer_model,
  printer_serial_number,
  printer_inventory_number,
  printer_delivery_date,
  printer_deployment_date,
  printer_status,
  printer_features,
  printer_ip_address,
  printer_connection_type,
  printer_parish,
  printer_location_type,
  printer_location,
  printer_division,
  printer_comment,
} = printerRefs;

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function createPrinter() {
    const printer = {
        category: "Printer",
        division_id: printer_division.value,
        brand: printer_brand.value,
        model: printer_model.value,
        serial_number: printer_serial_number.value,
        inventory_number: printer_inventory_number.value,
        ip_address: printer_ip_address.value,
        feature_id: printer_features.value,
        connection_type_id: printer_connection_type.value,
        delivery_date: formatDate(printer_delivery_date.value),
        deployment_date: formatDate(printer_deployment_date.value),
        status_id: printer_status.value,
    }

    for (const key in printer) {
        if (printer[key] === undefined || printer[key] === "") {
            printer[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/add-printer/', printer, {
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