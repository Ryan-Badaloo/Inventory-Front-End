<template>
<AddTemplate templateName="Mouse">
    <form @submit.prevent="" class="space-y-4">
 
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="mouse_brand" labelFor="mouse_brand" fieldName="Brand: "/>

            <TextField id="mouse_model" labelFor="mouse_model" fieldName="Model: "/>

            <TextField id="mouse_serial_number" labelFor="mouse_serial_number" fieldName="Serial Number: "/>

            <TextField id="mouse_inventory_number" labelFor="mouse_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="mouse_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="mouse_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="mouse_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="mouse_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="mouse_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="mouse_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="mouse_ministry"

        id_division="mouse_division"

        id_section="mouse_section"

        id_location="mouse_location"
        />

        <CommentField id="mouse_comment" labelFor="mouse_comment" fieldName="Comment: "/>
        
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


const mouse_delivery_date = ref();
const mouse_deployment_date = ref();

</script>