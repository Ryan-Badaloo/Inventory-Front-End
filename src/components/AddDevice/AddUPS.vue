<template>
<AddTemplate templateName="UPS">
    <form @submit.prevent="addUPS()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="ups_brand" labelFor="ups_brand" fieldName="Brand: " v-model="ups_brand"/>

            <TextField id="ups_model" labelFor="ups_model" fieldName="Model: " v-model="ups_model"/>

            <TextField id="ups_serial_number" labelFor="ups_serial_number" fieldName="Serial Number: " v-model="ups_serial_number"/>

            <TextField id="ups_inventory_number" labelFor="ups_inventory_number" fieldName="Inventory Number: " v-model="ups_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="ups_supplier_name" labelFor="ups_supplier_name" fieldName="Supplier Name: " v-model="ups_supplier_name"/>

            <TextField id="ups_device_cost" labelFor="ups_device_cost" fieldName="Device Cost: " v-model="ups_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="ups_file_input" type="file" multiple>
                <TextLabel labelFor="ups_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="ups_file_input" type="file" multiple>
                <TextLabel labelFor="ups_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_status" :class="[option_field_class]" class="bg-white" v-model.number="ups_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
                </select>
                <TextLabel labelFor="ups_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">
            <TextField id="ups_number_outlets" labelFor="ups_number_outlets" fieldName="Number Of Outlets: " v-model="ups_number_outlets"/>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_parish" :class="[option_field_class]" class="bg-white" v-model.number="ups_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="ups_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_location_type" :class="[option_field_class]" class="bg-white" v-model.number="ups_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="ups_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_location" :class="[option_field_class]" class="bg-white" v-model.number="ups_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="ups_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_division" :class="[option_field_class]" class="bg-white" v-model.number="ups_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="ups_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="ups_comment" labelFor="ups_comment" fieldName="Comment: " v-model="ups_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetUPSForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (ups_location.value) {
        locationChange(ups_location.value)
    } else if (ups_parish.value) {
        parishChange(ups_parish.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "number_outlets", "returned_date",
  "parish", "location_type", "location",
  "division", "comment"
];

const upsRefs = {};

fieldNames.forEach(name => {
    const key = `ups_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* upsRefs[key] = ref(saved || null); */
    upsRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(upsRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    ups_brand,
    ups_model, 
    ups_serial_number,
    ups_inventory_number,
    ups_delivery_date,
    ups_deployment_date,
    ups_bos_date,
    ups_supplier_name,
    ups_device_cost,
    ups_status,
    ups_number_outlets,
    ups_returned_date,
    ups_parish,
    ups_location_type,
    ups_location,
    ups_division,
    ups_comment,
} = upsRefs;

async function parishChange(parishValue) {
    if (ups_location.value == null || !ups_location.value) {

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
    if (ups_location.value != null) {

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

        console.log(ups_parish.value)
        divisions.value = await getParishDivisions(ups_parish.value);
        console.log(divisions.value);
    }
}

watch (
    ups_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", ups_parish.value, "type:", typeof ups_parish.value);
        console.log("location value:", ups_location.value, "type:", typeof ups_location.value);

        parishChange(newParish)
    }
)

watch (
    ups_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", ups_parish.value)
        console.log("Divisions:", ups_division.value)

        console.log("location value:", ups_location.value);
        locationChange(newLocation)
        
    }
)

function resetUPSForm() {
  Object.keys(upsRefs).forEach(key => {
    upsRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addUPS() {
    const ups = {
        category: "UPS",
        division_id: ups_division.value,
        brand: ups_brand.value,
        model: ups_model.value,
        serial_number: ups_serial_number.value,
        inventory_number: ups_inventory_number.value,
        delivery_date: formatDate(ups_delivery_date.value),
        deployment_date: formatDate(ups_deployment_date.value),
        bos_date: formatDate(ups_bos_date.value),
        supplier_name: ups_supplier_name.value,
        device_cost: Number(ups_device_cost.value),
        status_id: ups_status.value,

        number_of_outlets: ups_number_outlets.value,
        return_date: formatDate(ups_returned_date.value),

        parish_id: ups_parish.value,
        location_type_id: ups_location_type.value,
        location_id: ups_location.value,
        division_id: ups_division.value,
        comment: ups_comment.value,
    }

    for (const key in ups) {
        if (ups[key] === undefined) {
            ups[key] = null;
        }
    }

    if (ups.delivery_date > ups.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!ups.serial_number || !ups.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-ups/`, ups, {
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