<template>
    <div class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <div class="flex justify-center">
                <span class="material-icons !text-7xl text-red-500"> 
                    error
                </span>
            </div>

            <h1 class="text-2xl text-center font-bold p-2 text-black">
                {{ modalName }}
            </h1>

            <div class="p-2 flex justify-center">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'

defineProps({
modalName: String,
});

const emit = defineEmits(['close'])

const modalRef = ref(null)

onClickOutside(modalRef, () => {
  emit('close')
})
</script>