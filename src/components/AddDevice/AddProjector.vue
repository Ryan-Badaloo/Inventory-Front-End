<template>
<AddTemplate templateName="Projector">
    <form @submit.prevent="addProjector()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="projector_brand" labelFor="projector_brand" fieldName="Brand: " v-model="projector_brand" :required="true"/>

            <TextField id="projector_model" labelFor="projector_model" fieldName="Model: " v-model="projector_model" :required="true"/>

            <TextField id="projector_serial_number" labelFor="projector_serial_number" fieldName="Serial Number: " v-model="projector_serial_number" :required="true"/>

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

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="projector_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="projector_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="projector_supplier_name" labelFor="projector_supplier_name" fieldName="Supplier Name: " v-model="projector_supplier_name"/>

            <TextField id="projector_device_cost" labelFor="projector_device_cost" fieldName="Device Cost: " v-model="projector_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="projector_file_input" type="file" multiple>
                <TextLabel labelFor="projector_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="projector_file_input" type="file" multiple>
                <TextLabel labelFor="projector_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_status" :class="[option_field_class]" class="bg-white" v-model.number="projector_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="projector_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_parish" :class="[option_field_class]" class="bg-white" v-model.number="projector_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="projector_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_location_type" :class="[option_field_class]" class="bg-white" v-model.number="projector_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel :labelFor="projector_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_location" :class="[option_field_class]" class="bg-white" v-model.number="projector_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="projector_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_division" :class="[option_field_class]" class="bg-white" v-model.number="projector_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="projector_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_branch" :class="[option_field_class]" class="bg-white" v-model.number="projector_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="projector_branch" fieldName="Branch" />
            </div>
        </div>
        
        <CommentField id="projector_comment" labelFor="projector_comment" fieldName="Comment: " v-model="projector_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetProjectorForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

    if (projector_parish.value) {
        parishChange(projector_parish.value)
    }

    if (projector_division.value) {
        divisionChange(projector_division.value)
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

const projectorRefs = {};

fieldNames.forEach(name => {
    const key = `projector_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* projectorRefs[key] = ref(saved || null); */
    projectorRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(projectorRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    projector_brand,
    projector_model,
    projector_serial_number,
    projector_inventory_number,
    projector_delivery_date,
    projector_deployment_date,
    projector_bos_date,
    projector_supplier_name,
    projector_device_cost,
    projector_status,
    projector_parish,
    projector_location_type,
    projector_location,
    projector_division,
    projector_branch,
    projector_comment,
} = projectorRefs;

async function parishChange(parishValue) {
    if (projector_location.value == null || !projector_location.value) {

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
    if (projector_branch.value == null || !projector_branch.value) {

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
    projector_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", projector_parish.value, "type:", typeof projector_parish.value);
        console.log("location value:", projector_location.value, "type:", typeof projector_location.value);

        parishChange(newParish)
    }
)

watch (
    projector_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", projector_division.value, "type:", typeof projector_division.value);
        console.log("Branch value:", projector_branch.value, "type:", typeof projector_branch.value);

        divisionChange(newDivision)
    }
)

function resetProjectorForm() {
  Object.keys(projectorRefs).forEach(key => {
    projectorRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addProjector() {
    const projector = {
        category: "Projector",
        division_id: projector_division.value,
        brand: projector_brand.value,
        model: projector_model.value,
        serial_number: projector_serial_number.value,
        inventory_number: projector_inventory_number.value,
        delivery_date: formatDate(projector_delivery_date.value),
        deployment_date: formatDate(projector_deployment_date.value),
        bos_date: formatDate(projector_bos_date.value),
        supplier_name: projector_supplier_name.value,
        device_cost: Number(projector_device_cost.value),
        status_id: projector_status.value,

        parish_id: projector_parish.value,
        ltype_id: projector_location_type.value,
        location_id: projector_location.value,
        division_id: projector_division.value,
        branch_id: projector_branch.value,
        comment: projector_comment.value,
    }

    for (const key in projector) {
        if (projector[key] === undefined || projector[key] === "") {
            projector[key] = null;
        }
    }

    if (projector.delivery_date > projector.deployment_date) {
        alert("Deployment Date must be earlier than Delivery Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-projector/`, projector, {
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