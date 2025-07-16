<template>
<AddTemplate templateName="Surge Protector">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="surge_protector_brand" labelFor="surge_protector_brand" fieldName="Brand: "/>

            <TextField id="surge_protector_model" labelFor="surge_protector_model" fieldName="Model: "/>

            <TextField id="surge_protector_serial_number" labelFor="surge_protector_serial_number" fieldName="Serial Number: "/>

            <TextField id="surge_protector_inventory_number" labelFor="surge_protector_inventory_number" fieldName="Inventory Number: "/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="surge_protector_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="surge_protector_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="surge_protector_status" fieldName="System Status: "/>
            </div>
        </div>

        <LocationOptions 
        id_ministry="surge_protector_ministry"

        id_division="surge_protector_division"

        id_section="surge_protector_section"

        id_location="surge_protector_location"
        />

        <CommentField id="surge_protector_comment" labelFor="surge_protector_comment" fieldName="Comment: "/>
        
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

const surge_protector_delivery_date = ref();
const surge_protector_deployment_date = ref();



</script>