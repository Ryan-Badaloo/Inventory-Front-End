<template>
<SectionTemplate templateName="Keyboard">
    <form @submit.prevent="createKeyboard()" class="space-y-4">
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
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="keyboard_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="keyboard_ministry"

        id_division="keyboard_division"

        id_section="keyboard_section"

        id_location="keyboard_location"
        />

        <CommentField id="keyboard_comment" labelFor="keyboard_comment" fieldName="Comment: "/>
        
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

async function createKeyboard() {
    const keyboard = {
        Brand: keyboard_brand.value,
        Model: keyboard_model.value,
        Serial_Number: keyboard_serial_number.value,
        Inventory_Number: keyboard_inventory_number.value,
        Delivery_Date: keyboard_delivery_date.value?.toISOString().split('T')[0],
        Deployment_Date: keyboard_deployment_date.value?.toISOString().split('T')[0],
        System_Status: keyboard_status.value
    }

    try {
       // const response = await axios.post('http://localhost:8080/create_item/', keyboard);
        const response = await axios.post('http://localhost:8000/create_item/', keyboard);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

async function test() {
    const keyboard = {
        Brand: keyboard_brand.value,
        Model: keyboard_model.value,
        Serial_Number: keyboard_serial_number.value,
        Inventory_Number: keyboard_inventory_number.value,
        Delivery_Date: keyboard_delivery_date.value,
        Deployment_Date: keyboard_deployment_date.value,
        System_Status: keyboard_status.value
    }

    console.log(keyboard);
}


</script>