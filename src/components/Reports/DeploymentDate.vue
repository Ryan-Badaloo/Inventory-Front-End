<template>
    <div>
        <SectionTemplate template-name="Deployment Date Reports">
            <form @submit.prevent="" class="space-y-4">
                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker 
                        v-model="device_deployment_date" 
                        :enable-time-picker="false" 
                        placeholder="Enter in the format MM/DD/YYY"
                        text-input 
                        :class="[date_field_class]">
                    </VueDatePicker>
                    <TextLabel labelFor="device_deployment_date" fieldName="Deployment Date: "/>
                </div>

                <div class="flex justify-center">
                    <AddItemButton buttonName="Submit" @click="getDevices"/>
                </div>
            </form>

            <!-- FILTER RESULTS TABLE -->
            <SectionTemplate v-if="filteredDevices.length > 0" template-name="Filtered Results">
              <div class="p-2 bg-white border border-gray-400 w-1/5 rounded-sm">
                <h1 class="font-bold text-center text-xl">Device Count: {{ filteredDevices.length }}</h1>
              </div>
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th class="px-6 py-3">Location</th>
                      <th class="px-6 py-3">Category</th>
                      <th class="px-6 py-3">Brand</th>
                      <th class="px-6 py-3">Model</th>
                      <th class="px-6 py-3">Serial Number</th>
                      <th class="px-6 py-3">Status</th>
                      <th class="px-6 py-3">Deployment Date</th>
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
                      <td class="px-6 py-4">{{ item.deployment_date }}</td>
                      <td class="px-6 py-4">{{ item.client_id }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </SectionTemplate>

        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { option_field_class, date_field_class } from '@/utils/descriptions';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddItemButton from '@/components/AddItemButton.vue';

const device_deployment_date = ref();
const filteredDevices = ref([]);

function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function getDevices() {
  try {
    const token = localStorage.getItem("token");
    const date = formatDate(device_deployment_date.value)

    const response = await axios.get(`${useBaseURLComposable()}filter-deployment-date/`, {
      params: { date },
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
