<template>
<AddTemplate templateName="Projector">
    <form @submit.prevent="createPojector()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="projector_brand" labelFor="projector_brand" fieldName="Brand: " v-model="projector_brand"/>

            <TextField id="projector_model" labelFor="projector_model" fieldName="Model: " v-model="projector_model"/>

            <TextField id="projector_serial_number" labelFor="projector_serial_number" fieldName="Serial Number: " v-model="projector_serial_number"/>

            <TextField id="projector_inventory_number" labelFor="projector_inventory_number" fieldName="Inventory Number: " v-model="projector_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="projector_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="projector_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="projector_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="projector_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_status" :class="[option_field_class]" class="bg-white" v-model="projector_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="projector_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_parish" :class="[option_field_class]" class="bg-white" v-model="projector_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="projector_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_location_type" :class="[option_field_class]" class="bg-white" v-model="projector_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="projector_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_location" :class="[option_field_class]" class="bg-white" v-model="projector_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="projector_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_division" :class="[option_field_class]" class="bg-white" v-model="projector_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="projector_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="projector_comment" labelFor="projector_comment" fieldName="Comment: " v-model="projector_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';

import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const text_highlight_color = ref('text-blue-500');

const projectorFieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "parish", "location_type", "location",
  "division", "comment"
];

const projectorRefs = {};

projectorFieldNames.forEach(name => {
  const key = `projector_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  projectorRefs[key] = ref(saved || "");

  watch(projectorRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  projector_brand,
  projector_model,
  projector_serial_number,
  projector_inventory_number,
  projector_delivery_date,
  projector_deployment_date,
  projector_status,
  projector_parish,
  projector_location_type,
  projector_location,
  projector_division,
  projector_comment,
} = projectorRefs;


function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function createPojector() {
    const projector = {
        category: "Projector",
        serial_number: projector_serial_number.value,
        division_id: projector_division.value,
        brand: projector_brand.value,
        model: projector_model.value,
        inventory_number: projector_inventory_number.value,
        delivery_date: formatDate(projector_delivery_date.value),
        deployment_date: formatDate(projector_deployment_date.value),
        status_id: projector_status.value,
    }

    for (const key in projector) {
        if (projector[key] === undefined || projector[key] === "") {
            projector[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/add-device/', projector, {
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