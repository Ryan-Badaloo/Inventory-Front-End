<template>
<AddTemplate templateName="Server">
    <form @submit.prevent="addServer()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="server_brand" labelFor="server_brand" fieldName="Brand: " v-model="server_brand"/>

            <TextField id="server_model" labelFor="server_model" fieldName="Model: " v-model="server_model"/>

            <TextField id="server_serial_number" labelFor="server_serial_number" fieldName="Serial Number: " v-model="server_serial_number"/>

            <TextField id="server_inventory_number" labelFor="server_inventory_number" fieldName="Inventory Number: " v-model="server_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="server_supplier_name" labelFor="server_supplier_name" fieldName="Supplier Name: " v-model="server_supplier_name"/>

            <TextField id="server_device_cost" labelFor="server_device_cost" fieldName="Device Cost: " v-model="server_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="server_file_input" type="file" multiple>
                <TextLabel labelFor="server_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="server_file_input" type="file" multiple>
                <TextLabel labelFor="server_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_status" :class="[option_field_class]" class="bg-white" v-model.number="server_status">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="server_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="server_hard_disk_capacity" labelFor="server_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="server_hard_disk_capacity"/>

            <TextField id="server_memory_capacity" labelFor="server_memory_capacity" fieldName="Memory Capacity: " v-model="server_memory_capacity"/>

            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="server_mac_address" labelFor="server_mac_address" fieldName="Mac Address: " v-model="server_mac_address"/>
        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="server_manufactured_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="server_manufactured_date" fieldName="Manufactured Date: "/>
            </div>

            <TextField id="server_memory_type" labelFor="server_memory_type" fieldName="Memory Type: " v-model="server_memory_type"/>


            <TextField id="server_operating_system" labelFor="server_operating_system" fieldName="Operating System: " v-model="server_operating_system"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_cpu_type" :class="[option_field_class]" class="bg-white" v-model="server_cpu_type">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                </select>
                <TextLabel labelFor="server_cpu_type" fieldName="CPU Type:" />
            </div>

            <TextField id="server_processor_speed" labelFor="server_processor_speed" fieldName="Processor Speed: " v-model="server_processor_speed"/>

            <TextField id="server_processor_type" labelFor="server_processor_type" fieldName="Processor Type: " v-model="server_processor_type"/>

            <TextField id="server_computer_name" labelFor="server_computer_name" fieldName="Computer Name: " v-model="server_computer_name"/>

            <TextField id="server_ms_office_version" labelFor="server_ms_office_version" fieldName="MS Office Version: " v-model="server_ms_office_version"/>

            <TextField id="server_antivirus" labelFor="server_antivirus" fieldName="Antivirus: " v-model="server_antivirus"/>

        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_form_factor" :class="[option_field_class]" class="bg-white" v-model.number="server_form_factor">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="form_factor in form_factors" :key="form_factor.form_factor_id" :value=form_factor.form_factor_id class="text-black">{{ form_factor.form_factor_description }}</option>
                </select>
                <TextLabel labelFor="server_form_factor" fieldName="Device Form Factor" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_raid_type" :class="[option_field_class]" class="bg-white" v-model.number="server_raid_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="raid_type in raid_types" :key="raid_type.raid_type_id" :value=raid_type.raid_type_id class="text-black">{{ raid_type.raid_type_description }}</option>
                </select>
                <TextLabel labelFor="server_raid_type" fieldName="Device Raid Type" />
            </div>

            <TextField id="server_number_hard_drive" labelFor="server_number_hard_drive" fieldName="Number Of Hard Drives: " v-model="server_number_hard_drive"/>

            <TextField id="server_number_power_supply" labelFor="server_number_power_supply" fieldName="Number Of Power Supply: " v-model="server_number_power_supply"/>

        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_parish" :class="[option_field_class]" class="bg-white" v-model.number="server_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="server_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_location_type" :class="[option_field_class]" class="bg-white" v-model.number="server_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="server_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_location" :class="[option_field_class]" class="bg-white" v-model.number="server_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="server_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_division" :class="[option_field_class]" class="bg-white" v-model.number="server_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="server_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="server_comment" labelFor="server_comment" fieldName="Comment: " v-model="server_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetServerForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getCPUTypes, getFormFactors, getRaidTypes, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const cpu_types = ref([])
