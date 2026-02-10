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
                    <option selected class="text-blue-100">Choose a Status</option>
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
                <select id="server_form_factor" :class="[option_field_class]" class="bg-white" v-model="server_form_factor">
                    <option selected class="text-blue-100">Choose a Form Factor</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="server_form_factor" fieldName="Device Form Factor" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_raid_type" :class="[option_field_class]" class="bg-white" v-model="server_raid_type">
                    <option selected class="text-blue-100">Choose a Form Factor</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="server_raid_type" fieldName="Device Raid Type" />
            </div>

            <TextField id="server_number_hard_drive" labelFor="server_number_hard_drive" fieldName="Number Of Hard Drives: " v-model="server_number_hard_drive"/>

            <TextField id="server_number_power_supply" labelFor="server_number_power_supply" fieldName="Number Of Power Supply: " v-model="server_number_power_supply"/>

        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_parish" :class="[option_field_class]" class="bg-white" v-model="server_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="server_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_location_type" :class="[option_field_class]" class="bg-white" v-model="server_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="server_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_location" :class="[option_field_class]" class="bg-white" v-model="server_location">
                    <option selected class="text-blue-100">Choose a location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="server_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="server_division" :class="[option_field_class]" class="bg-white" v-model="server_division">
                    <option selected class="text-blue-100">Choose a Division</option>
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

import { getStatuses, getCPUTypes, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';



</script>