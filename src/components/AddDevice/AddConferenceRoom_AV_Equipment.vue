<template>
<AddTemplate templateName="Conference Room AV Equipment">
    <form @submit.prevent="addConferenceRoomAVEquipment()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_brand" labelFor="conference_room_av_equipment_brand" fieldName="Brand: " v-model="conference_room_av_equipment_brand"/>

            <TextField id="conference_room_av_equipment_model" labelFor="conference_room_av_equipment_model" fieldName="Model: " v-model="conference_room_av_equipment_model"/>

            <TextField id="conference_room_av_equipment_serial_number" labelFor="conference_room_av_equipment_serial_number" fieldName="Serial Number: " v-model="conference_room_av_equipment_serial_number"/>                     

            <TextField id="conference_room_av_equipment_inventory_number" labelFor="conference_room_av_equipment_inventory_number" fieldName="Inventory Number: " v-model="conference_room_av_equipment_inventory_number"/>

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

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_status" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_status" fieldName="System Status: "/>
            </div>

            <TextField id="conference_room_av_equipment_name" labelFor="conference_room_av_equipment_name" fieldName="Device Name: " v-model="conference_room_av_equipment_name"/>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_mac_address" labelFor="conference_room_av_equipment_mac_address" fieldName="Mac Address: " v-model="conference_room_av_equipment_mac_address"/> 

            <TextField id="conference_room_av_equipment_ip_address" labelFor="conference_room_av_equipment_ip_address" fieldName="IP Address: " v-model="conference_room_av_equipment_ip_address"/>  
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <!-- <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_parish" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="conference_room_av_equipment_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_location_type" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="conference_room_av_equipment_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_location" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="conference_room_av_equipment_location" fieldName="Location" />
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_division" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="conference_room_av_equipment_division" fieldName="Division" />
            </div>
        </div>

        <!-- <CommentField id="conference_room_av_equipment_comment" labelFor="conference_room_av_equipment_comment" fieldName="Comment: " v-model="conference_room_av_equipment_comment"/> -->
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';
import {useBaseURLComposable} from '../../composable/useUrlcomposable'
import { getStatuses, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions.js';
import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const divisions = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

const conferenceRoomAvEquipmentFieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "status", "name", "mac_address", "ip_address",
  "parish", "location_type", "location",
  "division", "comment",
  "delivery_date", "deployment_date"
];

const conferenceRoomAvEquipmentRefs = {};

conferenceRoomAvEquipmentFieldNames.forEach(name => {
  const key = `conference_room_av_equipment_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  conferenceRoomAvEquipmentRefs[key] = ref(saved || "");

  watch(conferenceRoomAvEquipmentRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  conference_room_av_equipment_brand,
  conference_room_av_equipment_model,
  conference_room_av_equipment_serial_number,
  conference_room_av_equipment_inventory_number,
  conference_room_av_equipment_status,
  conference_room_av_equipment_name,
  conference_room_av_equipment_mac_address,
  conference_room_av_equipment_ip_address,
  conference_room_av_equipment_parish,
  conference_room_av_equipment_location_type,
  conference_room_av_equipment_location,
  conference_room_av_equipment_division,
  conference_room_av_equipment_comment,
  conference_room_av_equipment_delivery_date,
  conference_room_av_equipment_deployment_date,
} = conferenceRoomAvEquipmentRefs;

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addConferenceRoomAVEquipment() {
    const cr_equipment = {
        category: "CRAV",
        division_id: conference_room_av_equipment_division.value,
        brand: conference_room_av_equipment_brand.value,
        model: conference_room_av_equipment_model.value,
        serial_number: conference_room_av_equipment_serial_number.value,
        inventory_number: conference_room_av_equipment_inventory_number.value,
        status_id: conference_room_av_equipment_status.value,
        delivery_date: formatDate(conference_room_av_equipment_delivery_date.value),
        deployment_date: formatDate(conference_room_av_equipment_deployment_date.value),

        name: conference_room_av_equipment_name.value,
        ip_address: conference_room_av_equipment_ip_address.value,
        mac_address: conference_room_av_equipment_mac_address.value,
    }

    for (const key in cr_equipment) {
        if (cr_equipment[key] === undefined || cr_equipment[key] === "") {
            cr_equipment[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-crav-equipment/`, cr_equipment, {
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