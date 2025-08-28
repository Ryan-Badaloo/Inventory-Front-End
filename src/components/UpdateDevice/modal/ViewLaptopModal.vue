<template>
    <div class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 z-50 w-9/10 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Item Details">
                
            </SectionTemplate>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import SectionTemplate from '@/components/SectionTemplate.vue';

import '@vuepic/vue-datepicker/dist/main.css';

defineProps({
  itemToUpdate: String,
})


const emit = defineEmits(['close'])
const modalRef = ref(null)

onClickOutside(modalRef, () => {
  emit('close')
})
</script>