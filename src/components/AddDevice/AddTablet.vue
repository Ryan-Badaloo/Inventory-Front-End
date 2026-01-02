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
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
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

            <!-- <div class="flex flex-row-reverse mb-6 group">
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
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_division" :class="[option_field_class]" class="bg-white" v-model="tablet_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="tablet_division" fieldName="Division" />
            </div>
        </div>
        
        <!-- <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: "/> -->

        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetTabletForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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


import { getStatuses, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
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

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "status",
  "hard_disk_capacity", "memory_capacity", "warranty_start_date",
  "warranty_end_date", "returned_date",
  "operating_system", "imei_number", "version", "parish", "location_type",
  "location", "division", "comment"
];

const tabletRefs = {};

fieldNames.forEach(name => {
  const key = `tablet_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  tabletRefs[key] = ref(saved || "");

watch(tabletRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
tablet_brand,
tablet_model,
tablet_serial_number,
tablet_inventory_number,
tablet_delivery_date,
tablet_deployment_date,
tablet_status,
tablet_warranty_start_date,
tablet_warranty_end_date,
tablet_returned_date,
tablet_operating_system,
tablet_imei_number,
tablet_version,
tablet_division,
tablet_hard_disk_capacity,
tablet_memory_capacity,

tablet_location,
tablet_location_type,
tablet_parish,
} = tabletRefs;

function resetTabletForm() {
  Object.keys(tabletRefs).forEach(key => {
    tabletRefs[key].value = "";
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

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
        warranty_start_date: formatDate(tablet_warranty_start_date.value),
        warranty_end_date: formatDate(tablet_warranty_end_date.value),
        delivery_date: formatDate(tablet_delivery_date.value),
        deployment_date: formatDate(tablet_deployment_date.value),
        return_date: formatDate(tablet_returned_date.value),
        status_id: tablet_status.value,
    }

    for (const key in tablet) {
        if (tablet[key] === undefined || tablet[key] === "") {
            tablet[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:8000/add-tablet/', tablet, {
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