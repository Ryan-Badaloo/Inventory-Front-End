<template>
    <div class="mt-8 grid grid-cols-2 gap-x-6">

        <div class="flex flex-row-reverse mb-6 group">
            <select :id="id_ministry" :class="[option_field_class]" class="bg-white" :value="id_ministry"
            @change="$emit('update:id_ministry', $event.target.value)">
                <option selected class="text-blue-100">Choose a location</option>
                <option value=1>Option 1</option>
                <option value=2>Option 2</option>
                <option value=3>Option 3</option>
            </select>
            <TextLabel :labelFor="id_ministry" fieldName="Ministry/Agency/Department" />
        </div>
        
        <div class="flex flex-row-reverse mb-6 group">
            <select :id="id_division" :class="[option_field_class]" class="bg-white" :value="id_division"
            @change="$emit('update:id_division', $event.target.value)">
                <option selected class="text-blue-100">Choose a location</option>
                <option value=1>Option 1</option>
                <option value=2>Option 2</option>
                <option value=3>Option 3</option>
            </select>
            <TextLabel :labelFor="id_division" fieldName="Division/Branch" />
        </div>

        <div class="flex flex-row-reverse mb-6 group">
            <select :id="id_section" :class="[option_field_class]" class="bg-white" :value="id_section"
            @change="$emit('update:id_section', $event.target.value)">
                <option selected class="text-blue-100">Choose a location</option>
                <option value=1>Option 1</option>
                <option value=2>Option 2</option>
                <option value=3>Option 3</option>
            </select>
            <TextLabel :labelFor="id_section" fieldName="Section/Unit" />
        </div>

        <div class="flex flex-row-reverse mb-6 group">
            <select :id="id_location" :class="[option_field_class]" class="bg-white" :value="id_location"
            @change="$emit('update:id_location', $event.target.value)">
                <option selected class="text-blue-100">Choose a location</option>
                <option value=1>Option 1</option>
                <option value=2>Option 2</option>
                <option value=3>Option 3</option>
            </select>
            <TextLabel :labelFor="id_location" fieldName="Location" />
        </div>
    </div>
</template>
  
<script setup>
import { option_field_class } from '@/utils/descriptions.js';
import TextLabel from '../Fields/TextLabel.vue';

defineProps({
id_ministry: String,
id_division: String,
id_section: String,
id_location: String,
});

defineEmits(['update:id_ministry', 'update:id_division', 'update:id_section', 'update:id_location']);
</script>