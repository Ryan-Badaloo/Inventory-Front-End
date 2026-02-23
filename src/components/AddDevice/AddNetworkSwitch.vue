<template>
<AddTemplate templateName="Network Switch">
    <form @submit.prevent="addNetworkSwitch()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="network_switch_brand" labelFor="network_switch_brand" fieldName="Brand: " v-model="network_switch_brand"/>

            <TextField id="network_switch_model" labelFor="network_switch_model" fieldName="Model: " v-model="network_switch_model"/>

            <TextField id="network_switch_serial_number" labelFor="network_switch_serial_number" fieldName="Serial Number: " v-model="network_switch_serial_number"/>

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
                <select id="network_switch_status" :class="[option_field_class]" class="bg-white" v-model.number="network_switch_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="network_switch_status" fieldName="System Status: "/>
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
            <TextField id="network_switch_mac_address" labelFor="network_switch_mac_address" fieldName="Mac Address: " v-model="network_switch_mac_address"/>

            <TextField id="network_switch_number_ports" labelFor="network_switch_number_ports" fieldName="Number Of Ports: " v-model="network_switch_number_ports"/>

            <TextField id="network_switch_device_size" labelFor="network_switch_device_size" fieldName="Device Size: " v-model="network_switch_device_size"/>

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
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="network_switch_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_location_type" :class="[option_field_class]" class="bg-white" v-model="network_switch_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="network_switch_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_location" :class="[option_field_class]" class="bg-white" v-model="network_switch_location">
                    <option selected class="text-blue-100">Choose a location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="network_switch_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="network_switch_division" :class="[option_field_class]" class="bg-white" v-model="network_switch_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="network_switch_division" fieldName="Division" />
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

import { getStatuses, getCPUTypes, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';



</script>