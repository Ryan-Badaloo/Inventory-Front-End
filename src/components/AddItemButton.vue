<template>
<button @click="$emit('click')" type="submit" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
    {{ buttonName }}
</button>
</template>

<script setup>
defineProps({
buttonName: String,
});

defineEmits(['click']);
</script>