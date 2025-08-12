<template>
<AddTemplate templateName="Tablet">
    <form @submit.prevent="addTablet()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_brand" labelFor="tablet_brand" fieldName="Brand: " v-model="tablet_brand"/>

            <TextField id="tablet_model" labelFor="tablet_model" fieldName="Model: " v-model="tablet_model"/>

            <TextField id="tablet_serial_number" labelFor="tablet_serial_number" fieldName="Serial Number: " v-model="tablet_serial_number"/>

            <TextField id="tablet_inventory_number" labelFor="tablet_inventory_number" fieldName="Inventory Number: " v-model="tablet_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- system status -->
            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_status" :class="[option_field_class]" class="bg-white" v-model="tablet_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="tablet_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_hard_disk_capacity" labelFor="tablet_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="tablet_hard_disk_capacity"/>

            <TextField id="tablet_memory_capacity" labelFor="tablet_memory_capacity" fieldName="Memory Capacity: " v-model="tablet_memory_capacity"/>

            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>



        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_operating_system" labelFor="tablet_operating_system" fieldName="Operating System: " v-model="tablet_operating_system"/>

            <TextField id="tablet_imei_number" labelFor="tablet_imei_number" fieldName="IMEI Number: " v-model="tablet_imei_number"/>

            <TextField id="tablet_version" labelFor="tablet_version" fieldName="Version: " v-model="tablet_version"/>

        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_parish" :class="[option_field_class]" class="bg-white" v-model="tablet_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="tablet_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_location_type" :class="[option_field_class]" class="bg-white" v-model="tablet_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="tablet_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_location" :class="[option_field_class]" class="bg-white" v-model="tablet_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="tablet_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_division" :class="[option_field_class]" class="bg-white" v-model="tablet_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="tablet_division" fieldName="Division" />
            </div>
        </div>
        
        <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: "/>

        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';


import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const text_highlight_color = ref('text-blue-500');

const tablet_brand = ref();
const tablet_model = ref();
const tablet_serial_number = ref();
const tablet_inventory_number = ref();
const tablet_delivery_date = ref();
const tablet_deployment_date = ref();
const tablet_status = ref();
const tablet_warranty_start_date = ref();
const tablet_warranty_end_date = ref();
const tablet_returned_date = ref();
const tablet_operating_system = ref();
const tablet_imei_number = ref();
const tablet_version = ref();
const tablet_division = ref();
const tablet_hard_disk_capacity = ref();
const tablet_memory_capacity = ref();

const tablet_location = ref();
const tablet_location_type = ref();
const tablet_parish = ref();

async function addTablet() {
    const tablet = {
        category: "Tablet",
        division_id: tablet_division.value,
        brand: tablet_brand.value,
        model: tablet_model.value,
        serial_number: tablet_serial_number.value,
        imei_number: tablet_imei_number.value,
        operating_system: tablet_operating_system.value,
        version: tablet_version.value,
        inventory_number: tablet_inventory_number.value,
        hard_disk_capacity: tablet_hard_disk_capacity.value,
        memory_capacity: tablet_memory_capacity.value,
        warranty_start_date: tablet_warranty_start_date.value?.toISOString().split('T')[0],
        warranty_end_date: tablet_warranty_end_date.value?.toISOString().split('T')[0],
        delivery_date: tablet_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: tablet_deployment_date.value?.toISOString().split('T')[0],
        return_date: tablet_returned_date.value?.toISOString().split('T')[0],
        status_id: tablet_status.value,
    }

    for (const key in tablet) {
        if (tablet[key] === undefined) {
            tablet[key] = null;
        }
    }

    try {
        const response = await axios.post('http://localhost:8000/add-tablet/', tablet);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}







</script>