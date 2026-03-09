<template>
<AddTemplate templateName="Desktop">
    <form @submit.prevent="addDesktop()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="desktop_brand" labelFor="desktop_brand" fieldName="Brand: " v-model="desktop_brand"/>

            <TextField id="desktop_model" labelFor="desktop_model" fieldName="Model: " v-model="desktop_model"/>

            <TextField id="desktop_serial_number" labelFor="desktop_serial_number" fieldName="Serial Number: " v-model="desktop_serial_number"/>

            <TextField id="desktop_inventory_number" labelFor="desktop_inventory_number" fieldName="Inventory Number: " v-model="desktop_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="desktop_supplier_name" labelFor="desktop_supplier_name" fieldName="Supplier Name: " v-model="desktop_supplier_name"/>

            <TextField id="desktop_device_cost" labelFor="desktop_device_cost" fieldName="Device Cost: " v-model="desktop_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="desktop_file_input" type="file" multiple>
                <TextLabel labelFor="desktop_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="desktop_file_input" type="file" multiple>
                <TextLabel labelFor="desktop_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_status" :class="[option_field_class]" class="bg-white" v-model.number="desktop_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="desktop_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="desktop_hard_disk_capacity" labelFor="desktop_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="desktop_hard_disk_capacity"/>

            <TextField id="desktop_memory_capacity" labelFor="desktop_memory_capacity" fieldName="Memory Capacity: " v-model="desktop_memory_capacity"/>

            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="desktop_mac_address" labelFor="desktop_mac_address" fieldName="Mac Address: " v-model="desktop_mac_address"/>
        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="desktop_manufactured_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="desktop_manufactured_date" fieldName="Manufactured Date: "/>
            </div>

            <TextField id="desktop_memory_type" labelFor="desktop_memory_type" fieldName="Memory Type: " v-model="desktop_memory_type"/>


            <TextField id="desktop_operating_system" labelFor="desktop_operating_system" fieldName="Operating System: " v-model="desktop_operating_system"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_cpu_type" :class="[option_field_class]" class="bg-white" v-model="desktop_cpu_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                </select>
                <TextLabel labelFor="desktop_cpu_type" fieldName="CPU Type:" />
            </div>

            <TextField id="desktop_processor_speed" labelFor="desktop_processor_speed" fieldName="Processor Speed: " v-model="desktop_processor_speed"/>

            <TextField id="desktop_processor_type" labelFor="desktop_processor_type" fieldName="Processor Type: " v-model="desktop_processor_type"/>

            <TextField id="desktop_computer_name" labelFor="desktop_computer_name" fieldName="Computer Name: " v-model="desktop_computer_name"/>

            <TextField id="desktop_ms_office_version" labelFor="desktop_ms_office_version" fieldName="MS Office Version: " v-model="desktop_ms_office_version"/>

            <TextField id="desktop_antivirus" labelFor="desktop_antivirus" fieldName="Antivirus: " v-model="desktop_antivirus"/>

        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_form_factor" :class="[option_field_class]" class="bg-white" v-model.number="desktop_form_factor">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="form_factor in form_factors" :key="form_factor.form_factor_id" :value=form_factor.form_factor_id class="text-black">{{ form_factor.form_factor_description }}</option>
                </select>
                <TextLabel labelFor="desktop_form_factor" fieldName="Device Form Factor" />
            </div>
        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_parish" :class="[option_field_class]" class="bg-white" v-model.number="desktop_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="desktop_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_location_type" :class="[option_field_class]" class="bg-white" v-model.number="desktop_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="desktop_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_location" :class="[option_field_class]" class="bg-white" v-model.number="desktop_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="desktop_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_division" :class="[option_field_class]" class="bg-white" v-model.number="desktop_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="desktop_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="desktop_comment" labelFor="desktop_comment" fieldName="Comment: " v-model="desktop_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetDesktopForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getCPUTypes, getFormFactors, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const cpu_types = ref([])
