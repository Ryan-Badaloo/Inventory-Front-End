<template>
<AddTemplate templateName="Surge Protector">
    <form @submit.prevent="addSurge()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="surge_protector_brand" labelFor="surge_protector_brand" fieldName="Brand: " v-model="surge_protector_brand"/>

            <TextField id="surge_protector_model" labelFor="surge_protector_model" fieldName="Model: " v-model="surge_protector_model"/>

            <TextField id="surge_protector_serial_number" labelFor="surge_protector_serial_number" fieldName="Serial Number: " v-model="surge_protector_serial_number"/>

            <TextField id="surge_protector_inventory_number" labelFor="surge_protector_inventory_number" fieldName="Inventory Number: " v-model="surge_protector_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="surge_protector_supplier_name" labelFor="surge_protector_supplier_name" fieldName="Supplier Name: " v-model="surge_protector_supplier_name"/>

            <TextField id="surge_protector_device_cost" labelFor="surge_protector_device_cost" fieldName="Device Cost: " v-model="surge_protector_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="surge_protector_file_input" type="file" multiple>
                <TextLabel labelFor="surge_protector_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="surge_protector_file_input" type="file" multiple>
                <TextLabel labelFor="surge_protector_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_status" :class="[option_field_class]" class="bg-white" v-model.number="surge_protector_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="surge_protector_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">
            <TextField id="surge_protector_number_outlets" labelFor="surge_protector_number_outlets" fieldName="Number Of Outlets: " v-model="surge_protector_number_outlets"/>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_parish" :class="[option_field_class]" class="bg-white" v-model.number="surge_protector_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="surge_protector_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_location_type" :class="[option_field_class]" class="bg-white" v-model.number="surge_protector_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="surge_protector_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_location" :class="[option_field_class]" class="bg-white" v-model.number="surge_protector_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="surge_protector_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_division" :class="[option_field_class]" class="bg-white" v-model.number="surge_protector_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="surge_protector_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="surge_protector_comment" labelFor="surge_protector_comment" fieldName="Comment: " v-model="surge_protector_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetSurgeProtectorForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

    if (surge_protector_location.value) {
        locationChange(surge_protector_location.value)
    } else if (surge_protector_parish.value) {
        parishChange(surge_protector_parish.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "number_outlets",
  "parish", "location_type", "location",
  "division", "comment"
];

const surgeProtectorRefs = {};

fieldNames.forEach(name => {
    const key = `surge_protector_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* surgeProtectorRefs[key] = ref(saved || null); */
    surgeProtectorRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(surgeProtectorRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
    surge_protector_brand,
    surge_protector_model,
    surge_protector_serial_number,
    surge_protector_inventory_number,
    surge_protector_delivery_date,
    surge_protector_deployment_date,
    surge_protector_bos_date,
    surge_protector_supplier_name,
    surge_protector_device_cost,
    surge_protector_status,
    surge_protector_number_outlets,

    surge_protector_parish,
    surge_protector_location_type,
    surge_protector_location,
    surge_protector_division,
    surge_protector_comment,
} = surgeProtectorRefs;

async function parishChange(parishValue) {
    if (surge_protector_location.value == null || !surge_protector_location.value) {

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
    if (surge_protector_location.value != null) {

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

        console.log(surge_protector_parish.value)
        divisions.value = await getParishDivisions(surge_protector_parish.value);
        console.log(divisions.value);
    }
}

watch (
    surge_protector_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", surge_protector_parish.value, "type:", typeof surge_protector_parish.value);
        console.log("location value:", surge_protector_location.value, "type:", typeof surge_protector_location.value);

        parishChange(newParish)
    }
)

watch (
    surge_protector_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", surge_protector_parish.value)
        console.log("Divisions:", surge_protector_division.value)

        console.log("location value:", surge_protector_location.value);
        locationChange(newLocation)
        
    }
)

function resetSurgeProtectorForm() {
  Object.keys(surgeProtectorRefs).forEach(key => {
    surgeProtectorRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addSurge() {
    const surge_protector = {
        category: "Surge Protector",
        division_id: surge_protector_division.value,
        brand: surge_protector_brand.value,
        model: surge_protector_model.value,
        serial_number: surge_protector_serial_number.value,
        inventory_number: surge_protector_inventory_number.value,
        delivery_date: formatDate(surge_protector_delivery_date.value),
        deployment_date: formatDate(surge_protector_deployment_date.value),
        bos_date: formatDate(surge_protector_bos_date.value),
        supplier_name: surge_protector_supplier_name.value,
        device_cost: Number(surge_protector_device_cost.value),
        status_id: surge_protector_status.value,

        number_of_outlets: surge_protector_number_outlets.value,

        parish_id: surge_protector_parish.value,
        location_type_id: surge_protector_location_type.value,
        location_id: surge_protector_location.value,
        division_id: surge_protector_division.value,
        comment: surge_protector_comment.value,
    }
    console.log("read values into surge protector")

    for (const key in surge_protector) {
        if (surge_protector[key] === undefined || surge_protector[key] === "") {
            surge_protector[key] = null;
        }
    }

    if (surge_protector.delivery_date > surge_protector.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!surge_protector.serial_number || !surge_protector.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-surge-protector/`, surge_protector, {
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