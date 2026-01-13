<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';


const open = ref(false);

</script>

<template>
    <div class="flex fixed top-0 lg:static z-50">
        <div 
        class="p-2  h-screen sticky top-0"
        :class="{
            'block': open,
            'hidden': !open,
            'lg:block': true
        }"
        >
            <div class="shadow-md shadow-gray-500/50 bg-gray-50 border border-gray-300 w-3xs h-[91%] p-2 text-teal-800 rounded-2xl">
                <h1 class="text-2xl text-center font-bold mb-1 italic">Side Bar</h1>
                <hr class="pb-0.5 border-t-3">
                <hr class="pb-0.5 w-9/10 m-auto border-t-2">
                <hr class="w-8/10 m-auto">
                <div>
                    <ul class="space-y-2 mt-8">
                        <RouterLink to="/add-item" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Add Device</h2>
                            </div>
                        </RouterLink>

                        <RouterLink to="/update-item-page" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Search Device</h2>
                            </div>
                        </RouterLink>

                        <RouterLink to="/assign-item-page" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Assign Device</h2>
                            </div>
                        </RouterLink>

                        <RouterLink to="/unassign-item-page" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Unassign Device</h2>
                            </div>
                        </RouterLink>

                        <RouterLink to="/modify-clients" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Modify Clients</h2>
                            </div>
                        </RouterLink>

                        <RouterLink to="/settings" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Settings</h2>
                            </div>
                        </RouterLink>
                        <RouterLink to="/reports" class="">
                            <div class="p-1 rounded hover:shadow-sm group">
                                <h2 class="transition duration-100 ease-in-out group-hover:translate-x-2 text-xl font-semibold italic">Reports</h2>
                            </div>
                        </RouterLink>
                    </ul>
                </div>
            </div>

        </div>


        <!-- X Button -->
        <div class="sticky top-0 p-2 lg:hidden">
            <button @click="open = !open" class="relative group focus:outline-none">
                <div
                    class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-50 ring-0 ring-gray-300 hover:ring-8 ring-opacity-30 duration-200 shadow-md shadow-blue-500/50"
                >
                    <div
                        class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
                    >
                        <!-- Hamburger lines -->
                        <div
                            class="bg-gray-700 h-[2px] w-7 transform transition-all duration-300 origin-left"
                            :class="{ '-translate-x-10': open }"
                        ></div>
                        <div
                            class="bg-gray-700 h-[2px] w-7 rounded transform transition-all duration-300 delay-75"
                            :class="{ '-translate-x-10': open }"
                        ></div>
                        <div
                            class="bg-gray-700 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150"
                            :class="{ '-translate-x-10': open }"
                        ></div>

                        <!-- Cross (X) icon -->
                        <div
                            class="absolute items-center justify-between transform transition-all duration-500 top-2.5 flex w-0"
                            :class="{ 'translate-x-0 translate-y-4 w-12': open, 'translate-x-10 w-0': !open }"
                        >
                            <div
                                class="absolute bg-gray-700 h-[2px] w-5 transform transition-all duration-500 delay-300"
                                :class="{ 'rotate-45': open }"
                            ></div>
                            <div
                                class="absolute bg-gray-700 h-[2px] w-5 transform transition-all duration-500 delay-300"
                                :class="{ '-rotate-45': open }"
                            ></div>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>


<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.2s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>