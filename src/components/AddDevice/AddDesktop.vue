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
                    <option selected class="text-blue-100">Choose a Status</option>
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
                    <option selected class="text-blue-100">Choose a Division</option>
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
                <select id="desktop_form_factor" :class="[option_field_class]" class="bg-white" v-model="desktop_form_factor">
                    <option selected class="text-blue-100">Choose a Form Factor</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="desktop_form_factor" fieldName="Device Form Factor" />
            </div>
        </div>


        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_parish" :class="[option_field_class]" class="bg-white" v-model="desktop_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="desktop_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_location_type" :class="[option_field_class]" class="bg-white" v-model="desktop_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="desktop_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_location" :class="[option_field_class]" class="bg-white" v-model="desktop_location">
                    <option selected class="text-blue-100">Choose a location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="desktop_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="desktop_division" :class="[option_field_class]" class="bg-white" v-model="desktop_division">
                    <option selected class="text-blue-100">Choose a Division</option>
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

import { getStatuses, getCPUTypes, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';



</script>