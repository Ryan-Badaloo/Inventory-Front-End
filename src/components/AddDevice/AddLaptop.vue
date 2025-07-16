<template>
<AddTemplate templateName="Laptop">
    <form @submit.prevent="test_function()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_brand" labelFor="laptop_brand" fieldName="Brand: "/>

            <TextField id="laptop_model" labelFor="laptop_model" fieldName="Model: "/>

            <TextField id="laptop_serial_number" labelFor="laptop_serial_number" fieldName="Serial Number: "/>

            <TextField id="laptop_inventory_number" labelFor="laptop_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="laptop_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="laptop_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_hard_disk_capacity" labelFor="laptop_hard_disk_capacity" fieldName="Hard Disk Capacity: "/>

            <TextField id="laptop_memory_capacity" labelFor="laptop_memory_capacity" fieldName="Memory Capacity: "/>

            <!-- warranty start date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_warranty_start_date" 
                    :enable-time-picker="false" 
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_warranty_start_date" fieldName="Warranty Start Date: "/>
            </div>

            <!-- warranty end date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_warranty_end_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_warranty_end_date" fieldName="Warranty End Date: "/>
            </div>

            <!-- returned date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="laptop_returned_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="laptop_returned_date" fieldName="Returned Date: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_mac_address" labelFor="laptop_mac_address" fieldName="Mac Address: "/>
        </div>


        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="laptop_operating_system" labelFor="laptop_operating_system" fieldName="Operating System: "/>

            <TextField id="laptop_cpu_type" labelFor="laptop_cpu_type" fieldName="CPU Type: "/>

            <TextField id="laptop_processor_speed" labelFor="laptop_processor_speed" fieldName="Processor Speed: "/>

            <TextField id="laptop_processor_type" labelFor="laptop_processor_type" fieldName="Processor Type: "/>

            <TextField id="laptop_computer_name" labelFor="laptop_computer_name" fieldName="Computer Name: "/>

            <TextField id="laptop_ms_office_version" labelFor="laptop_ms_office_version" fieldName="MS Office Version: "/>

            <TextField id="laptop_antivirus" labelFor="laptop_antivirus" fieldName="Antivirus: "/>





            <!-- pdf reader -->
            <div class="flex flex-row-reverse mb-6 group">
                <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="laptop_file_input" type="file" multiple>
                <TextLabel labelFor="laptop_file_input" fieldName="Upload File: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="laptop_ministry"

        id_division="laptop_division"

        id_section="laptop_section"

        id_location="laptop_location"
        />

        <CommentField id="laptop_comment" labelFor="laptop_comment" fieldName="Comment: "/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const laptop_warranty_start_date = ref();
const laptop_warranty_end_date = ref();
const laptop_delivery_date = ref();
const laptop_deployment_date = ref();
const laptop_returned_date = ref();

function test_function() {
    console.log("This Works")
}

</script>