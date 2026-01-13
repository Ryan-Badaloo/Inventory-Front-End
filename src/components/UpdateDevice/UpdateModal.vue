<template>
    <div class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 z-50 w-9/10 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Select the type of update">
                <form @submit.prevent="" class="space-y-4">
                    <h1 class="p-4 text-2xl font-bold text-center">Item Serial Number: {{ itemToUpdate }}</h1>
                    <div class="grid grid-cols-2 gap-x-6">
                            

                            <TextField id="brand" labelFor="brand" fieldName="Brand: " v-model="brand"/>

                            <TextField id="model" labelFor="model" fieldName="Model: " v-model="model"/>

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
                                    <option value=1>Working</option>
                                    <option value=2>Malfunctioned/Being Repaired</option>
                                    <option value=3>Being Upgraded</option>
                                    <option value=4>Unassigned</option>
                                    <option value=5>Stolen</option>
                                    <option value=6>BOS</option>
                                </select>
                                <TextLabel labelFor="status" fieldName="System Status: "/>
                            </div>

                            
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="comment" labelFor="comment" fieldName="Enter Comment: " v-model="comment"/>
                    </div>

                    <RouterLink 
                    v-if="itemToUpdate"
                    :to="{ name: 'UpdateRequest', params: { passedText: itemToUpdate } }"
                    class="content-center w-1/5 cursor-pointer py-2 px-4 bg-gray-200 hover:bg-blue-700 text-blue-500 hover:text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2"
                    >Request Update
                    </RouterLink>
                    
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
import { RouterLink, useRoute } from 'vue-router';
import { option_field_class } from '@/utils/descriptions';
import { date_field_class } from '@/utils/descriptions';

const brand = ref();
const model = ref();
const delivery_date = ref();
const deployment_date = ref();
const status = ref();
const comment = ref();

defineProps({
  itemToUpdate: String,
})

const emit = defineEmits(['close'])
const modalRef = ref(null)

onClickOutside(modalRef, () => {
  emit('close')
})
</script>