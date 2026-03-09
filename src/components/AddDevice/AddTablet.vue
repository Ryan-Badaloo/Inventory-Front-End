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

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="tablet_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="tablet_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="tablet_supplier_name" labelFor="tablet_supplier_name" fieldName="Supplier Name: " v-model="tablet_supplier_name"/>

            <TextField id="tablet_device_cost" labelFor="tablet_device_cost" fieldName="Device Cost: " v-model.number="tablet_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="tablet_file_input" type="file" multiple>
                <TextLabel labelFor="tablet_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="tablet_file_input" type="file" multiple>
                <TextLabel labelFor="tablet_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- system status -->
            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_status" :class="[option_field_class]" class="bg-white" v-model.number="tablet_status">
                    <option :value=null selected class="text-blue-100"></option>
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
            <TextField id="tablet_device_size" labelFor="tablet_device_size" fieldName="Device Size: " v-model="tablet_device_size"/>

            <TextField id="tablet_operating_system" labelFor="tablet_operating_system" fieldName="Operating System: " v-model="tablet_operating_system"/>

            <TextField id="tablet_imei_number" labelFor="tablet_imei_number" fieldName="IMEI Number: " v-model="tablet_imei_number"/>

            <TextField id="tablet_version" labelFor="tablet_version" fieldName="Version: " v-model="tablet_version"/>

        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_parish" :class="[option_field_class]" class="bg-white" v-model.number="tablet_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="tablet_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_location_type" :class="[option_field_class]" class="bg-white" v-model.number="tablet_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="tablet_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_location" :class="[option_field_class]" class="bg-white" v-model.number="tablet_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="tablet_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_division" :class="[option_field_class]" class="bg-white" v-model.number="tablet_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="tablet_division" fieldName="Division" />
            </div>
        </div>
        
        <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: "/>

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

    if (tablet_location.value) {
        locationChange(tablet_location.value)
    } else if (tablet_parish.value) {
        parishChange(tablet_parish.value)
    }
    
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "hard_disk_capacity", "memory_capacity", "warranty_start_date",
  "warranty_end_date", "returned_date", "device_size",
  "operating_system", "imei_number", "version", "parish", "location_type",
  "location", "division", "comment"
];

const tabletRefs = {};

fieldNames.forEach(name => {
    const key = `tablet_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* tabletRefs[key] = ref(saved || null); */
    tabletRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(tabletRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
tablet_brand,
tablet_model,
tablet_serial_number,
tablet_inventory_number,
tablet_delivery_date,
tablet_deployment_date,
tablet_bos_date, 
tablet_supplier_name,
tablet_device_cost, 
tablet_status,
tablet_hard_disk_capacity,
tablet_memory_capacity,
tablet_warranty_start_date,
tablet_warranty_end_date,
tablet_returned_date,
tablet_device_size,
tablet_operating_system,
tablet_imei_number,
tablet_version,

tablet_division,
tablet_location,
tablet_location_type,
tablet_parish,
} = tabletRefs;

async function parishChange(parishValue) {
    if (tablet_location.value == null || !tablet_location.value) {

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
    if (tablet_location.value != null) {

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

        console.log(tablet_parish.value)
        divisions.value = await getParishDivisions(tablet_parish.value);
        console.log(divisions.value);
    }
}

watch (
    tablet_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", tablet_parish.value, "type:", typeof tablet_parish.value);
        console.log("location value:", tablet_location.value, "type:", typeof tablet_location.value);

        parishChange(newParish)
    }
)

watch (
    tablet_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", tablet_parish.value)
        console.log("Divisions:", tablet_division.value)

        console.log("location value:", tablet_location.value);
        locationChange(newLocation)
        
    }
)

function resetTabletForm() {
  Object.keys(tabletRefs).forEach(key => {
    tabletRefs[key].value = null;
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
        inventory_number: tablet_inventory_number.value,
        delivery_date: formatDate(tablet_delivery_date.value),
        deployment_date: formatDate(tablet_deployment_date.value),
        bos_date: formatDate(tablet_bos_date.value),
        supplier_name: tablet_supplier_name.value,
        device_cost: Number(tablet_device_cost.value),
        status_id: tablet_status.value,
        hard_disk_capacity: tablet_hard_disk_capacity.value,
        memory_capacity: tablet_memory_capacity.value,
        warranty_start_date: formatDate(tablet_warranty_start_date.value),
        warranty_end_date: formatDate(tablet_warranty_end_date.value),
        return_date: formatDate(tablet_returned_date.value),
        device_size: tablet_device_size.value,
        operating_system: tablet_operating_system.value,
        imei_number: tablet_imei_number.value,
        version: tablet_version.value,
    }
    console.log("read values into tablet")

    for (const key in tablet) {
        if (tablet[key] === undefined || tablet[key] === "") {
            tablet[key] = null;
        }
    }

    if (tablet.delivery_date > tablet.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (tablet.return_date < tablet.deployment_date) {
        alert("Return Date must be larger than Deployment Date")
    } else if (tablet.delivery_date < tablet.manufactured_date || tablet.deployment_date < tablet.manufactured_date || tablet.bos_date < tablet.manufactured_date) {
        alert("Device cannot be Delivered, Deployed, or BOS before Manufactured Date")
    } else if (!tablet.serial_number || !tablet.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else if (!Number.isInteger(tablet.device_cost)){
        console.log("Device Cost:", tablet_device_cost.value, "type:", typeof tablet_device_cost.value)
        alert("Device cost must be an integer")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-tablet/`, tablet, {
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