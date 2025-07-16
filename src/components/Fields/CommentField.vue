<template>
    <div class="mt-8 flex flex-row-reverse mb-6 group">
        <input type="text" :id="id" :name="name" class="ml-8 block w-full rounded-md border-2 border-gray-400 focus:outline-none focus:ring-0 peer bg-white" :class="['focus:' + field_highlight_color]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>


        <label :for="id" class="basis-1/6 font-medium text-base text-gray-700 whitespace-nowrap transition-transform duration-100 group-hover:italic peer-focus:italic" :class="['group-hover:' + text_highlight_color, 'peer-focus:' + text_highlight_color]">
            {{ fieldName }}
        </label>
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