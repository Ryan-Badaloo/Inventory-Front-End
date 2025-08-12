<template>
<div>
   <SectionTemplate templateName="Request Item Update">
        <h1 class="p-4 pb-8 pl-0 text-2xl font-bold">Item Serial Number: {{ passedText }}</h1>
        <div class="grid grid-cols-2 gap-x-6">

            <TextField id="serial_number" labelFor="serial_number" fieldName="Serial Number: " v-model="serial_number"/>

            <TextField id="inventory_number" labelFor="inventory_number" fieldName="Inventory Number: " v-model="inventory_number"/>
        </div>

        <div class="flex justify-center">
            <AddItemButton buttonName="Request Update"/>
        </div>
   </SectionTemplate>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import SectionTemplate from '@/components/SectionTemplate.vue';
import TextField from '@/components/Fields/TextField.vue';
import AddItemButton from '../AddItemButton.vue';

const route = useRoute()
const passedText = route.params.passedText
</script>