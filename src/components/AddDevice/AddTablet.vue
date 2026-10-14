<template>
<AddTemplate templateName="Tablet">
    <form @submit.prevent="addTablet()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_brand" labelFor="tablet_brand" fieldName="Brand: " v-model="tablet_brand" :required="true"/>

            <TextField id="tablet_model" labelFor="tablet_model" fieldName="Model: " v-model="tablet_model" :required="true"/>

            <TextField id="tablet_serial_number" labelFor="tablet_serial_number" fieldName="Serial Number: " v-model="tablet_serial_number" :required="true"/>

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
                <select id="tablet_status" :class="[option_field_class]" class="bg-white" v-model.number="tablet_status" :required="true">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
                </select>
                <TextLabel labelFor="tablet_status" fieldName="System Status: " :required="true"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_hard_disk_capacity" labelFor="tablet_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="tablet_hard_disk_capacity" :required="true"/>

            <TextField id="tablet_memory_capacity" labelFor="tablet_memory_capacity" fieldName="Memory Capacity: " v-model="tablet_memory_capacity" :required="true"/>

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
            <TextField id="tablet_device_size" labelFor="tablet_device_size" fieldName="Device Size: " v-model="tablet_device_size" :required="true"/>

            <TextField id="tablet_operating_system" labelFor="tablet_operating_system" fieldName="Operating System: " v-model="tablet_operating_system" :required="true"/>

            <TextField id="tablet_imei_number" labelFor="tablet_imei_number" fieldName="IMEI Number: " v-model="tablet_imei_number" :required="true"/>

            <TextField id="tablet_version" labelFor="tablet_version" fieldName="Version: " v-model="tablet_version" :required="true"/>

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

            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_branch" :class="[option_field_class]" class="bg-white" v-model.number="tablet_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="tablet_branch" fieldName="Branch" />
            </div>
        </div>
        
        <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: " v-model="tablet_comment"/>

        <button @click="illuminateBag()" type="button" class="content-center w-1/8 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
            Add Case/Bag
        </button>

        <!-- Add Case/Bag -->
        <div v-if="showBag">
            <div class="grid grid-cols-2 gap-x-6">
                <div class="flex flex-row-reverse mb-6 group">
                    <select id="tablet_bag_type" :class="[option_field_class]" class="bg-white" v-model.number="tablet_bag_type">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="type in bag_types" :key="type.bag_type_id" :value=type.bag_type_id class="text-black">{{ type.bag_type_description }}</option>
                    </select>
                    <TextLabel labelFor="tablet_bag_type" fieldName="Type:" />
                </div>

                <TextField id="tablet_bag_brand" labelFor="tablet_bag_brand" fieldName="Brand: " v-model="tablet_bag_brand"/>

                <TextField id="tablet_bag_model" labelFor="tablet_bag_model" fieldName="Model: " v-model="tablet_bag_model"/>

                <TextField id="tablet_bag_ministry_number" labelFor="tablet_bag_ministry_number" fieldName="Ministry Number: " v-model="tablet_bag_ministry_number"/>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_bag_delivery_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_bag_delivery_date" fieldName="Delivery Date: "/>
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_bag_assignment_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_bag_assignment_date" fieldName="Assignment Date: "/>
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <select id="tablet_bag_status" :class="[option_field_class]" class="bg-white" v-model.number="tablet_bag_status">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="bag_status in statuses" :key="bag_status.status_id" :value=bag_status.status_id class="text-black">{{ bag_status.status_description }}</option>
                    </select>
                    <TextLabel labelFor="tablet_bag_status" fieldName="Status" />
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_bag_bos_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_bag_bos_date" fieldName="BOS Date: "/>
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <select id="tablet_bag_fabric_type" :class="[option_field_class]" class="bg-white" v-model.number="tablet_bag_fabric_type">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="fabric_type in fabric_types" :key="fabric_type.bag_fabric_type_id" :value=fabric_type.bag_fabric_type_id class="text-black">{{ fabric_type.bag_fabric_type_description }}</option>
                    </select>
                    <TextLabel labelFor="tablet_bag_fabric_type" fieldName="Fabric Type:" />
                </div>

            </div>
        </div>
        
        <br>

        <button @click="illuminateAdapter()" type="button" class="content-center w-1/8 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
            Add Adapter
        </button>

        <!-- Add Case/Bag -->
        <div v-if="showAdapter">
            <div class="grid grid-cols-2 gap-x-6">

                <TextField id="tablet_adapter_serial_number" labelFor="tablet_adapter_serial_number" fieldName="Serial Number: " v-model="tablet_adapter_serial_number"/>

                <TextField id="tablet_adapter_brand" labelFor="tablet_adapter_brand" fieldName="Brand: " v-model="tablet_adapter_brand"/>

                <TextField id="tablet_adapter_model" labelFor="tablet_adapter_model" fieldName="Model: " v-model="tablet_adapter_model"/>

                <TextField id="tablet_adapter_ministry_number" labelFor="tablet_adapter_ministry_number" fieldName="Ministry Number: " v-model="tablet_adapter_ministry_number"/>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_adapter_delivery_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_adapter_delivery_date" fieldName="Delivery Date: "/>
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_adapter_assignment_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_adapter_assignment_date" fieldName="Assignment Date: "/>
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <select id="tablet_adapter_status" :class="[option_field_class]" class="bg-white" v-model.number="tablet_adapter_status">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="adapter_status in statuses" :key="adapter_status.status_id" :value=adapter_status.status_id class="text-black">{{ adapter_status.status_description }}</option>
                    </select>
                    <TextLabel labelFor="tablet_adapter_status" fieldName="Status" />
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="tablet_adapter_bos_date" 
                        :enable-time-picker="false" 
                        :input-class-name="'p-0 bg-green-500'"
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="tablet_adapter_bos_date" fieldName="BOS Date: "/>
                </div>

            </div>
        </div>

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


