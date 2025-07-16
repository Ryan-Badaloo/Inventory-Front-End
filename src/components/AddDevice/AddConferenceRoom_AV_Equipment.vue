<template>
<AddTemplate templateName="Conference Room AV Equipment">
    <form @submit.prevent="" class="space-y-4">
        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_brand" labelFor="conference_room_av_equipment_brand" fieldName="Brand: "/>

            <TextField id="conference_room_av_equipment_model" labelFor="conference_room_av_equipment_model" fieldName="Model: "/>

            <TextField id="conference_room_av_equipment_serial_number" labelFor="conference_room_av_equipment_serial_number" fieldName="Serial Number: "/>                     

            <TextField id="conference_room_av_equipment_inventory_number" labelFor="conference_room_av_equipment_inventory_number" fieldName="Inventory Number: "/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="conference_room_av_equipment_status" :class="[option_field_class]" class="bg-white">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="conference_room_av_equipment_status" fieldName="System Status: "/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <TextField id="conference_room_av_equipment_mac_address" labelFor="conference_room_av_equipment_mac_address" fieldName="Mac Address: "/> 

            <TextField id="conference_room_av_equipment_ip_address" labelFor="conference_room_av_equipment_ip_address" fieldName="IP Address: "/>  
        </div>

        <LocationOptions 
        id_ministry="conference_room_av_equipment_ministry"

        id_division="conference_room_av_equipment_division"

        id_section="conference_room_av_equipment_section"

        id_location="conference_room_av_equipment_location"
        />

        <CommentField id="conference_room_av_equipment_comment" labelFor="conference_room_av_equipment_comment" fieldName="Comment: "/>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Item"/>
        </div>
    </form> 
</AddTemplate>
</template>


<script setup>
import { ref } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import { option_field_class } from '@/utils/descriptions.js';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import LocationOptions from './LocationOptions.vue';
import CommentField from '../Fields/CommentField.vue';


</script>