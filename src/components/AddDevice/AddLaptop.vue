<template>
<AddTemplate templateName="Laptop">
    <form @submit.prevent="addLaptop()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_brand" labelFor="laptop_brand" fieldName="Brand: " v-model="laptop_brand"/>

            <TextField id="laptop_model" labelFor="laptop_model" fieldName="Model: " v-model="laptop_model"/>

            <TextField id="laptop_serial_number" labelFor="laptop_serial_number" fieldName="Serial Number: " v-model="laptop_serial_number"/>

            <TextField id="laptop_inventory_number" labelFor="laptop_inventory_number" fieldName="Inventory Number: " v-model="laptop_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_status" :class="[option_field_class]" class="bg-white" v-model.number="laptop_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="laptop_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_hard_disk_capacity" labelFor="laptop_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="laptop_hard_disk_capacity"/>

            <TextField id="laptop_memory_capacity" labelFor="laptop_memory_capacity" fieldName="Memory Capacity: " v-model="laptop_memory_capacity"/>

            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_mac_address" labelFor="laptop_mac_address" fieldName="Mac Address: " v-model="laptop_mac_address"/>
        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_operating_system" labelFor="laptop_operating_system" fieldName="Operating System: " v-model="laptop_operating_system"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_cpu_type" :class="[option_field_class]" class="bg-white" v-model="laptop_cpu_type">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                </select>
                <TextLabel :labelFor="laptop_cpu_type" fieldName="CPU Type:" />
            </div>

            <TextField id="laptop_processor_speed" labelFor="laptop_processor_speed" fieldName="Processor Speed: " v-model="laptop_processor_speed"/>

            <TextField id="laptop_processor_type" labelFor="laptop_processor_type" fieldName="Processor Type: " v-model="laptop_processor_type"/>

            <TextField id="laptop_computer_name" labelFor="laptop_computer_name" fieldName="Computer Name: " v-model="laptop_computer_name"/>

            <TextField id="laptop_ms_office_version" labelFor="laptop_ms_office_version" fieldName="MS Office Version: " v-model="laptop_ms_office_version"/>

            <TextField id="laptop_antivirus" labelFor="laptop_antivirus" fieldName="Antivirus: " v-model="laptop_antivirus"/>





            <!-- pdf reader -->
            <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="laptop_file_input" type="file" multiple>
                <TextLabel labelFor="laptop_file_input" fieldName="Upload File: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_parish" :class="[option_field_class]" class="bg-white" v-model="laptop_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="laptop_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_location_type" :class="[option_field_class]" class="bg-white" v-model="laptop_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="laptop_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_location" :class="[option_field_class]" class="bg-white" v-model="laptop_location">
                    <option selected class="text-blue-100">Choose a location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="laptop_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_division" :class="[option_field_class]" class="bg-white" v-model="laptop_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="laptop_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="laptop_comment" labelFor="laptop_comment" fieldName="Comment: " v-model="laptop_comment"/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, watch } from 'vue';
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


const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "hard_disk_capacity", "memory_capacity", "warranty_start_date",
  "warranty_end_date", "returned_date", "mac_address",
  "operating_system", "cpu_type", "processor_speed",
  "processor_type", "computer_name", "ms_office_version",
  "antivirus", "file_input", "parish", "location_type",
  "location", "division", "comment"
];

const laptopRefs = {};

fieldNames.forEach(name => {
  const key = `laptop_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  laptopRefs[key] = ref(saved || "");

  watch(laptopRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
  laptop_brand,
  laptop_model,
  laptop_serial_number,
  laptop_inventory_number,
  laptop_delivery_date,
  laptop_deployment_date,
  laptop_status,
  laptop_hard_disk_capacity,
  laptop_memory_capacity,
  laptop_warranty_start_date,
  laptop_warranty_end_date,
  laptop_returned_date,
  laptop_mac_address,
  laptop_operating_system,
  laptop_cpu_type,
  laptop_processor_speed,
  laptop_processor_type,
  laptop_computer_name,
  laptop_ms_office_version,
  laptop_antivirus,
  laptop_file_input,
  laptop_parish,
  laptop_location_type,
  laptop_location,
  laptop_division,
  laptop_comment,
} = laptopRefs;

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addLaptop() {
    const laptop = {
        category: "Laptop",
        brand: laptop_brand.value,
        model: laptop_model.value,
        cpu_type_id: laptop_cpu_type.value,
        serial_number: laptop_serial_number.value,
        inventory_number: laptop_inventory_number.value,
        hard_disk_capacity: laptop_hard_disk_capacity.value,
        memory_capacity: laptop_memory_capacity.value,
        processor_speed: laptop_processor_speed.value,
        processor_type: laptop_processor_type.value,
        computer_name: laptop_computer_name.value,
        mac_address: laptop_mac_address.value,
        operating_system: laptop_operating_system.value,
        microsoft_office_version: laptop_ms_office_version.value,
        antivirus: laptop_antivirus.value,
        pdf_reader: laptop_file_input.value,
        warranty_start_date: formatDate(laptop_warranty_start_date.value),
        warranty_end_date: formatDate(laptop_warranty_end_date.value),
        delivery_date: formatDate(laptop_delivery_date.value),
        deployment_date: formatDate(laptop_deployment_date.value),
        return_date: formatDate(laptop_returned_date.value),
        division_id: laptop_division.value,
        status_id: laptop_status.value,
    }


    for (const key in laptop) {
        if (laptop[key] === undefined || laptop[key] === "") {
            laptop[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/add-laptop/', laptop, {
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