<template>
<AddTemplate templateName="Webcam">
    <form @submit.prevent="createWebcam()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="webcam_brand" labelFor="webcam_brand" fieldName="Brand: " v-model="webcam_brand"/>

            <TextField id="webcam_model" labelFor="webcam_model" fieldName="Model: " v-model="webcam_model"/>

            <TextField id="webcam_serial_number" labelFor="webcam_serial_number" fieldName="Serial Number: " v-model="webcam_serial_number"/>

            <TextField id="webcam_inventory_number" labelFor="webcam_inventory_number" fieldName="Inventory Number: " v-model="webcam_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="webcam_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="webcam_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="webcam_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="webcam_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_status" :class="[option_field_class]" class="bg-white" v-model="webcam_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="webcam_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_parish" :class="[option_field_class]" class="bg-white" v-model="webcam_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="webcam_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_location_type" :class="[option_field_class]" class="bg-white" v-model="webcam_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="webcam_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_location" :class="[option_field_class]" class="bg-white" v-model="webcam_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="webcam_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_division" :class="[option_field_class]" class="bg-white" v-model="webcam_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="webcam_division" fieldName="Division" />
            </div>
        </div>
        <CommentField id="webcam_comment" labelFor="webcam_comment" fieldName="Comment: " v-model="webcam_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref } from 'vue';
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

const webcam_brand = ref();
const webcam_model = ref();
const webcam_serial_number = ref();
const webcam_inventory_number = ref();
const webcam_delivery_date = ref();
const webcam_deployment_date = ref();
const webcam_status = ref();
const webcam_parish = ref();
const webcam_location_type = ref();
const webcam_location = ref();
const webcam_division = ref();
const webcam_comment = ref();

async function createWebcam() {
    const webcam = {
        category: "Webcam",
        division_id: webcam_division.value,
        brand: webcam_brand.value,
        model: webcam_model.value,
        serial_number: webcam_serial_number.value,
        inventory_number: webcam_inventory_number.value,
        delivery_date: webcam_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: webcam_deployment_date.value?.toISOString().split('T')[0],
        status_id: webcam_status.value,
    }

    for (const key in webcam) {
        if (webcam[key] === undefined) {
            webcam[key] = null;
        }
    }

    try {
        const response = await axios.post('http://localhost:8000/add-device/', webcam);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

</script>