<template>
<AddTemplate templateName="Conference Room AV Equipment">
    <form @submit.prevent="addConferenceRoomAVEquipment()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_brand" labelFor="conference_room_av_equipment_brand" fieldName="Brand: " v-model="conference_room_av_equipment_brand" :required="true"/>

            <TextField id="conference_room_av_equipment_model" labelFor="conference_room_av_equipment_model" fieldName="Model: " v-model="conference_room_av_equipment_model" :required="true"/>

            <TextField id="conference_room_av_equipment_serial_number" labelFor="conference_room_av_equipment_serial_number" fieldName="Serial Number: " v-model="conference_room_av_equipment_serial_number" :required="true"/>                     

            <TextField id="conference_room_av_equipment_inventory_number" labelFor="conference_room_av_equipment_inventory_number" fieldName="Inventory Number: " v-model="conference_room_av_equipment_inventory_number"/>

            <!-- Delivery Date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="conference_room_av_equipment_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="conference_room_av_equipment_delivery_date" fieldName="Deployment Date: "/>
            </div>

            <!-- Deployment Date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="conference_room_av_equipment_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="conference_room_av_equipment_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="conference_room_av_equipment_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="conference_room_av_equipment_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="conference_room_av_equipment_supplier_name" labelFor="conference_room_av_equipment_supplier_name" fieldName="Supplier Name: " v-model="conference_room_av_equipment_supplier_name"/>

            <TextField id="conference_room_av_equipment_device_cost" labelFor="conference_room_av_equipment_device_cost" fieldName="Device Cost: " v-model="conference_room_av_equipment_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="conference_room_av_equipment_file_input" type="file" multiple>
                <TextLabel labelFor="conference_room_av_equipment_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="conference_room_av_equipment_file_input" type="file" multiple>
                <TextLabel labelFor="conference_room_av_equipment_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_status" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_status" fieldName="System Status: " :required="true"/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_type" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="crav_equipment_type in crav_equipment_types" :key="crav_equipment_type.crav_equipment_type_id" :value=crav_equipment_type.crav_equipment_type_id class="text-black">{{ crav_equipment_type.crav_equipment_type_description }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_type" fieldName="Equipment Type: "/>
            </div>

        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_name" labelFor="conference_room_av_equipment_name" fieldName="Device Name: " v-model="conference_room_av_equipment_name"/>

            <TextField id="conference_room_av_equipment_mac_address" labelFor="conference_room_av_equipment_mac_address" fieldName="Mac Address: " v-model="conference_room_av_equipment_mac_address" :required="true"/> 

            <TextField id="conference_room_av_equipment_ip_address" labelFor="conference_room_av_equipment_ip_address" fieldName="IP Address: " v-model="conference_room_av_equipment_ip_address"/>  

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_meeting_room" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_meeting_room">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="meeting_room in meeting_rooms" :key="meeting_room.meeting_room_id" :value=meeting_room.meeting_room_id class="text-black">{{ meeting_room.meeting_room_description }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_meeting_room" fieldName="Meeting Room: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_parish" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_location_type" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_location" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_division" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_branch" :class="[option_field_class]" class="bg-white" v-model.number="conference_room_av_equipment_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_branch" fieldName="Branch" />
            </div>
        </div>

        <CommentField id="conference_room_av_equipment_comment" labelFor="conference_room_av_equipment_comment" fieldName="Comment: " v-model="conference_room_av_equipment_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetCRAVForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
                Refresh
            </button>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { getStatuses, getCRAVEquipmentTypes, getMeetingRooms, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const branches = ref([])
const statuses = ref([])
const crav_equipment_types = ref([])
const meeting_rooms = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    crav_equipment_types.value = await getCRAVEquipmentTypes();

    meeting_rooms.value = await getMeetingRooms();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (conference_room_av_equipment_parish.value) {
        parishChange(conference_room_av_equipment_parish.value)
    }

    if (conference_room_av_equipment_division.value) {
        divisionChange(conference_room_av_equipment_division.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "type",
  "name", "mac_address", "ip_address", "meeting_room",
  "parish", "location_type", "location",
  "division", "branch", "comment",
  "delivery_date", "deployment_date"
];

const conferenceRoomAvEquipmentRefs = {};

fieldNames.forEach(name => {
    const key = `conference_room_av_equipment_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* conferenceRoomAvEquipmentRefs[key] = ref(saved || null); */
    conferenceRoomAvEquipmentRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(conferenceRoomAvEquipmentRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    conference_room_av_equipment_brand,
    conference_room_av_equipment_model,
    conference_room_av_equipment_serial_number,
    conference_room_av_equipment_inventory_number,
    conference_room_av_equipment_delivery_date,
    conference_room_av_equipment_deployment_date,
    conference_room_av_equipment_bos_date,
    conference_room_av_equipment_supplier_name,
    conference_room_av_equipment_device_cost,
    conference_room_av_equipment_status,
    conference_room_av_equipment_type,
    conference_room_av_equipment_name,
    conference_room_av_equipment_mac_address,
    conference_room_av_equipment_ip_address,
    conference_room_av_equipment_meeting_room,
    conference_room_av_equipment_parish,
    conference_room_av_equipment_location_type,
    conference_room_av_equipment_location,
    conference_room_av_equipment_division,
    conference_room_av_equipment_branch,
    conference_room_av_equipment_comment,
} = conferenceRoomAvEquipmentRefs;

async function parishChange(parishValue) {
    if (conference_room_av_equipment_location.value == null || !conference_room_av_equipment_location.value) {

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
    if (conference_room_av_equipment_branch.value == null || !conference_room_av_equipment_branch.value) {

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
    conference_room_av_equipment_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", conference_room_av_equipment_parish.value, "type:", typeof conference_room_av_equipment_parish.value);
        console.log("location value:", conference_room_av_equipment_location.value, "type:", typeof conference_room_av_equipment_location.value);

        parishChange(newParish)
    }
)

watch (
    conference_room_av_equipment_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", conference_room_av_equipment_division.value, "type:", typeof conference_room_av_equipment_division.value);
        console.log("Branch value:", conference_room_av_equipment_branch.value, "type:", typeof conference_room_av_equipment_branch.value);

        divisionChange(newDivision)
    }
)

function resetCRAVForm() {
  Object.keys(conferenceRoomAvEquipmentRefs).forEach(key => {
    conferenceRoomAvEquipmentRefs[key].value = "";
    localStorage.removeItem(`${key}_val`); 
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addConferenceRoomAVEquipment() {
    const cr_equipment = {
        category: "CRAV",
        brand: conference_room_av_equipment_brand.value,
        model: conference_room_av_equipment_model.value,
        serial_number: conference_room_av_equipment_serial_number.value,
        inventory_number: conference_room_av_equipment_inventory_number.value,
        delivery_date: formatDate(conference_room_av_equipment_delivery_date.value),
        deployment_date: formatDate(conference_room_av_equipment_deployment_date.value),
        bos_date: formatDate(conference_room_av_equipment_bos_date.value),
        supplier_name: conference_room_av_equipment_supplier_name.value,
        device_cost: Number(conference_room_av_equipment_device_cost.value),
        status_id: conference_room_av_equipment_status.value,

        crav_equipment_type_id: conference_room_av_equipment_type.value,
        name: conference_room_av_equipment_name.value,
        ip_address: conference_room_av_equipment_ip_address.value,
        mac_address: conference_room_av_equipment_mac_address.value,
        meeting_room_id: conference_room_av_equipment_meeting_room.value,

        parish_id: conference_room_av_equipment_parish.value,
        ltype_id: conference_room_av_equipment_location_type.value,
        location_id: conference_room_av_equipment_location.value,
        division_id: conference_room_av_equipment_division.value,
        branch_id: conference_room_av_equipment_branch.value,
        comment: conference_room_av_equipment_comment.value,
    }

    for (const key in cr_equipment) {
        if (cr_equipment[key] === undefined || cr_equipment[key] === "") {
            cr_equipment[key] = null;
        }
    }

    if (cr_equipment.delivery_date > cr_equipment.deployment_date) {
        alert("Delivery Date must be earlier than Deployment Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-crav-equipment/`, cr_equipment, {
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