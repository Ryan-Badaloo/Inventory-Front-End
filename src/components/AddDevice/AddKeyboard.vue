<template>
<AddTemplate templateName="Keyboard">
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
                    text-input 
                    :class="[date_field_class]">
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

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="keyboard_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="keyboard_bos_date" fieldName="BOS Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_status" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="keyboard_status" fieldName="System Status: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_connection_type" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_connection_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                </select>
                <TextLabel labelFor="keyboard_connection_type" fieldName="Connection Type: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_parish" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="keyboard_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_location_type" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="keyboard_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_location" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="keyboard_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="keyboard_division" :class="[option_field_class]" class="bg-white" v-model.number="keyboard_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="keyboard_division" fieldName="Division" />
            </div>
        </div>


        <CommentField id="keyboard_comment" labelFor="keyboard_comment" fieldName="Comment: " v-model="keyboard_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetKeyboardForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getConnectionTypes, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const connection_types = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    console.log(statuses.value);

    connection_types.value = await getConnectionTypes();
    console.log(connection_types.value)

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (keyboard_location.value) {
        locationChange(keyboard_location.value)
    } else if (keyboard_parish.value) {
        parishChange(keyboard_parish.value)
    }

  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});


const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status", "connection_type", "parish", "location_type",
  "location", "division", "comment"
];

const keyboardRefs = {};

fieldNames.forEach(name => {
    const key = `keyboard_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* keyboardRefs[key] = ref(saved || null); */
    keyboardRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(keyboardRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});


const {
    keyboard_brand,
    keyboard_model,
    keyboard_serial_number,
    keyboard_inventory_number,
    keyboard_delivery_date,
    keyboard_deployment_date,
    keyboard_bos_date,
    keyboard_supplier_name,
    keyboard_device_cost,
    keyboard_status,
    keyboard_connection_type,

    keyboard_parish,
    keyboard_location_type,
    keyboard_location,
    keyboard_division,
    keyboard_comment,
} = keyboardRefs;

async function parishChange(parishValue) {
    if (keyboard_location.value == null || !keyboard_location.value) {

        try {
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);

        divisions.value = await getParishDivisions(parishValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);
    }
}

async function locationChange(locationValue) {
    if (keyboard_location.value != null) {

        try {
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        divisions.value = await getLocationDivisions(locationValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        console.log(keyboard_parish.value)
        divisions.value = await getParishDivisions(keyboard_parish.value);
        console.log(divisions.value);
    }
}

watch (
    keyboard_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", keyboard_parish.value, "type:", typeof keyboard_parish.value);
        console.log("location value:", keyboard_location.value, "type:", typeof keyboard_location.value);

        parishChange(newParish)
    }
)

watch (
    keyboard_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", keyboard_parish.value)
        console.log("Divisions:", keyboard_division.value)

        console.log("location value:", keyboard_location.value);
        locationChange(newLocation)
        
    }
)

function resetKeyboardForm() {
    Object.keys(keyboardRefs).forEach(key => {
        keyboardRefs[key].value = null;
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
        bos_date: formatDate(keyboard_bos_date.value),
        supplier_name: keyboard_supplier_name.value,
        device_cost: keyboard_device_cost.value,
        status_id: keyboard_status.value,
        connection_type_id: keyboard_connection_type.value, 

        parish_id: keyboard_parish.value,
        location_type_id: keyboard_location_type.value,
        location_id: keyboard_location.value,
        division_id: keyboard_division.value,
        comment: keyboard_comment.value,
    }
    console.log("read values into keyboard")

    for (const key in keyboard) {
        if (keyboard[key] === undefined || keyboard[key] === "") {
            keyboard[key] = null;
        }
    }


    if (keyboard.delivery_date > keyboard.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!keyboard.serial_number || !keyboard.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-mouse-keyboard/`, keyboard, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data == "Serial Found") {
                alert("Serial Number Already Exists", response.data)
                console.log(response.data)
            } else if (response.data == "Inventory Found") {
                alert("Inventory Number Already Exists", response.data)
                console.log(response.data)
            } else {
                alert("Item has been added successfully")
                console.log("Item has been added successfully")
            }
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);
            console.error("Error:", error);

            alert("Failed to add item. Check console.");
        }
    }
}

</script>