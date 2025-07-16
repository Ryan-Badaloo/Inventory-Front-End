<template>
<div class="h-full p-3 flex flex-col bg-white rounded-sm shadow-md shadow-gray-400">
    <div class="flex justify-around">
        <h1 class="mt-2 text-lg text-center font-medium text-gray-400">{{ title }}</h1>
        <span class="pl-2 material-icons !text-7xl text-gry-500"> {{ icon }} </span>
    </div>
    

    <h1 class="mt-3 font-bold text-5xl text-center text-blue-500">{{ value }}</h1>

</div>
</template>

<script setup>
defineProps({
title: String,
icon: String,
value: String,
});
</script>