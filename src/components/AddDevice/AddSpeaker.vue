<template>
<AddTemplate templateName="Speaker">
    <form @submit.prevent="addSpeaker()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="speaker_brand" labelFor="speaker_brand" fieldName="Brand: " v-model="speaker_brand"/>

            <TextField id="speaker_model" labelFor="speaker_model" fieldName="Model: " v-model="speaker_model"/>

            <TextField id="speaker_serial_number" labelFor="speaker_serial_number" fieldName="Serial Number: " v-model="speaker_serial_number"/>

            <TextField id="speaker_inventory_number" labelFor="speaker_inventory_number" fieldName="Inventory Number: " v-model="speaker_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="speaker_supplier_name" labelFor="speaker_supplier_name" fieldName="Supplier Name: " v-model="speaker_supplier_name"/>

            <TextField id="speaker_device_cost" labelFor="speaker_device_cost" fieldName="Device Cost: " v-model="speaker_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="speaker_file_input" type="file" multiple>
                <TextLabel labelFor="speaker_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="speaker_file_input" type="file" multiple>
                <TextLabel labelFor="speaker_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_status" :class="[option_field_class]" class="bg-white" v-model.number="speaker_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
                </select>
                <TextLabel labelFor="speaker_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">
            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_returned_date" fieldName="Returned Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_type" :class="[option_field_class]" class="bg-white" v-model.number="speaker_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="speaker_type in speaker_types" :key="speaker_type.speaker_type_id" :value=speaker_type.speaker_type_id class="text-black">{{ speaker_type.speaker_type_description }}</option>
                </select>
                <TextLabel labelFor="speaker_type" fieldName="Speaker Type: "/>
            </div>

            <TextField id="speaker_number_speakers" labelFor="speaker_number_speakers" fieldName="Number Of Speakers: " v-model="speaker_number_speakers"/>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_parish" :class="[option_field_class]" class="bg-white" v-model.number="speaker_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="speaker_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_location_type" :class="[option_field_class]" class="bg-white" v-model.number="speaker_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="speaker_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_location" :class="[option_field_class]" class="bg-white" v-model.number="speaker_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="speaker_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_division" :class="[option_field_class]" class="bg-white" v-model.number="speaker_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="speaker_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="speaker_comment" labelFor="speaker_comment" fieldName="Comment: " v-model="speaker_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetSpeakerForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getSpeakerTypes, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const speaker_types = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    speaker_types.value = await getSpeakerTypes();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (speaker_location.value) {
        locationChange(speaker_location.value)
    } else if (speaker_parish.value) {
        parishChange(speaker_parish.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "returned_date", "number_speakers", "type",
  "parish", "location_type", "location",
  "division", "comment"
];

const speakerRefs = {};

fieldNames.forEach(name => {
    const key = `speaker_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* speakerRefs[key] = ref(saved || null); */
    speakerRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(speakerRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    speaker_brand,
    speaker_model,
    speaker_serial_number,
    speaker_inventory_number,
    speaker_delivery_date,
    speaker_deployment_date,
    speaker_bos_date,
    speaker_supplier_name,
    speaker_device_cost,
    speaker_status,
    speaker_returned_date,
    speaker_type,
    speaker_number_speakers,
    speaker_parish,
    speaker_location_type,
    speaker_location,
    speaker_division,
    speaker_comment,
} = speakerRefs;

async function parishChange(parishValue) {
    if (speaker_location.value == null || !speaker_location.value) {

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
    if (speaker_location.value != null) {

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

        console.log(speaker_parish.value)
        divisions.value = await getParishDivisions(speaker_parish.value);
        console.log(divisions.value);
    }
}

watch (
    speaker_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", speaker_parish.value, "type:", typeof speaker_parish.value);
        console.log("location value:", speaker_location.value, "type:", typeof speaker_location.value);

        parishChange(newParish)
    }
)

watch (
    speaker_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", speaker_parish.value)
        console.log("Divisions:", speaker_division.value)

        console.log("location value:", speaker_location.value);
        locationChange(newLocation)
        
    }
)

function resetSpeakerForm() {
  Object.keys(speakerRefs).forEach(key => {
    speakerRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addSpeaker() {
    const speaker = {
        category: "Speaker",
        division_id: speaker_division.value,
        brand: speaker_brand.value,
        model: speaker_model.value,
        serial_number: speaker_serial_number.value,
        inventory_number: speaker_inventory_number.value,
        delivery_date: formatDate(speaker_delivery_date.value),
        deployment_date: formatDate(speaker_deployment_date.value),
        bos_date: formatDate(speaker_bos_date.value),
        supplier_name: speaker_supplier_name.value,
        device_cost: Number(speaker_device_cost.value),
        status_id: speaker_status.value,

        return_date: formatDate(speaker_returned_date.value),
        speaker_type_id: speaker_type.value,
        number_of_speakers: speaker_number_speakers.value,

        parish_id: speaker_parish.value,
        location_type_id: speaker_location_type.value,
        location_id: speaker_location.value,
        division_id: speaker_division.value,
        comment: speaker_comment.value,
        
    }

    for (const key in speaker) {
        if (speaker[key] === undefined || speaker[key] === "") {
            speaker[key] = null;
        }
    }

    if (speaker.delivery_date > speaker.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (!speaker.serial_number || !speaker.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-speaker/`, speaker, {
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