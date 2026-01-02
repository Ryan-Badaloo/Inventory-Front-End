<template>
    <div>
        <!-- THIS DISPLAYS THE LOCATION COUNT TABLES ////////////////////////////////////////////////////////////-->
        <SectionTemplate template-name="Location Count">
            <div v-if="allLocations && allLocations.length > 0" class="space-y-10">
                <div v-for="(location, index) in allLocations" :key="index" class="border border-gray-300 rounded-xl shadow-sm p-4 bg-white dark:bg-gray-800">

                    <h2 class="text-center text-xl font-bold text-black mb-4">
                        {{ location.location_name }}
                    </h2>

                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">Category</th>
                                    <th scope="col" class="px-6 py-3">Device Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cat, idx) in location.category_counts" :key="idx"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ cat.category }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ cat.count }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <div v-else class="text-center py-10 text-gray-600 dark:text-gray-300">
                No location data available.
            </div>
        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

const allLocations = ref([])

onMounted(async () => {
  try {
    await getAllLocations()
  } catch (err) {
    console.error("Failed to load locations", err);
  }
});

async function getAllLocations() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-all-locations/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        allLocations.value = response.data
        console.log(allLocations.value)
    } catch (error) {
        console.error('Error loading locations:', error.response?.data || error.message);
        alert("Failed to load location data. Check console.");
    }
}
</script>

<style scoped>
/* TABLE CONTAINER STYLES */
.space-y-10 > * + * {
  margin-top: 2.5rem;
}
</style>
