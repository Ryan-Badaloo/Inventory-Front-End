<template>
    <div>

        <!-- FILTER RESULTS TABLE -->
        <SectionTemplate v-if="filteredDevices.length > 0" template-name="Filtered Results">
            <div class="p-2 bg-white border border-gray-400 w-1/5 rounded-sm">
            <h1 class="font-bold text-center text-xl">Device Count: {{ filteredDevices.length }}</h1>
            </div>
            <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th class="px-6 py-3">Location</th>
                    <th class="px-6 py-3">Category</th>
                    <th class="px-6 py-3">Brand</th>
                    <th class="px-6 py-3">Model</th>
                    <th class="px-6 py-3">Serial Number</th>
                    <th class="px-6 py-3">Status</th>
                    <th class="px-6 py-3">Delivery Date</th>
                    <th class="px-6 py-3">Client</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in filteredDevices" :key="item.devices_id" class="bg-white border-b hover:bg-gray-200">
                    <td class="px-6 py-4">{{ item.division_name }}</td>
                    <td class="px-6 py-4">{{ item.category }}</td>
                    <td class="px-6 py-4">{{ item.brand }}</td>
                    <td class="px-6 py-4">{{ item.model }}</td>
                    <td class="px-6 py-4">{{ item.serial_number }}</td>
                    <td class="px-6 py-4">{{ item.status_description }}</td>
                    <td class="px-6 py-4">{{ item.delivery_date }}</td>
                    <td class="px-6 py-4">{{ item.client_first_name }} {{ item.client_last_name }}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const filteredDevices = ref([]);

onMounted(() => {
  console.log("Getting All Devices Being Repaired");
  getDevices();
});

async function getDevices() {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${useBaseURLComposable()}filter-being-repaired/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    filteredDevices.value = response.data;
    console.log("Filtered Devices:", filteredDevices.value);
  } catch (error) {
    console.error("Error fetching filtered devices:", error.response?.data || error.message);
    alert("Failed to filter devices. Check console.");
  }
}

</script>

<style scoped>

</style>
