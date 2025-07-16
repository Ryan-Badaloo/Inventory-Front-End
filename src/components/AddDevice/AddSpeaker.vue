<template>
<AddTemplate templateName="Speaker">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="speaker_brand" labelFor="speaker_brand" fieldName="Brand: "/>

            <TextField id="speaker_model" labelFor="speaker_model" fieldName="Model: "/>

            <TextField id="speaker_serial_number" labelFor="speaker_serial_number" fieldName="Serial Number: "/>

            <TextField id="speaker_inventory_number" labelFor="speaker_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="speaker_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="speaker_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="speaker_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="speaker_ministry"

        id_division="speaker_division"

        id_section="speaker_section"

        id_location="speaker_location"
        />

        <CommentField id="speaker_comment" labelFor="speaker_comment" fieldName="Comment: "/>
        
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

const speaker_delivery_date = ref();
const speaker_deployment_date = ref();

</script>