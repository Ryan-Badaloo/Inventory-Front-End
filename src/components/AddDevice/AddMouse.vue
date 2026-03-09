<template>
<AddTemplate templateName="Mouse">
    <form @submit.prevent="addMouse()" class="space-y-4">
 
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="mouse_brand" labelFor="mouse_brand" fieldName="Brand: " v-model="mouse_brand"/>

            <TextField id="mouse_model" labelFor="mouse_model" fieldName="Model: " v-model="mouse_model"/>

            <TextField id="mouse_serial_number" labelFor="mouse_serial_number" fieldName="Serial Number: " v-model="mouse_serial_number"/>

            <TextField id="mouse_inventory_number" labelFor="mouse_inventory_number" fieldName="Inventory Number: " v-model="mouse_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="mouse_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="mouse_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="mouse_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="mouse_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="mouse_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="mouse_bos_date" fieldName="BOS Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_status" :class="[option_field_class]" class="bg-white" v-model.number="mouse_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="mouse_status" fieldName="System Status: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_connection_type" :class="[option_field_class]" class="bg-white" v-model.number="mouse_connection_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                </select>
                <TextLabel labelFor="mouse_connection_type" fieldName="Connection Type: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_parish" :class="[option_field_class]" class="bg-white" v-model.number="mouse_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="mouse_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_location_type" :class="[option_field_class]" class="bg-white" v-model.number="mouse_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="mouse_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_location" :class="[option_field_class]" class="bg-white" v-model.number="mouse_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="mouse_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_division" :class="[option_field_class]" class="bg-white" v-model.number="mouse_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="mouse_division" fieldName="Division" />
            </div>
        </div>


        <CommentField id="mouse_comment" labelFor="mouse_comment" fieldName="Comment: " v-model="mouse_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetMouseForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

    connection_types.value = await getConnectionTypes();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (mouse_location.value) {
        locationChange(mouse_location.value)
    } else if (mouse_parish.value) {
        parishChange(mouse_parish.value)
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

const mouseRefs = {};

fieldNames.forEach(name => {
    const key = `mouse_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* mouseRefs[key] = ref(saved || null); */
    mouseRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(mouseRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});


const {
    mouse_brand,
    mouse_model,
    mouse_serial_number,
    mouse_inventory_number,
    mouse_delivery_date,
    mouse_deployment_date,
    mouse_bos_date,
    mouse_supplier_name,
    mouse_device_cost,
    mouse_status,
    mouse_connection_type,

    mouse_parish,
    mouse_location_type,
    mouse_location,
    mouse_division,
    mouse_comment,
} = mouseRefs;

async function parishChange(parishValue) {
    if (mouse_location.value == null || !mouse_location.value) {

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
    if (mouse_location.value != null) {

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

        console.log(mouse_parish.value)
        divisions.value = await getParishDivisions(mouse_parish.value);
        console.log(divisions.value);
    }
}

watch (
    mouse_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", mouse_parish.value, "type:", typeof mouse_parish.value);
        console.log("location value:", mouse_location.value, "type:", typeof mouse_location.value);

        parishChange(newParish)
    }
)

watch (
    mouse_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", mouse_parish.value)
        console.log("Divisions:", mouse_division.value)

        console.log("location value:", mouse_location.value);
        locationChange(newLocation)
        
    }
)

function resetMouseForm() {
    Object.keys(mouseRefs).forEach(key => {
        mouseRefs[key].value = null;
        localStorage.removeItem(`${key}_val`);
    });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addMouse() {
    const mouse = {
        category: "Mouse",
        division_id: mouse_division.value,
        brand: mouse_brand.value,
        model: mouse_model.value,
        serial_number: mouse_serial_number.value,
        inventory_number: mouse_inventory_number.value,
        delivery_date: formatDate(mouse_delivery_date.value),
        deployment_date: formatDate(mouse_deployment_date.value),
        bos_date: formatDate(mouse_bos_date.value),
        supplier_name: mouse_supplier_name.value,
        device_cost: mouse_device_cost.value,
        status_id: mouse_status.value,
        connection_type_id: mouse_connection_type.value, 

        parish_id: mouse_parish.value,
        location_type_id: mouse_location_type.value,
        location_id: mouse_location.value,
        division_id: mouse_division.value,
        comment: mouse_comment.value,
    }
    console.log("read values into mouse")

    for (const key in mouse) {
        if (mouse[key] === undefined || mouse[key] === "") {
            mouse[key] = null;
        }
    }


    if (mouse.delivery_date > mouse.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!mouse.serial_number || !mouse.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-mouse-keyboard/`, mouse, {
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

</script>>