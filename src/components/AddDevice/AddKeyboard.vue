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
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="keyboard_status" fieldName="System Status: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_connection_type" :class="[option_field_class]" class="bg-white" v-model="keyboard_connection_type">
                    <option selected class="text-blue-100">Choose a Connection Type</option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>

                </select>
                <TextLabel labelFor="keyboard_connection_type" fieldName="Connection Type: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <!-- <div class="flex flex-row-reverse mb-6 group">
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
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_division" :class="[option_field_class]" class="bg-white" v-model="keyboard_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="keyboard_division" fieldName="Division" />
            </div>
        </div>

        <!-- <CommentField id="keyboard_comment" labelFor="keyboard_comment" fieldName="Comment: " v-model="keyboard_comment"/> -->
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetKeyboardForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
                Refresh
            </button>
        </div>
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { getStatuses, getConnectionTypes, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';
import {  } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import SectionTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const connection_types = ref([])
const divisions = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    console.log(statuses.value);

    connection_types.value = await getConnectionTypes();
    console.log(connection_types.value)

    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});


const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status", "connection_type", "parish", "location_type",
  "location", "division", "comment"
];

const keyboardRefs = {};

fieldNames.forEach(name => {
  const key = `keyboard_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  keyboardRefs[key] = ref(saved || "");

watch(keyboardRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});


const {
    keyboard_brand,
    keyboard_model,
    keyboard_serial_number,
    keyboard_inventory_number,
    keyboard_delivery_date,
    keyboard_deployment_date,
    keyboard_status,
    keyboard_connection_type,
    keyboard_parish,
    keyboard_location_type,
    keyboard_location,
    keyboard_division,
    keyboard_comment,
} = keyboardRefs;

function resetKeyboardForm() {
  Object.keys(keyboardRefs).forEach(key => {
    keyboardRefs[key].value = "";
    localStorage.removeItem(`${key}_val`);
  });
}


function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addKeyboard() {
    const keyboard = {
        category: "Keyboard",
        division_id: keyboard_division.value,
        brand: keyboard_brand.value,
        model: keyboard_model.value,
        serial_number: keyboard_serial_number.value,
        inventory_number: keyboard_inventory_number.value,
        delivery_date: formatDate(keyboard_delivery_date.value),
        deployment_date: formatDate(keyboard_deployment_date.value),
        status_id: keyboard_status.value,
        connection_type_id: keyboard_connection_type.value, 
    }

    for (const key in keyboard) {
        if (keyboard[key] === undefined) {
            keyboard[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-mouse-keyboard/`, keyboard, {
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