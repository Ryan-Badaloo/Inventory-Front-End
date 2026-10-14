<template>
<AddTemplate templateName="Printer">
    <form @submit.prevent="addPrinter()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="printer_brand" labelFor="printer_brand" fieldName="Brand: " v-model="printer_brand" :required="true"/>

            <TextField id="printer_model" labelFor="printer_model" fieldName="Model: " v-model="printer_model" :required="true"/>

            <TextField id="printer_serial_number" labelFor="printer_serial_number" fieldName="Serial Number: " v-model="printer_serial_number" :required="true"/>

            <TextField id="printer_inventory_number" labelFor="printer_inventory_number" fieldName="Inventory Number: " v-model="printer_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <!-- BOS Date date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_bos_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_bos_date" fieldName="BOS Date: "/>
            </div>

            <TextField id="printer_supplier_name" labelFor="printer_supplier_name" fieldName="Supplier Name: " v-model="printer_supplier_name"/>

            <TextField id="printer_device_cost" labelFor="printer_device_cost" fieldName="Device Cost: " v-model="printer_device_cost"/>

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="printer_file_input" type="file" multiple>
                <TextLabel labelFor="printer_file_input" fieldName="Upload File: "/>
            </div> -->

            <!-- pdf reader -->
            <!-- <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="printer_file_input" type="file" multiple>
                <TextLabel labelFor="printer_file_input" fieldName="Upload File: "/>
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_status" :class="[option_field_class]" class="bg-white" v-model.number="printer_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
                </select>
                <TextLabel labelFor="printer_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="printer_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="printer_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_features" :class="[option_field_class]" v-model.number="printer_features">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="feature in features" :key="feature.feature_id" :value=feature.feature_id class="text-black">{{ feature.feature_description }}</option>

                </select>
                <TextLabel labelFor="printer_features" fieldName="Features: "/>
            </div>

            <TextField id="printer_ip_address" labelFor="printer_ip_address" fieldName="IP Address: " v-model="printer_ip_address"/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_connection_type" :class="[option_field_class]" v-model.number="printer_connection_type" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>

                </select>
                <TextLabel labelFor="printer_connection_type" fieldName="Connection Type: " :required="true"/>
            </div>

        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_parish" :class="[option_field_class]" class="bg-white" v-model.number="printer_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="printer_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_location_type" :class="[option_field_class]" class="bg-white" v-model.number="printer_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="printer_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_location" :class="[option_field_class]" class="bg-white" v-model.number="printer_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="printer_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_division" :class="[option_field_class]" class="bg-white" v-model.number="printer_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="printer_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_branch" :class="[option_field_class]" class="bg-white" v-model.number="printer_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="printer_branch" fieldName="Branch" />
            </div>
        </div>

        <CommentField id="printer_comment" labelFor="printer_comment" fieldName="Comment: " v-model="printer_comment"/>
        
        <div class="flex justify-around">
            <AddItemButton buttonName="Add Item"/>

            <button @click="resetPrinterForm()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
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

import { getStatuses, getConnectionTypes, getPrinterFeatures, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const branches = ref([])
const statuses = ref([]);
const connection_types = ref([]);
const features = ref([]);
const divisions = ref([]);
const locations = ref([]);
const parishes = ref([]);
const locationTypes = ref([]);

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    connection_types.value = await getConnectionTypes();

    features.value = await getPrinterFeatures()

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (printer_parish.value) {
        parishChange(printer_parish.value)
    }

    if (printer_division.value) {
        divisionChange(printer_division.value)
    }


  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "returned_date",
  "features", "ip_address", "connection_type",
  "parish", "location_type", "location",
  "division", "branch", "comment"
];

const printerRefs = {};

fieldNames.forEach(name => {
  const key = `printer_${name}`;
  const saved = localStorage.getItem(`${key}_val`);
  printerRefs[key] = ref(saved || "");

  watch(printerRefs[key], val => {
    localStorage.setItem(`${key}_val`, val);
  });
});

const {
    printer_brand,
    printer_model,
    printer_serial_number,
    printer_inventory_number,
    printer_delivery_date,
    printer_deployment_date,
    printer_bos_date,
    printer_supplier_name,
    printer_device_cost,
    printer_status,
    printer_returned_date,
    printer_features,
    printer_ip_address,
    printer_connection_type,
    printer_parish,
    printer_location_type,
    printer_location,
    printer_division,
    printer_branch,
    printer_comment,
} = printerRefs;

async function parishChange(parishValue) {
    if (printer_location.value == null || !printer_location.value) {

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
    if (printer_branch.value == null || !printer_branch.value) {

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
    printer_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", printer_parish.value, "type:", typeof printer_parish.value);
        console.log("location value:", printer_location.value, "type:", typeof printer_location.value);

        parishChange(newParish)
    }
)

watch (
    printer_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", printer_division.value, "type:", typeof printer_division.value);
        console.log("Branch value:", printer_branch.value, "type:", typeof printer_branch.value);

        divisionChange(newDivision)
    }
)

function resetPrinterForm() {
  Object.keys(printerRefs).forEach(key => {
    printerRefs[key].value = null;
    localStorage.removeItem(`${key}_val`);
  });
}

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}


async function addPrinter() {
    const printer = {
        category: "Printer",
        division_id: printer_division.value,
        brand: printer_brand.value,
        model: printer_model.value,
        serial_number: printer_serial_number.value,
        inventory_number: printer_inventory_number.value,
        delivery_date: formatDate(printer_delivery_date.value),
        deployment_date: formatDate(printer_deployment_date.value),
        bos_date: formatDate(printer_bos_date.value),
        supplier_name: printer_supplier_name.value,
        device_cost: Number(printer_device_cost.value),
        status_id: printer_status.value,

        return_date: formatDate(printer_returned_date.value),
        ip_address: printer_ip_address.value,
        feature_id: printer_features.value,
        connection_type_id: printer_connection_type.value,

        parish_id: printer_parish.value,
        ltype_id: printer_location_type.value,
        location_id: printer_location.value,
        division_id: printer_division.value,
        branch_id: printer_branch.value,
        comment: printer_comment.value,
    }

    if (printer.delivery_date > printer.deployment_date) {
        alert("Deployment Date must be earlier than Delivery Date")
    } else if (printer.return_date > printer.bos_date) {
        alert("Return Date must be earlier than BOS Date")
    } else if (printer.delivery_date > printer.return_date) {
        alert("Delivery Date must be earlier than Return Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-printer/`, printer, {
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