<template>
<AddTemplate templateName="Webcam">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="webcam_brand" labelFor="webcam_brand" fieldName="Brand: "/>

            <TextField id="webcam_model" labelFor="webcam_model" fieldName="Model: "/>

            <TextField id="webcam_serial_number" labelFor="webcam_serial_number" fieldName="Serial Number: "/>

            <TextField id="webcam_inventory_number" labelFor="webcam_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="webcam_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="webcam_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="webcam_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="webcam_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="webcam_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="US">Working</option>
                    <option value="CA">Malfunctioned/Being Repaired</option>
                    <option value="FR">Being Upgraded</option>
                    <option value="DE">Unassigned</option>
                    <option value="DE">Stolen</option>
                    <option value="DE">BOS</option>
                </select>
                <TextLabel labelFor="webcam_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="webcam_ministry"

        id_division="webcam_division"

        id_section="webcam_section"

        id_location="webcam_location"
        />

        <CommentField id="webcam_comment" labelFor="webcam_comment" fieldName="Comment: "/>
        
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

const webcam_delivery_date = ref();
const webcam_deployment_date = ref();

</script>