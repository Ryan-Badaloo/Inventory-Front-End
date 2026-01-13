<template>
<AddTemplate templateName="UPS">
    <form @submit.prevent="createUPS()" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="ups_brand" labelFor="ups_brand" fieldName="Brand: " v-model="ups_brand"/>

            <TextField id="ups_model" labelFor="ups_model" fieldName="Model: " v-model="ups_model"/>

            <TextField id="ups_serial_number" labelFor="ups_serial_number" fieldName="Serial Number: " v-model="ups_serial_number"/>

            <TextField id="ups_inventory_number" labelFor="ups_inventory_number" fieldName="Inventory Number: " v-model="ups_inventory_number"/>

            <!-- delivery date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_delivery_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_delivery_date" fieldName="Delivery Date: "/>
            </div>

            <!-- deployment date -->
            <div class="flex flex-row-reverse mb-6 group">
                <VueDatePicker 
                    v-model="ups_deployment_date" 
                    :enable-time-picker="false" 
                    :input-class-name="'p-0 bg-green-500'"
                    placeholder="Enter in the format MM/DD/YYY"
                    text-input 
                    :class="[date_field_class]">
                </VueDatePicker>
                <TextLabel labelFor="ups_deployment_date" fieldName="Deployment Date: "/>
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_status" :class="[option_field_class]" class="bg-white" v-model="ups_status">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                </select>
                <TextLabel labelFor="ups_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <!-- <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_parish" :class="[option_field_class]" class="bg-white" v-model="ups_parish">
                    <option selected class="text-blue-100">Choose a Parish</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="ups_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_location_type" :class="[option_field_class]" class="bg-white" v-model="ups_location_type">
                    <option selected class="text-blue-100">Choose a Location Type</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="ups_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_location" :class="[option_field_class]" class="bg-white" v-model="ups_location">
                    <option selected class="text-blue-100">Choose a Location</option>
                    <option value=1>Option 1</option>
                    <option value=2>Option 2</option>
                    <option value=3>Option 3</option>
                </select>
                <TextLabel :labelFor="ups_location" fieldName="Location" />
            </div> -->

            <div class="flex flex-row-reverse mb-6 group">
                <select id="ups_division" :class="[option_field_class]" class="bg-white" v-model="ups_division">
                    <option selected class="text-blue-100">Choose a Division</option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="ups_division" fieldName="Division" />
            </div>
        </div>

        <!-- <CommentField id="ups_comment" labelFor="ups_comment" fieldName="Comment: " v-model="ups_comment"/> -->
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { getStatuses, getDivisions, option_field_class, date_field_class } from '@/utils/descriptions';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';

const statuses = ref([])
const divisions = ref([])

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});


const ups_brand = ref();
const ups_model = ref();
const ups_serial_number = ref();
const ups_inventory_number = ref();
const ups_delivery_date = ref();
const ups_deployment_date = ref();
const ups_status = ref();
const ups_parish = ref();
const ups_location_type = ref();
const ups_location = ref();
const ups_division = ref();
const ups_comment = ref();


async function createUPS() {
    const ups = {
        category: "UPS",
        division_id: ups_division.value,
        brand: ups_brand.value,
        model: ups_model.value,
        serial_number: ups_serial_number.value,
        inventory_number: ups_inventory_number.value,
        delivery_date: ups_delivery_date.value?.toISOString().split('T')[0],
        deployment_date: ups_deployment_date.value?.toISOString().split('T')[0],
        status_id: ups_status.value,
    }

    for (const key in ups) {
        if (ups[key] === undefined) {
            ups[key] = null;
        }
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-device/`, ups, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("Item Added Succefully")
        alert("Item successfully added.", response.data);
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

</script>