const form_factors = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    cpu_types.value = await getCPUTypes();

    form_factors.value = await getFormFactors();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (desktop_location.value) {
        locationChange(desktop_location.value)
    } else if (desktop_parish.value) {
        parishChange(desktop_parish.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "hard_disk_capacity", "memory_capacity", "warranty_start_date",
  "warranty_end_date", "returned_date", "mac_address", "manufactured_date", "memory_type",
  "operating_system", "cpu_type", "processor_speed",
  "processor_type", "computer_name", "ms_office_version",
  "antivirus", "form_factor", "parish", "location_type",
  "location", "division", "comment"
];

const desktopRefs = {};

fieldNames.forEach(name => {
    const key = `desktop_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* desktopRefs[key] = ref(saved || null); */
    desktopRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(desktopRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
  desktop_brand,
  desktop_model,
  desktop_serial_number,
  desktop_inventory_number,
  desktop_delivery_date,
  desktop_deployment_date,
  desktop_bos_date,
  desktop_supplier_name,
  desktop_device_cost,
  desktop_status,
  desktop_hard_disk_capacity,
  desktop_memory_capacity,
  desktop_warranty_start_date,
  desktop_warranty_end_date,
  desktop_returned_date,
  desktop_mac_address,
  desktop_manufactured_date,
  desktop_memory_type,
  desktop_operating_system,
  desktop_cpu_type,
  desktop_processor_speed,
  desktop_processor_type,
  desktop_computer_name,
  desktop_ms_office_version,
  desktop_antivirus,
  desktop_form_factor,
  
  desktop_parish,
  desktop_location_type,
  desktop_location,
  desktop_division,
  desktop_comment,
} = desktopRefs;

async function parishChange(parishValue) {
    if (desktop_location.value == null || !desktop_location.value) {

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
    if (desktop_location.value != null) {

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

        console.log(desktop_parish.value)
        divisions.value = await getParishDivisions(desktop_parish.value);
        console.log(divisions.value);
    }
}

watch (
    desktop_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", desktop_parish.value, "type:", typeof desktop_parish.value);
        console.log("location value:", desktop_location.value, "type:", typeof desktop_location.value);

        parishChange(newParish)
    }
)

watch (
    desktop_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", desktop_parish.value)
        console.log("Divisions:", desktop_division.value)

        console.log("location value:", desktop_location.value);
        locationChange(newLocation)
        
    }
)

function resetDesktopForm() {
    Object.keys(desktopRefs).forEach(key => {
        desktopRefs[key].value = null;
        localStorage.removeItem(`${key}_val`);
    });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addDesktop() {
    console.log("Started the function")
    const desktop = {
        category: "Desktop",
        brand: desktop_brand.value,
        model: desktop_model.value,
        serial_number: desktop_serial_number.value,
        inventory_number: desktop_inventory_number.value,
        delivery_date: formatDate(desktop_delivery_date.value),
        deployment_date: formatDate(desktop_deployment_date.value),
        bos_date: formatDate(desktop_bos_date.value),
        supplier_name: desktop_supplier_name.value,
        device_cost: desktop_device_cost.value,
        status_id: desktop_status.value,
        hard_disk_capacity: desktop_hard_disk_capacity.value,
        memory_capacity: desktop_memory_capacity.value,
        warranty_start_date: formatDate(desktop_warranty_start_date.value),
        warranty_end_date: formatDate(desktop_warranty_end_date.value),
        return_date: formatDate(desktop_returned_date.value),
        mac_address: desktop_mac_address.value,
        manufactured_date: formatDate(desktop_manufactured_date.value),
        memory_type: desktop_memory_type.value,
        operating_system: desktop_operating_system.value,
        cpu_type_id: desktop_cpu_type.value,
        processor_speed: desktop_processor_speed.value,
        processor_type: desktop_processor_type.value,
        computer_name: desktop_computer_name.value,
        microsoft_office_version: desktop_ms_office_version.value,
        antivirus: desktop_antivirus.value,
        form_factor_id: desktop_form_factor.value,
        
        parish_id: desktop_parish.value,
        location_type_id: desktop_location_type.value,
        location_id: desktop_location.value,
        division_id: desktop_division.value,
        comment: desktop_comment.value,
    }
    console.log("read values into desktop")

    for (const key in desktop) {
        if (desktop[key] === undefined || desktop[key] === "") {
            desktop[key] = null;
        }
    }

    

    if (desktop.delivery_date > desktop.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (desktop.return_date < desktop.deployment_date) {
        alert("Return Date must be larger than Deployment Date")
    } else if (desktop.delivery_date < desktop.manufactured_date || desktop.deployment_date < desktop.manufactured_date || desktop.bos_date < desktop.manufactured_date) {
        alert("Device cannot be Delivered, Deployed, or BOS before Manufactured Date")
    } else if (!desktop.serial_number || !desktop.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-desktop/`, desktop, {
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