<template>
<SectionTemplate templateName="Keyboard">
    <form @submit.prevent="addKeyboard()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="keyboard_brand" labelFor="keyboard_brand" fieldName="Brand: " v-model="keyboard_brand"/>

            <TextField id="keyboard_model" labelFor="keyboard_model" fieldName="Model: " v-model="keyboard_model"/>

            <TextField id="keyboard_serial_number" labelFor="keyboard_serial_number" fieldName="Serial Number: " v-model="keyboard_serial_number"/>

            <TextField id="keyboard_inventory_number" labelFor="keyboard_inventory_number" fieldName="Inventory Number: " v-model="keyboard_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="keyboard_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="keyboard_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="keyboard_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="keyboard_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_status" :class="[option_field_class]" class="bg-white" v-model="keyboard_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="keyboard_status" fieldName="System Status: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_connection_type" :class="[option_field_class]" class="bg-white" v-model="keyboard_connection_type">
                    <option selected class="text-blue-100">Choose a Connection Type</option>
                    <option value=1>Networked</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                    <option value=4>Option 4</option>
                    <option value=5>Option 5</option>
                    <option value=6>Option 6</option>
                </select>
                <TextLabel labelFor="keyboard_connection_type" fieldName="Connection Type: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_parish" :class="[option_field_class]" class="bg-white" v-model="keyboard_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="keyboard_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_location_type" :class="[option_field_class]" class="bg-white" v-model="keyboard_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="keyboard_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_location" :class="[option_field_class]" class="bg-white" v-model="keyboard_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="keyboard_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_division" :class="[option_field_class]" class="bg-white" v-model="keyboard_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="keyboard_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="keyboard_comment" labelFor="keyboard_comment" fieldName="Comment: " v-model="keyboard_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</SectionTemplate>
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
import SectionTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const keyboard_brand = ref();
const keyboard_model = ref();
const keyboard_serial_number = ref();
const keyboard_inventory_number = ref();
const keyboard_delivery_date = ref();
const keyboard_deployment_date = ref();
const keyboard_status = ref();
const keyboard_connection_type = ref();
const keyboard_parish = ref();
const keyboard_location_type = ref();
const keyboard_location = ref();
const keyboard_division = ref();
const keyboard_comment = ref();

async function addKeyboard() {
    const keyboard = {
        category: "Keyboard",
        division_id: keyboard_division.value,
        brand: keyboard_brand.value,
        model: keyboard_model.value,
        serial_number: keyboard_serial_number.value,
        inventory_number: keyboard_inventory_number.value,
        delivery_date: keyboard_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: keyboard_deployment_date.value?.toISOString().split('T')[0],
        status_id: keyboard_status.value,
        connection_type_id: keyboard_connection_type.value, 
    }

    for (const key in keyboard) {
        if (keyboard[key] === undefined) {
            keyboard[key] = null;
        }
    }

    try {
        const response = await axios.post('http://localhost:8000/add-mouse-keyboard/', keyboard);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}


</script>