const form_factors = ref([])
const raid_types = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    cpu_types.value = await getCPUTypes();

    form_factors.value = await getFormFactors();

    raid_types.value = await getRaidTypes();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (server_location.value) {
        locationChange(server_location.value)
    } else if (server_parish.value) {
        parishChange(server_parish.value)
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
  "antivirus", "form_factor", "raid_type", "number_hard_drive", "number_power_supply", "parish", "location_type",
  "location", "division", "comment"
];

const serverRefs = {};

fieldNames.forEach(name => {
    const key = `server_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* serverRefs[key] = ref(saved || null); */
    serverRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(serverRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
    server_brand,
    server_model,
    server_serial_number,
    server_inventory_number,
    server_delivery_date,
    server_deployment_date,
    server_bos_date,
    server_supplier_name,
    server_device_cost,
    server_status,
    server_hard_disk_capacity,
    server_memory_capacity,
    server_warranty_start_date,
    server_warranty_end_date,
    server_returned_date,
    server_mac_address,
    server_manufactured_date,
    server_memory_type,
    server_operating_system,
    server_cpu_type,
    server_processor_speed,
    server_processor_type,
    server_computer_name,
    server_ms_office_version,
    server_antivirus,
    server_form_factor,
    server_raid_type,
    server_number_hard_drive,
    server_number_power_supply,

    server_parish,
    server_location_type,
    server_location,
    server_division,
    server_comment,
} = serverRefs;

async function parishChange(parishValue) {
    if (server_location.value == null || !server_location.value) {

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
    if (server_location.value != null) {

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

        console.log(server_parish.value)
        divisions.value = await getParishDivisions(server_parish.value);
        console.log(divisions.value);
    }
}

watch (
    server_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", server_parish.value, "type:", typeof server_parish.value);
        console.log("location value:", server_location.value, "type:", typeof server_location.value);

        parishChange(newParish)
    }
)

watch (
    server_location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", server_parish.value)
        console.log("Divisions:", server_division.value)

        console.log("location value:", server_location.value);
        locationChange(newLocation)
        
    }
)

function resetServerForm() {
    Object.keys(serverRefs).forEach(key => {
        serverRefs[key].value = null;
        localStorage.removeItem(`${key}_val`);
    });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function addServer() {
    console.log("Started the function")
    const server = {
        category: "Server",
        brand: server_brand.value,
        model: server_model.value,
        serial_number: server_serial_number.value,
        inventory_number: server_inventory_number.value,
        delivery_date: formatDate(server_delivery_date.value),
        deployment_date: formatDate(server_deployment_date.value),
        bos_date: formatDate(server_bos_date.value),
        supplier_name: server_supplier_name.value,
        device_cost: Number(server_device_cost.value),
        status_id: server_status.value,
        hard_disk_capacity: server_hard_disk_capacity.value,
        memory_capacity: server_memory_capacity.value,
        warranty_start_date: formatDate(server_warranty_start_date.value),
        warranty_end_date: formatDate(server_warranty_end_date.value),
        return_date: formatDate(server_returned_date.value),
        mac_address: server_mac_address.value,
        manufactured_date: formatDate(server_manufactured_date.value),
        memory_type: server_memory_type.value,
        operating_system: server_operating_system.value,
        cpu_type_id: server_cpu_type.value,
        processor_speed: server_processor_speed.value,
        processor_type: server_processor_type.value,
        computer_name: server_computer_name.value,
        microsoft_office_version: server_ms_office_version.value,
        antivirus: server_antivirus.value,
        form_factor_id: server_form_factor.value,
        raid_type_id: server_raid_type.value,
        number_of_hard_drives: Number(server_number_hard_drive.value),
        number_of_power_supplies: Number(server_number_power_supply.value),
        
        parish_id: server_parish.value,
        location_type_id: server_location_type.value,
        location_id: server_location.value,
        division_id: server_division.value,
        comment: server_comment.value,
    }
    console.log("read values into server")

    for (const key in server) {
        if (server[key] === undefined || server[key] === "") {
            server[key] = null;
        }
    }

    

    if (server.delivery_date > server.deployment_date) {
        alert("Deployment Date must be larger than Delivery Date")
    } else if (server.return_date < server.deployment_date) {
        alert("Return Date must be larger than Deployment Date")
    } else if (server.delivery_date < server.manufactured_date || server.deployment_date < server.manufactured_date || server.bos_date < server.manufactured_date) {
        alert("Device cannot be Delivered, Deployed, or BOS before Manufactured Date")
    } else if (!server.serial_number || !server.inventory_number) {
        alert("Serial Number and Inventory Number are required.")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-server/`, server, {
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