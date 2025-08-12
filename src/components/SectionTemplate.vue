<template>
    <div class="p-2 flex-grow">
        <div class="shadow-lg shadow-gray-500/50 bg-gray-50 rounded-sm rounded-tr-full">
            <h1 class="text-2xl text-center font-bold p-2 rounded-tl-sm rounded-tr-full bg-gray-800 text-white">{{templateName}}
            </h1>
            <div class="bg-gray-50 rounded-bl-4xl rounded-br-4xl">
                <div class="p-4">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps ({
    templateName: String,
})
</script>