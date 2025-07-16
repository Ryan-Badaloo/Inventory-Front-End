<template>
    <div class="w-full">
        <div 
        :class="[
            'group flex flex-col items-center w-9/10 cursor-pointer font-semibold px-6 py-1 rounded-sm transition-all duration-100',
            isActive
            ? 'bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-sm border-t-4 border-l-4 border-blue-300'
            : 'bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 shadow-sm shadow-black border-b-4 border-r-4 border-gray-200',
            'hover:shadow-sm hover:border-b-0 hover:border-r-0 hover:border-t-4 hover:border-l-4 hover:text-white hover:from-blue-400 hover:to-blue-500 hover:border-blue-300'
        ]">
            <span 
            :class="[
                'material-icons !text-4xl text-blue-500 group-hover:text-white',
                { 'text-white' : isActive }
            ]"
            > 
            {{ icon }} 
            </span>
            <button class="cursor-pointer"> {{ buttonText }} </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    buttonText: String,
    icon: String,
    isActive: Boolean
})
</script>
