<template>
<div class="p-2 grid grid-cols-4 gap-4 items-start">
    <DashboardCard icon="laptop" title="Number Of Laptops In Stock" value="32"/>
    <DashboardCard icon="mouse" title="Number Of Mouses In Stock" value="40"/>
    <DashboardCard icon="keyboard" title="Keyboards In Stock" value="25"/>
    <DashboardCard icon="star" title="Other Item" value="25"/>

    <div class="col-span-3 h-full bg-white rounded-sm shadow-md shadow-gray-400">
        <pie-chart class="p-3 w-1/3"/>
    </div>
    
</div>
</template>

<script setup>
import DashboardCard from './DashboardSmallCard.vue';
import PieChart from './PieChart.vue';
</script>
