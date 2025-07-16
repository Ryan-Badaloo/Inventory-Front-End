<template>
<AddTemplate templateName="Tablet">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="tablet_brand" labelFor="tablet_brand" fieldName="Brand: "/>

            <TextField id="tablet_model" labelFor="tablet_model" fieldName="Model: "/>

            <TextField id="tablet_serial_number" labelFor="tablet_serial_number" fieldName="Serial Number: "/>

            <TextField id="tablet_inventory_number" labelFor="tablet_inventory_number" fieldName="Inventory Number: "/>

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

            <!-- system status -->
            <div class="flex flex-row-reverse mb-6 group">
                <select id="tablet_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="tablet_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">

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
            <TextField id="tablet_operating_system" labelFor="tablet_operating_system" fieldName="Operating System: "/>

            <TextField id="tablet_imei_number" labelFor="tablet_imei_number" fieldName="IMEI Number: "/>

            <TextField id="tablet_version" labelFor="tablet_version" fieldName="Version: "/>

        </div>

        <LocationOptions 
        id_ministry="tablet_ministry"

        id_division="tablet_division"

        id_section="tablet_section"

        id_location="tablet_location"
        />
        
        <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: "/>

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

const tablet_warranty_start_date = ref();
const tablet_warranty_end_date = ref();
const tablet_delivery_date = ref();
const tablet_deployment_date = ref();
const tablet_returned_date = ref();

</script>