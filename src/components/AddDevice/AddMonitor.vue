<template>
<AddTemplate templateName="Monitor">
    <form @submit.prevent="addMonitor()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="monitor_brand" labelFor="monitor_brand" fieldName="Brand: " v-model="monitor_brand" :required="true"/>

            <TextField id="monitor_model" labelFor="monitor_model" fieldName="Model: " v-model="monitor_model" :required="true"/>

            <TextField id="monitor_serial_number" labelFor="monitor_serial_number" fieldName="Serial Number: " v-model="monitor_serial_number" :required="true"/>

            <TextField id="monitor_inventory_number" labelFor="monitor_inventory_number" fieldName="Inventory Number: " v-model="monitor_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="monitor_supplier_name" labelFor="monitor_supplier_name" fieldName="Supplier Name: " v-model="monitor_supplier_name"/>

            <TextField id="monitor_device_cost" labelFor="monitor_device_cost" fieldName="Device Cost: " v-model="monitor_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="monitor_file_input" type="file" multiple>
                <TextLabel labelFor="monitor_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="monitor_file_input" type="file" multiple>
                <TextLabel labelFor="monitor_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_status" :class="[option_field_class]" class="bg-white" v-model.number="monitor_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="monitor_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="monitor_manufactured_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="monitor_manufactured_date" fieldName="Manufactured Date: "/>
            </div>

            <TextField id="monitor_size" labelFor="monitor_size" fieldName="Monitor Size: " v-model="monitor_size" :required="true"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_type" :class="[option_field_class]" class="bg-white" v-model.number="monitor_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="monitor_type in monitor_types" :key="monitor_type.monitor_type_id" :value=monitor_type.monitor_type_id class="text-black">{{ monitor_type.monitor_type_description }}</option>

                </select>
                <TextLabel labelFor="monitor_type" fieldName="Monitor Type: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_function" :class="[option_field_class]" class="bg-white" v-model.number="monitor_function" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="monitor_function in monitor_functions" :key="monitor_function.monitor_function_id" :value=monitor_function.monitor_function_id class="text-black">{{ monitor_function.monitor_function_description }}</option>

                </select>
                <TextLabel labelFor="monitor_function" fieldName="Monitor Function: " :required="true"/>
            </div>
        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_parish" :class="[option_field_class]" class="bg-white" v-model="monitor_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="monitor_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_location_type" :class="[option_field_class]" class="bg-white" v-model="monitor_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="monitor_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_location" :class="[option_field_class]" class="bg-white" v-model="monitor_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="monitor_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_division" :class="[option_field_class]" class="bg-white" v-model="monitor_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="monitor_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="monitor_branch" :class="[option_field_class]" class="bg-white" v-model.number="monitor_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="monitor_branch" fieldName="Branch" />
            </div>
        </div>

        <CommentField id="monitor_comment" labelFor="monitor_comment" fieldName="Comment: " v-model="monitor_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetMonitorForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getMonitorTypes, getMonitorFunctions, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const branches = ref([])
const statuses = ref([])
const monitor_types = ref([])
const monitor_functions = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    monitor_types.value = await getMonitorTypes();

    monitor_functions.value = await getMonitorFunctions();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (monitor_location.value) {
        locationChange(monitor_location.value)
    } else if (monitor_parish.value) {
        parishChange(monitor_parish.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "warranty_start_date", "warranty_end_date", "returned_date",
  "manufactured_date", "size", "type", "function",
  "parish", "location_type", "location", 
  "division", "branch", "physical_location", "comment"
];

const monitorRefs = {};

fieldNames.forEach(name => {
    const key = `monitor_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* monitorRefs[key] = ref(saved || null); */
    monitorRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(monitorRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    monitor_brand,
    monitor_model, 
    monitor_serial_number,
    monitor_inventory_number,
    monitor_delivery_date,
    monitor_deployment_date,
    monitor_bos_date,
    monitor_supplier_name,
    monitor_device_cost,
    monitor_status,
    monitor_warranty_start_date,
    monitor_warranty_end_date,
    monitor_returned_date,
    
    monitor_manufactured_date,
    monitor_size,
    monitor_type,
    monitor_function,

    monitor_parish,
    monitor_location_type,
    monitor_location,
    monitor_division,
    monitor_branch,
    monitor_comment,
} = monitorRefs;

async function parishChange(parishValue) {
    if (monitor_location.value == null || !monitor_location.value) {

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
    if (monitor_branch.value == null || !monitor_branch.value) {

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
    monitor_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", monitor_parish.value, "type:", typeof monitor_parish.value);
        console.log("location value:", monitor_location.value, "type:", typeof monitor_location.value);

        parishChange(newParish)
    }
)

watch (
    monitor_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", monitor_division.value, "type:", typeof monitor_division.value);
        console.log("Branch value:", monitor_branch.value, "type:", typeof monitor_branch.value);

        divisionChange(newDivision)
    }
)

function resetUPSForm() {
  Object.keys(monitorRefs).forEach(key => {
    monitorRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addMonitor() {
    const monitor = {
        category: "Monitor",
        brand: monitor_brand.value,
        model: monitor_model.value,
        serial_number: monitor_serial_number.value,
        inventory_number: monitor_inventory_number.value,
        delivery_date: formatDate(monitor_delivery_date.value),
        deployment_date: formatDate(monitor_deployment_date.value),
        bos_date: formatDate(monitor_bos_date.value),
        supplier_name: monitor_supplier_name.value,
        device_cost: Number(monitor_device_cost.value),
        status_id: monitor_status.value,

        warranty_start_date: formatDate(monitor_warranty_start_date.value),
        warranty_end_date: formatDate(monitor_warranty_end_date.value),
        return_date: formatDate(monitor_returned_date.value),
        
        manufactured_date: formatDate(monitor_manufactured_date.value),
        monitor_size: monitor_size.value,
        monitor_type_id: monitor_type.value,
        monitor_function_id: monitor_function.value,

        parish_id: monitor_parish.value,
        ltype_id: monitor_location_type.value,
        location_id: monitor_location.value,
        division_id: monitor_division.value,
        branch_id: monitor_branch.value,
        comment: monitor_comment.value,
    }

    for (const key in monitor) {
        if (monitor[key] === undefined) {
            monitor[key] = null;
        }
    }

    if (monitor.delivery_date > monitor.deployment_date) {
        alert("Delivery Date must be earlier than Deployment Date")
    } else if (monitor.return_date > monitor.bos_date) {
        alert("Return Date must be earlier than BOS Date")
    } else if (monitor.delivery_date > monitor.return_date) {
        alert("Delivery Date must be earlier than Return Date")
    } else if (monitor.warranty_start_date > monitor.warranty_end_date) {
        alert("Warranty Start Date must be earlier than Warranty End Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-monitor/`, monitor, {
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