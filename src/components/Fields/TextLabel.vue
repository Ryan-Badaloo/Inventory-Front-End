<template>
        <label :for="labelFor" class="basis-1/3 font-medium text-base text-gray-700 whitespace-nowrap transition-transform duration-100 group-hover:italic peer-focus:italic" :class="['group-hover:' + text_highlight_color, 'peer-focus:' + text_highlight_color]">
        {{ fieldName }}
        <span v-if="required" class="text-red-500 ml-1">*</span>
        </label>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    labelFor: String, // renamed from 'for'
    fieldName: String,
    required: Boolean,
})

const text_highlight_color = ref('text-blue-500');
</script>