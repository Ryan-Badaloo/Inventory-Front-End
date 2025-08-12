<template>
<AddTemplate templateName="Speaker">
    <form @submit.prevent="createSpeaker()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="speaker_brand" labelFor="speaker_brand" fieldName="Brand: " v-model="speaker_brand"/>

            <TextField id="speaker_model" labelFor="speaker_model" fieldName="Model: " v-model="speaker_model"/>

            <TextField id="speaker_serial_number" labelFor="speaker_serial_number" fieldName="Serial Number: " v-model="speaker_serial_number"/>

            <TextField id="speaker_inventory_number" labelFor="speaker_inventory_number" fieldName="Inventory Number: " v-model="speaker_inventory_number"/>

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
                <select id="speaker_status" :class="[option_field_class]" class="bg-white" v-model="speaker_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value=1>Working</option>
                    <option value=2>Malfunctioned/Being Repaired</option>
                    <option value=3>Being Upgraded</option>
                    <option value=4>Unassigned</option>
                    <option value=5>Stolen</option>
                    <option value=6>BOS</option>
                </select>
                <TextLabel labelFor="speaker_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_parish" :class="[option_field_class]" class="bg-white" v-model="speaker_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="speaker_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_location_type" :class="[option_field_class]" class="bg-white" v-model="speaker_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="speaker_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_location" :class="[option_field_class]" class="bg-white" v-model="speaker_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="speaker_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="speaker_division" :class="[option_field_class]" class="bg-white" v-model="speaker_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="speaker_division" fieldName="Division" />
            </div>
        </div>

        <CommentField id="speaker_comment" labelFor="speaker_comment" fieldName="Comment: " v-model="speaker_comment"/>
        
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
import axios from 'axios';

import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const text_highlight_color = ref('text-blue-500');

const speaker_brand = ref();
const speaker_model = ref();
const speaker_serial_number = ref();
const speaker_inventory_number = ref();
const speaker_delivery_date = ref();
const speaker_deployment_date = ref();
const speaker_status = ref();
const speaker_parish = ref();
const speaker_location_type = ref();
const speaker_location = ref();
const speaker_division = ref();
const speaker_comment = ref();

async function createSpeaker() {
    const speaker = {
        category: "Speaker",
        division_id: speaker_division.value,
        brand: speaker_brand.value,
        model: speaker_model.value,
        serial_number: speaker_serial_number.value,
        inventory_number: speaker_inventory_number.value,
        delivery_date: speaker_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: speaker_deployment_date.value?.toISOString().split('T')[0],
        status_id: speaker_status.value,
    }

    for (const key in speaker) {
        if (speaker[key] === undefined) {
            speaker[key] = null;
        }
    }

    try {
        const response = await axios.post('http://localhost:8000/add-device/', speaker);
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

</script>