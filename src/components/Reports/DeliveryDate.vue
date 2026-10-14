<template>
    <div>
        <SectionTemplate template-name="Delivery Date Reports">
            <form @submit.prevent="" class="space-y-4">
                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker
                        v-model="yearRange"
                        year-picker
                        placeholder="Select year range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />
                    
                    <TextLabel
                        labelFor="device_delivery_date"
                        fieldName="Delivery Year:"
                    />
                </div>

                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker
                        v-model="monthRange"
                        month-picker
                        placeholder="Select month range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />

                    <TextLabel
                        labelFor="device_delivery_date"
                        fieldName="Delivery Month:"
                    />
                </div>

                <!-- QUARTER SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <select
                        v-model="selectedQuarter"
                        id="device_delivery_quarter"
                        :class="[date_field_class]"
                    >
                        <option :value="null">Select Quarter</option>
                        <option :value="1">Quarter 1</option>
                        <option :value="2">Quarter 2</option>
                        <option :value="3">Quarter 3</option>
                        <option :value="4">Quarter 4</option>
                    </select>

                    <TextLabel
                        labelFor="device_delivery_quarter"
                        fieldName="Delivery Quarter:"
                    />
                </div>

                <div class="flex justify-center">
                    <AddItemButton buttonName="Search" @click="getDevices"/>
                </div>
            </form>

            <!-- FILTER RESULTS TABLE -->
            <SectionTemplate v-if="filteredDevices.length > 0" template-name="Filtered Results">

              <!-- DEVICE COUNT SUMMARY -->
              <div class="grid grid-cols-4 gap-4 mb-6">

                  <!-- Total Device Count -->
                  <div class="p-4 bg-white border border-gray-400 rounded-md shadow-sm">
                      <h1 class="font-bold text-center text-lg">
                          Total Devices
                      </h1>
                      <p class="text-center text-2xl font-bold text-blue-600">
                          {{ filteredDevices.length }}
                      </p>
                  </div>

                  <!-- Category Counts -->
                  <div
                      v-for="(count, category) in categoryCounts"
                      :key="category"
                      class="p-4 bg-white border border-gray-400 rounded-md shadow-sm"
                  >
                      <h1 class="font-bold text-center text-lg">
                          {{ category }}
                      </h1>

                      <p class="text-center text-2xl font-bold text-blue-600">
                          {{ count }}
                      </p>
                  </div>

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
                    <tr v-for="item in paginatedItems" :key="item.devices_id" class="bg-white border-b hover:bg-gray-200">
                      <td class="px-6 py-4">{{ item.division_name }}</td>
                      <td class="px-6 py-4">{{ item.category }}</td>
                      <td class="px-6 py-4">{{ item.brand }}</td>
                      <td class="px-6 py-4">{{ item.model }}</td>
                      <td class="px-6 py-4">{{ item.serial_number }}</td>
                      <td class="px-6 py-4">{{ item.status_description }}</td>
                      <td class="px-6 py-4">{{ item.delivery_date }}</td>
                      <td class="px-6 py-4">{{ item.client_id }}</td>
                    </tr>
                  </tbody>
                </table>

                <!-- Pagination component -->
                <div class="pagination-overall-container">
                    <vue-awesome-paginate
                    :total-items="filteredDevices.length"
                    :items-per-page="itemsPerPage"
                    :max-pages-shown="10"
                    :show-ending-buttons="true"
                    :show-breakpoint-buttons="false"
                    v-model="currentPage"
                    paginate-buttons-class="paginate-buttons"
                    active-page-class="active-page"
                    />
                </div>
              </div>
            </SectionTemplate>

        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { option_field_class, date_field_class } from '@/utils/descriptions';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddItemButton from '@/components/AddItemButton.vue';
import { DateRangePicker } from 'flowbite-datepicker';

const filteredDevices = ref([]);

const categoryCounts = computed(() => {
    const counts = {};

    filteredDevices.value.forEach((device) => {
        const category = device.category || "Uncategorized";

        if (counts[category]) {
            counts[category]++;
        } else {
            counts[category] = 1;
        }
    });

    return counts;
});

const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredDevices.value.slice(start, end);
});

// function formatDate(value) {
//     if (!value) return null;
//     const date = new Date(value);
//     return isNaN(date) ? null : date.toISOString().split('T')[0];
// }

const yearRange = ref(null);
const monthRange = ref(null);
const selectedQuarter = ref(null);

async function getDevices() {
  try {
    const token = localStorage.getItem("token");
    

    const params = {
        year: yearRange.value,
        month: monthRange.value?.month != null
            ? monthRange.value.month + 1
            : null,
        quarter: selectedQuarter.value
    };

    console.log("Filter Parameters:", params);

    const response = await axios.get(
        `${useBaseURLComposable()}filter-delivery-date/`,
        {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    filteredDevices.value = response.data;
    console.log("Filtered Devices:", filteredDevices.value);
    
  } catch (error) {
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

    alert("Failed to filter devices. Check console.");
  }
}

</script>

<style scoped>

</style>
