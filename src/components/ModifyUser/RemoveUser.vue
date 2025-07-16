<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="" class="space-y-4">
        <div class="flex flex-row-reverse mb-6 group w-1/2">
            <select id="user_to_remove" :class="[option_field_class]">
                <option selected class="text-blue-100">Select User</option>
                <option value="">Person 1</option>
                <option value="">Person 2</option>
                <option value="">Person 3</option>
            </select>
            <TextLabel labelFor="user_to_remove" fieldName="Select User To Remove: "/>
        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Remove User"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref } from 'vue';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '../Fields/TextLabel.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class } from '@/utils/descriptions';


</script>