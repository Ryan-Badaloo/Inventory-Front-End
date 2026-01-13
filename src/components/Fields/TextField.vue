<template>
    <div class="flex flex-row-reverse mb-6 group text-teal-800">
        <input type="text" :id="id" :name="name" class="basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400 focus:outline-none focus:ring-0 peer bg-white" :class="['focus:' + field_highlight_color]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
        <TextLabel :labelFor="id" :fieldName="fieldName" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextLabel from './TextLabel.vue';

defineProps({
    id: String,
    name: String,
    fieldName: String,
    modelValue: [String, Number],
})

defineEmits(['update:modelValue']);

const field_highlight_color = ref('bg-blue-100');
</script>