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

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="scanner_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="scanner_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="scanner_supplier_name" labelFor="scanner_supplier_name" fieldName="Supplier Name: " v-model="scanner_supplier_name"/>

            <TextField id="scanner_device_cost" labelFor="scanner_device_cost" fieldName="Device Cost: " v-model="scanner_device_cost"/>


            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_status" :class="[option_field_class]" class="bg-white" v-model.number="scanner_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="scanner_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="scanner_mac_address" labelFor="scanner_mac_address" fieldName="Mac Address: " v-model="scanner_mac_address"/>

            <TextField id="scanner_ip_address" labelFor="scanner_ip_address" fieldName="IP Address: " v-model="scanner_ip_address"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_connection_type" :class="[option_field_class]" class="bg-white" v-model.number="scanner_connection_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                </select>
                <TextLabel labelFor="scanner_connection_type" fieldName="Connection Type: "/>
            </div>

        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_parish" :class="[option_field_class]" class="bg-white" v-model.number="scanner_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="scanner_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_location_type" :class="[option_field_class]" class="bg-white" v-model.number="scanner_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="scanner_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_location" :class="[option_field_class]" class="bg-white" v-model.number="scanner_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="scanner_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_division" :class="[option_field_class]" class="bg-white" v-model.number="scanner_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="scanner_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="scanner_comment" labelFor="scanner_comment" fieldName="Comment: " v-model="scanner_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetScannerForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

    if (scanner_location.value) {
        locationChange(scanner_location.value)
    } else if (scanner_parish.value) {
        parishChange(scanner_parish.value)
    }


    } catch (err) {
        console.error("Failed to load statuses", err);
    }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date",, "bos_date", "supplier_name", "device_cost", "status",
  "mac_address", "ip_address", "connection_type",
  "parish", "location_type", "location",
  "division", "comment"
];

const scannerRefs = {};

fieldNames.forEach(name => {
    const key = `scanner_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* scannerRefs[key] = ref(saved || null); */
    scannerRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(scannerRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
    scanner_brand,
    scanner_model,
    scanner_serial_number,
    scanner_inventory_number,
    scanner_delivery_date,
    scanner_deployment_date,
    scanner_bos_date,
    scanner_supplier_name,
    scanner_device_cost,
    scanner_status,
    scanner_mac_address, 
    scanner_ip_address,
    scanner_connection_type,
    scanner_parish,
    scanner_location_type,
    scanner_location,
    scanner_division,
    scanner_comment,
} = scannerRefs;

async function parishChange(parishValue) {
    if (scanner_location.value == null || !scanner_location.value) {

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
    if (scanner_location.value != null) {

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

        console.log(scanner_parish.value)
        divisions.value = await getParishDivisions(scanner_parish.value);
        console.log(divisions.value);
    }
}

watch (
    scanner_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", scanner_parish.value, "type:", typeof scanner_parish.value);
        console.log("location value:", scanner_location.value, "type:", typeof scanner_location.value);

        parishChange(newParish)
    }
)

watch (
    scanner_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", scanner_parish.value)
        console.log("Divisions:", scanner_division.value)

        console.log("location value:", scanner_location.value);
        locationChange(newLocation)
        
    }
)

function resetScannerForm() {
  Object.keys(scannerRefs).forEach(key => {
    scannerRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

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
        bos_date: formatDate(scanner_bos_date.value),
        supplier_name: scanner_supplier_name.value,
        device_cost: scanner_device_cost.value,
        mac_address: scanner_mac_address.value,
        ip_address: scanner_ip_address.value,
        connection_type_id: scanner_connection_type.value,
        status_id: scanner_status.value,

        parish_id: scanner_parish.value,
        location_type_id: scanner_location_type.value,
        location_id: scanner_location.value,
        division_id: scanner_division.value,
        comment: scanner_comment.value,
    }
    console.log("read values into scanner")

    for (const key in scanner) {
        if (scanner[key] === undefined || scanner[key] === "") {
            scanner[key] = null;
        }
    }

    if (scanner.delivery_date > scanner.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!scanner.serial_number || !scanner.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-scanner/`, scanner, {
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