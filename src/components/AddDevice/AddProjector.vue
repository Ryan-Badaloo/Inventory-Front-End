<template>
<AddTemplate templateName="Projector">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="projector_brand" labelFor="projector_brand" fieldName="Brand: "/>

            <TextField id="projector_model" labelFor="projector_model" fieldName="Model: "/>

            <TextField id="projector_serial_number" labelFor="projector_serial_number" fieldName="Serial Number: "/>

            <TextField id="projector_inventory_number" labelFor="projector_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="projector_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="projector_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="projector_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="projector_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="projector_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="projector_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="projector_ministry"

        id_division="projector_division"

        id_section="projector_section"

        id_location="projector_location"
        />

        <CommentField id="projector_comment" labelFor="projector_comment" fieldName="Comment: "/>
        
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

const projector_delivery_date = ref();
const projector_deployment_date = ref();

</script>