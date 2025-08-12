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
                <select id="conference_room_av_equipment_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_status" fieldName="System Status: " v-model="conference_room_av_equipment_status"/>
            </div>

            <TextField id="conference_room_av_equipment_name" labelFor="conference_room_av_equipment_name" fieldName="Device Name: " v-model="conference_room_av_equipment_name"/>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_mac_address" labelFor="conference_room_av_equipment_mac_address" fieldName="Mac Address: " v-model="conference_room_av_equipment_mac_address"/> 

            <TextField id="conference_room_av_equipment_ip_address" labelFor="conference_room_av_equipment_ip_address" fieldName="IP Address: " v-model="conference_room_av_equipment_ip_address"/>  
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
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
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_division" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="conference_room_av_equipment_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="conference_room_av_equipment_comment" labelFor="conference_room_av_equipment_comment" fieldName="Comment: " v-model="conference_room_av_equipment_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';

import { option_field_class } from '@/utils/descriptions.js';
import { date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';



const conference_room_av_equipment_brand = ref();
const conference_room_av_equipment_model = ref();
const conference_room_av_equipment_serial_number = ref();
const conference_room_av_equipment_inventory_number = ref();
const conference_room_av_equipment_status = ref();

const conference_room_av_equipment_name = ref();
const conference_room_av_equipment_mac_address = ref();
const conference_room_av_equipment_ip_address = ref();

const conference_room_av_equipment_parish = ref();
const conference_room_av_equipment_location_type = ref();
const conference_room_av_equipment_location = ref();
const conference_room_av_equipment_division = ref();
const conference_room_av_equipment_comment = ref();

const conference_room_av_equipment_delivery_date = ref();
const conference_room_av_equipment_deployment_date = ref();

async function addConferenceRoomAVEquipment() {
    const cr_equipment = {
        category: "CRAV",
        division_id: conference_room_av_equipment_division.value,
        brand: conference_room_av_equipment_brand.value,
        model: conference_room_av_equipment_model.value,
        serial_number: conference_room_av_equipment_serial_number.value,
        inventory_number: conference_room_av_equipment_inventory_number.value,
        status_id: conference_room_av_equipment_status.value,
        delivery_date: conference_room_av_equipment_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: conference_room_av_equipment_deployment_date.value?.toISOString().split('T')[0],

        name: conference_room_av_equipment_name.value,
        ip_address: conference_room_av_equipment_ip_address.value,
        mac_address: conference_room_av_equipment_mac_address.value,
    }

    for (const key in cr_equipment) {
        if (cr_equipment[key] === undefined) {
            cr_equipment[key] = null;
        }
    }

    try {
        const response = await axios.post('http://localhost:8000/add-crav-equipment/', cr_equipment);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}
</script>