import { getBagTypes, getBagFabricTypes, getStatuses, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getBranches, getDivisionBranches } from '@/utils/descriptions';

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
const bag_types = ref([])
const fabric_types = ref([])
const showBag = ref(false)
const showAdapter = ref(false)

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    bag_types.value = await getBagTypes();

    fabric_types.value = await getBagFabricTypes();

    if (tablet_parish.value) {
        parishChange(tablet_parish.value)
    }

    if (tablet_division.value) {
        divisionChange(tablet_division.value)
    }
    
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

console.log("Bag Types: ",bag_types.value)

const fieldNames = [
  "brand", "model", "serial_number", "inventory_number",
  "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
  "hard_disk_capacity", "memory_capacity", "warranty_start_date",
  "warranty_end_date", "returned_date", "device_size",
  "operating_system", "imei_number", "version", "parish", "location_type",
  "location", "division", "branch", "comment", 
  "bag_type", "bag_brand", "bag_model", "bag_ministry_number", "bag_fabric_type", "bag_delivery_date", 
  "bag_assignment_date", "bag_status", "bag_bos_date",
  "adapter_serial_number", "adapter_brand", "adapter_model", "adapter_ministry_number", "adapter_delivery_date",
  "adapter_assignment_date", "adapter_status", "adapter_bos_date", 

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


tablet_parish,
tablet_location_type,
tablet_location,
tablet_division,
tablet_branch,
tablet_comment,

tablet_bag_type,
tablet_bag_brand,
tablet_bag_model,
tablet_bag_ministry_number,
tablet_bag_fabric_type,
tablet_bag_delivery_date,
tablet_bag_assignment_date,
tablet_bag_status,
tablet_bag_bos_date,

tablet_adapter_serial_number,
tablet_adapter_brand,
tablet_adapter_model,
tablet_adapter_ministry_number,
tablet_adapter_delivery_date,
tablet_adapter_assignment_date,
tablet_adapter_status,
tablet_adapter_bos_date,


} = tabletRefs;

async function parishChange(parishValue) {
    if (tablet_location.value == null || !tablet_location.value) {

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
    if (tablet_branch.value == null || !tablet_branch.value) {

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
    tablet_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", tablet_parish.value, "type:", typeof tablet_parish.value);
        console.log("location value:", tablet_location.value, "type:", typeof tablet_location.value);

        parishChange(newParish)
    }
)

watch (
    tablet_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", tablet_division.value, "type:", typeof tablet_division.value);
        console.log("Branch value:", tablet_branch.value, "type:", typeof tablet_branch.value);

        divisionChange(newDivision)
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

        parish_id: tablet_parish.value,
        ltype_id: tablet_location_type.value,
        location_id: tablet_location.value,
        division_id: tablet_division.value,
        branch_id: tablet_branch.value,
        comment: tablet_comment.value,
        
    }

    const bag = showBag.value ? {
        bag_type_id: tablet_bag_type.value,
        bag_brand: tablet_bag_brand.value,
        bag_model: tablet_bag_model.value,
        bag_ministry_number: tablet_bag_ministry_number.value,
        bag_fabric_type_id: tablet_bag_fabric_type.value,
        bag_delivery_date: formatDate(tablet_bag_delivery_date.value),
        bag_assignment_date: formatDate(tablet_bag_assignment_date.value),
        bag_status_id: tablet_bag_status.value,
        bag_bos_date: formatDate(tablet_bag_bos_date.value),
    } : null;

    const adapter = showAdapter.value ? {
        adapter_serial_number: tablet_adapter_serial_number.value,
        adapter_brand: tablet_adapter_brand.value,
        adapter_model: tablet_adapter_model.value,
        adapter_ministry_number: tablet_adapter_ministry_number.value,
        adapter_delivery_date: formatDate(tablet_adapter_delivery_date.value),
        adapter_assignment_date: formatDate(tablet_adapter_assignment_date.value),
        adapter_status_id: tablet_adapter_status.value,
        adapter_bos_date: formatDate(tablet_adapter_bos_date.value),
    } : null;


    for (const key in tablet) {
        if (tablet[key] === undefined || tablet[key] === "") {
            tablet[key] = null;
        }
    }

    if (bag) {
        for (const key in bag) {
            if (bag[key] === undefined || bag[key] === "") {
                bag[key] = null;
            }
        }
    }

    if (adapter) {
        for (const key in adapter) {
            if (adapter[key] === undefined || adapter[key] === "") {
                adapter[key] = null;
            }
        }
    }

    if (tablet.delivery_date > tablet.deployment_date) {
        alert("Deployment Date must be earlier than Delivery Date")
    } else if (tablet.return_date > tablet.bos_date) {
        alert("Return Date must be earlier than BOS Date")
    } else if (tablet.delivery_date > tablet.return_date) {
        alert("Delivery Date must be earlier than Return Date")
    } else if (tablet.warranty_start_date > tablet.warranty_end_date) {
        alert("Warranty Start Date must be earlier than Warranty End Date")
    } else {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${useBaseURLComposable()}add-tablet/`, 
            {
                tablet: tablet,
                bag: bag,
                adapter: adapter,
            },
            {
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

async function illuminateBag() {
    console.log(showBag.value)
    if (showBag.value == false) {
        showBag.value = true
    } else if (showBag.value == true) {
        showBag.value = false
    }
}

async function illuminateAdapter() {
    console.log(showAdapter.value)
    if (showAdapter.value == false) {
        showAdapter.value = true
    } else if (showAdapter.value == true) {
        showAdapter.value = false
    }
}

</script>