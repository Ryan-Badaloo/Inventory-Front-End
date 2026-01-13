<template>
<div class="w-full h-full grid grid-cols-4 gap-2 text-teal-800 p-2">

    <DashboardCard icon="laptop" title="Number Of Laptops In Stock" value="32"/>
    <DashboardCard icon="mouse" title="Number Of Mouses In Stock" value="40"/>
    <DashboardCard icon="keyboard" title="Keyboards In Stock" value="25"/>
    <DashboardCard icon="star" title="Other Item" value="25"/>

    <div class="bg-white rounded-2xl shadow-md shadow-gray-400 w-full col-span-4">
        <pie-chart class="p-2 w-1/3 h-96"/>
    </div>
    
</div>
</template>

<script setup>
import DashboardCard from './DashboardSmallCard.vue';
import PieChart from './PieChart.vue';
</script>
