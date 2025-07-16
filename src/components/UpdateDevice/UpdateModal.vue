<template>
    <div class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 z-50 w-9/10 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Select the type of update">
                <form @submit.prevent="createKeyboard()" class="space-y-4">
                    <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="brand" labelFor="brand" fieldName="Brand: " v-model="brand"/>

                            <TextField id="model" labelFor="model" fieldName="Model: " v-model="model"/>

                            <TextField id="serial_number" labelFor="serial_number" fieldName="Serial Number: " v-model="serial_number"/>

                            <TextField id="inventory_number" labelFor="inventory_number" fieldName="Inventory Number: " v-model="inventory_number"/>

                            <!-- delivery date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="delivery_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="delivery_date" fieldName="Delivery Date: "/>
                            </div>

                            <!-- deployment date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="deployment_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="deployment_date" fieldName="Deployment Date: "/>
                            </div>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="status" :class="[option_field_class]" v-model="status">
                                    <option selected class="text-blue-100">Choose a Status</option>
                                    <option value="working">Working</option>
                                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                                    <option value="being_upgraded">Being Upgraded</option>
                                    <option value="unassigned">Unassigned</option>
                                    <option value="stolen">Stolen</option>
                                    <option value="bos">BOS</option>
                                </select>
                                <TextLabel labelFor="status" fieldName="System Status: "/>
                            </div>

                            
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="comment" labelFor="comment" fieldName="Enter Comment: " v-model="comment"/>
                    </div>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Update Item"/>
                    </div>
                </form> 
            </SectionTemplate>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import SectionTemplate from '../SectionTemplate.vue';
import TextField from '../Fields/TextField.vue';
import TextLabel from '../Fields/TextLabel.vue';
import AddItemButton from '../AddItemButton.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';



const brand = ref();
const model = ref();
const serial_number = ref();
const inventory_number = ref();
const delivery_date = ref();
const deployment_date = ref();
const status = ref();
const comment = ref();

defineProps({
modalName: String,
modalText: String,
});

const emit = defineEmits(['close'])
const modalRef = ref(null)

onClickOutside(modalRef, () => {
  emit('close')
})
</script>