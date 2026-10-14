<template>
<AddTemplate templateName="Network Switch">
    <form @submit.prevent="addNetworkSwitch()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="network_switch_brand" labelFor="network_switch_brand" fieldName="Brand: " v-model="network_switch_brand" :required="true"/>

            <TextField id="network_switch_model" labelFor="network_switch_model" fieldName="Model: " v-model="network_switch_model" :required="true"/>

            <TextField id="network_switch_serial_number" labelFor="network_switch_serial_number" fieldName="Serial Number: " v-model="network_switch_serial_number" :required="true"/>

            <TextField id="network_switch_inventory_number" labelFor="network_switch_inventory_number" fieldName="Inventory Number: " v-model="network_switch_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="network_switch_supplier_name" labelFor="network_switch_supplier_name" fieldName="Supplier Name: " v-model="network_switch_supplier_name"/>

            <TextField id="network_switch_device_cost" labelFor="network_switch_device_cost" fieldName="Device Cost: " v-model="network_switch_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="network_switch_file_input" type="file" multiple>
                <TextLabel labelFor="network_switch_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="network_switch_file_input" type="file" multiple>
                <TextLabel labelFor="network_switch_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_status" :class="[option_field_class]" class="bg-white" v-model.number="network_switch_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="network_switch_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">


            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="network_switch_mac_address" labelFor="network_switch_mac_address" fieldName="Mac Address: " v-model="network_switch_mac_address" :required="true"/>

            <TextField id="network_switch_number_ports" labelFor="network_switch_number_ports" fieldName="Number Of Ports: " v-model="network_switch_number_ports" :required="true"/>

            <TextField id="network_switch_device_size" labelFor="network_switch_device_size" fieldName="Device Size: " v-model="network_switch_device_size" :required="true"/>

            <TextField id="network_switch_firmware_type" labelFor="network_switch_firmware_type" fieldName="Firmware Type: " v-model="network_switch_firmware_type"/>

            <TextField id="network_switch_firmware_version" labelFor="network_switch_firmware_version" fieldName="Firmware Version: " v-model="network_switch_firmware_version"/>

            <TextField id="network_switch_device_name" labelFor="network_switch_device_name" fieldName="Device Name: " v-model="network_switch_device_name"/>

        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="network_switch_manufactured_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="network_switch_manufactured_date" fieldName="Manufactured Date: "/>
            </div>
        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_parish" :class="[option_field_class]" class="bg-white" v-model="network_switch_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel :labelFor="network_switch_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_location_type" :class="[option_field_class]" class="bg-white" v-model="network_switch_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel :labelFor="network_switch_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_location" :class="[option_field_class]" class="bg-white" v-model="network_switch_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel :labelFor="network_switch_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_division" :class="[option_field_class]" class="bg-white" v-model="network_switch_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="network_switch_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_branch" :class="[option_field_class]" class="bg-white" v-model.number="network_switch_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="network_switch_branch" fieldName="Branch" />
            </div>

            <TextField id="network_switch_physical_location" labelFor="network_switch_physical_location" fieldName="Physical Location: " v-model="network_switch_physical_location"/>

        </div>



        <CommentField id="network_switch_comment" labelFor="network_switch_comment" fieldName="Comment: " v-model="network_switch_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetNetworkSwitchForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const branches = ref([])
const statuses = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (network_switch_parish.value) {
        parishChange(network_switch_parish.value)
    }

    if (network_switch_division.value) {
        divisionChange(network_switch_division.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "warranty_start_date", "warranty_end_date", "returned_date",
  "mac_address", "number_ports", "device_size", "firmware_type", "firmware_version", "device_name", "manufactured_date",
  "parish", "location_type", "location", 
  "division", "branch", "physical_location", "comment"
];

const networkSwitchRefs = {};

fieldNames.forEach(name => {
    const key = `network_switch_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* networkSwitchRefs[key] = ref(saved || null); */
    networkSwitchRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(networkSwitchRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    network_switch_brand,
    network_switch_model, 
    network_switch_serial_number,
    network_switch_inventory_number,
    network_switch_delivery_date,
    network_switch_deployment_date,
    network_switch_bos_date,
    network_switch_supplier_name,
    network_switch_device_cost,
    network_switch_status,
    network_switch_warranty_start_date,
    network_switch_warranty_end_date,
    network_switch_returned_date,
    network_switch_mac_address,
    network_switch_number_ports,
    network_switch_device_size,
    network_switch_firmware_type,
    network_switch_firmware_version,
    network_switch_device_name,
    network_switch_manufactured_date,
    network_switch_physical_location,
    network_switch_parish,
    network_switch_location_type,
    network_switch_location,
    network_switch_division,
    network_switch_branch,
    network_switch_comment,
} = networkSwitchRefs;

async function parishChange(parishValue) {
    if (network_switch_location.value == null || !network_switch_location.value) {

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
    if (network_switch_branch.value == null || !network_switch_branch.value) {

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
    network_switch_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", network_switch_parish.value, "type:", typeof network_switch_parish.value);
        console.log("location value:", network_switch_location.value, "type:", typeof network_switch_location.value);

        parishChange(newParish)
    }
)

watch (
    network_switch_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", network_switch_division.value, "type:", typeof network_switch_division.value);
        console.log("Branch value:", network_switch_branch.value, "type:", typeof network_switch_branch.value);

        divisionChange(newDivision)
    }
)

function resetUPSForm() {
  Object.keys(networkSwitchRefs).forEach(key => {
    networkSwitchRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addNetworkSwitch() {
    const network_switch = {
        category: "Network Switch",
        brand: network_switch_brand.value,
        model: network_switch_model.value,
        serial_number: network_switch_serial_number.value,
        inventory_number: network_switch_inventory_number.value,
        delivery_date: formatDate(network_switch_delivery_date.value),
        deployment_date: formatDate(network_switch_deployment_date.value),
        bos_date: formatDate(network_switch_bos_date.value),
        supplier_name: network_switch_supplier_name.value,
        device_cost: Number(network_switch_device_cost.value),
        status_id: network_switch_status.value,

        warranty_start_date: formatDate(network_switch_warranty_start_date.value),
        warranty_end_date: formatDate(network_switch_warranty_end_date.value),
        return_date: formatDate(network_switch_returned_date.value),
        mac_address: network_switch_mac_address.value,
        number_of_ports: network_switch_number_ports.value,
        device_size: network_switch_device_size.value,
        firmware_type: network_switch_firmware_type.value,
        firmware_version: network_switch_firmware_version.value,
        device_name: network_switch_device_name.value,
        manufactured_date: formatDate(network_switch_manufactured_date.value),
        physical_location: network_switch_physical_location.value,

        parish_id: network_switch_parish.value,
        ltype_id: network_switch_location_type.value,
        location_id: network_switch_location.value,
        division_id: network_switch_division.value,
        branch_id: network_switch_branch.value,
        comment: network_switch_comment.value,
    }

    for (const key in network_switch) {
        if (network_switch[key] === undefined) {
            network_switch[key] = null;
        }
    }

    if (network_switch.delivery_date > network_switch.deployment_date) {
        alert("Delivery Date must be earlier than Deployment Date")
    } else if (network_switch.return_date > network_switch.bos_date) {
        alert("Return Date must be earlier than BOS Date")
    } else if (network_switch.delivery_date > network_switch.return_date) {
        alert("Delivery Date must be earlier than Return Date")
    } else if (network_switch.warranty_start_date > network_switch.warranty_end_date) {
        alert("Warranty Start Date must be earlier than Warranty End Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-network-switch/`, network_switch, {
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