<template>
<AddTemplate templateName="Printer">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="printer_brand" labelFor="printer_brand" fieldName="Brand: " required/>

            <TextField id="printer_model" labelFor="printer_model" fieldName="Model: "/>

            <TextField id="printer_serial_number" labelFor="printer_serial_number" fieldName="Serial Number: "/>

            <TextField id="printer_inventory_number" labelFor="printer_inventory_number" fieldName="Inventory Number: "/>

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

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="printer_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_features" :class="[option_field_class]">
                    <option selected class="text-blue-100">Choose a Feature</option>
                    <option value="copy_only">Copy Only</option>
                    <option value="print_only">Print Only</option>
                    <option value="print_scan">Print, Scan</option>
                    <option value="print_scan_copy">Print, Scan, Copy</option>
                </select>
                <TextLabel labelFor="printer_features" fieldName="Features: "/>
            </div>

            <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: "/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="printer_connection_type" :class="[option_field_class]">
                    <option selected class="text-blue-100">Choose a Connection Type</option>
                    <option value="copy_only">Stand Alone</option>
                    <option value="print_only">Networked</option>
                </select>
                <TextLabel labelFor="printer_connection_type" fieldName="Connection Type: "/>
            </div>

        </div>

        <LocationOptions 
        id_ministry="printer_ministry"

        id_division="printer_division"

        id_section="printer_section"

        id_location="printer_location"
        />

        <CommentField id="printer_comment" labelFor="printer_comment" fieldName="Comment: "/>
        
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

const text_highlight_color = ref('text-blue-500');

const printer_delivery_date = ref();
const printer_deployment_date = ref();

</script>