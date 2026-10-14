<template>
<AddTemplate templateName="Webcam">
    <form @submit.prevent="addWebcam()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="webcam_brand" labelFor="webcam_brand" fieldName="Brand: " v-model="webcam_brand" :required="true"/>

            <TextField id="webcam_model" labelFor="webcam_model" fieldName="Model: " v-model="webcam_model" :required="true"/>

            <TextField id="webcam_serial_number" labelFor="webcam_serial_number" fieldName="Serial Number: " v-model="webcam_serial_number" :required="true"/>

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

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="webcam_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="webcam_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="webcam_supplier_name" labelFor="webcam_supplier_name" fieldName="Supplier Name: " v-model="webcam_supplier_name"/>

            <TextField id="webcam_device_cost" labelFor="webcam_device_cost" fieldName="Device Cost: " v-model="webcam_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="webcam_file_input" type="file" multiple>
                <TextLabel labelFor="webcam_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="webcam_file_input" type="file" multiple>
                <TextLabel labelFor="webcam_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_status" :class="[option_field_class]" class="bg-white" v-model.number="webcam_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="webcam_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_parish" :class="[option_field_class]" class="bg-white" v-model.number="webcam_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="webcam_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_location_type" :class="[option_field_class]" class="bg-white" v-model.number="webcam_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel :labelFor="webcam_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_location" :class="[option_field_class]" class="bg-white" v-model.number="webcam_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="webcam_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_division" :class="[option_field_class]" class="bg-white" v-model.number="webcam_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="webcam_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_branch" :class="[option_field_class]" class="bg-white" v-model.number="webcam_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="webcam_branch" fieldName="Branch" />
            </div>
        </div>
        
        <CommentField id="webcam_comment" labelFor="webcam_comment" fieldName="Comment: " v-model="webcam_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetWebcamForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const branches = ref([])
const statuses = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (webcam_parish.value) {
        parishChange(webcam_parish.value)
    }

    if (webcam_division.value) {
        divisionChange(webcam_division.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "parish", "location_type", "location",
  "division", "branch", "comment"
];

const webcamRefs = {};

fieldNames.forEach(name => {
    const key = `webcam_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* webcamRefs[key] = ref(saved || null); */
    webcamRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(webcamRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    webcam_brand,
    webcam_model,
    webcam_serial_number,
    webcam_inventory_number,
    webcam_delivery_date,
    webcam_deployment_date,
    webcam_bos_date,
    webcam_supplier_name,
    webcam_device_cost,
    webcam_status,
    webcam_parish,
    webcam_location_type,
    webcam_location,
    webcam_division,
    webcam_branch,
    webcam_comment,
} = webcamRefs;

async function parishChange(parishValue) {
    if (webcam_location.value == null || !webcam_location.value) {

        try {
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter Parish Change If");
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);
    }
}

async function divisionChange(divisionValue) {
    if (webcam_branch.value == null || !webcam_branch.value) {

        try {
        branches.value = await getDivisionBranches(divisionValue);
        console.log(branches.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter division Change If");
        branches.value = await getDivisionBranches(divisionValue);
        console.log(branches.value);
    }
}


watch (
    webcam_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", webcam_parish.value, "type:", typeof webcam_parish.value);
        console.log("location value:", webcam_location.value, "type:", typeof webcam_location.value);

        parishChange(newParish)
    }
)

watch (
    webcam_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", webcam_division.value, "type:", typeof webcam_division.value);
        console.log("Branch value:", webcam_branch.value, "type:", typeof webcam_branch.value);

        divisionChange(newDivision)
    }
)

function resetWebcamForm() {
  Object.keys(webcamRefs).forEach(key => {
    webcamRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addWebcam() {
    const webcam = {
        category: "Webcam",
        division_id: webcam_division.value,
        brand: webcam_brand.value,
        model: webcam_model.value,
        serial_number: webcam_serial_number.value,
        inventory_number: webcam_inventory_number.value,
        delivery_date: formatDate(webcam_delivery_date.value),
        deployment_date: formatDate(webcam_deployment_date.value),
        bos_date: formatDate(webcam_bos_date.value),
        supplier_name: webcam_supplier_name.value,
        device_cost: Number(webcam_device_cost.value),
        status_id: webcam_status.value,

        parish_id: webcam_parish.value,
        ltype_id: webcam_location_type.value,
        location_id: webcam_location.value,
        division_id: webcam_division.value,
        branch_id: webcam_branch.value,
        comment: webcam_comment.value,
    }

    for (const key in webcam) {
        if (webcam[key] === undefined || webcam[key] === "") {
            webcam[key] = null;
        }
    }

    if (webcam.delivery_date > webcam.deployment_date) {
        alert("Deployment Date must be earlier than Delivery Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-webcam/`, webcam, {
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