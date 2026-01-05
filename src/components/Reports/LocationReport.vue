<template>
    <div>
        <SectionTemplate template-name="Filter Devices">

            <!-- LOCATIONS /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Parish</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="parish in parishes" :key="parish.parish_id" class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            :id="`parish${parish.parish_id}`"
                            :value="parish.parish_name"
                            v-model="selectedParishes"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`parish_${parish.parish_id}`"
                            class="cursor-pointer text-gray-700"
                        >
                            {{ parish.parish_name }}
                        </label>
                    </div>
                </div>
            </div>          

            <!-- LOCATIONS /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Location</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="loc in locations" :key="loc.location_id" class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            :id="`location_${loc.location_id}`"
                            :value="loc.location_name"
                            v-model="selectedLocations"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`location_${loc.location_id}`"
                            class="cursor-pointer text-gray-700 text-sm"
                        >
                            {{ loc.location_name }}
                        </label>
                    </div>
                </div>
            </div>

            <!-- COMPONENT /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Component</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="comp in components" :key="comp" class="flex items-center space-x-2">
                        <input 
                            type="checkbox"
                            :id="`component_${comp}`"
                            :value="comp"
                            v-model="selectedComponents"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`component_${comp}`"
                            class="cursor-pointer text-gray-700 text-sm"
                        >
                            {{ comp }}
                        </label>
                    </div>
                </div>
            </div>

            <!-- STATUS /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Status</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="stat in statuses" :key="stat.status_id" class="flex items-center space-x-2">
                        <input 
                            type="checkbox"
                            :id="`status_${stat.status_id}`"
                            :value="stat.status_description"
                            v-model="selectedStatuses"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`status_${stat.status_id}`"
                            class="cursor-pointer text-gray-700 text-sm"
                        >
                            {{ stat.status_description }}
                        </label>
                    </div>
                </div>
            </div>

            <!-- SUBMIT BUTTON /////////////////////////////////////////////////////////////// -->
            <div class="flex justify-center mt-8">
                <AddItemButton button-name="Search" @click="applyFilters"/>
            </div>

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
                      <td class="px-6 py-4">{{ item.location_name }}</td>
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
              </div>
            </SectionTemplate>

        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import AddItemButton from '@/components/AddItemButton.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

// STATE VARIABLES ////////////////////////////////////////////////////////
const locations = ref([]);
const parishes = ref([])
const statuses = ref([]);
const selectedLocations = ref([]);
const selectedParishes = ref([]);
const selectedStatuses = ref([]);
const selectedComponents = ref([]);
const filteredDevices = ref([]);

// Static component list
const components = [
  "Laptop", "Tablet", "Mouse", "Keyboard",
  "Scanner", "Surge Protector", "UPS", "Speaker",
  "Webcam", "Other Equipment", "Printer", "Projector", "CRAV",
];

// FETCH FUNCTIONS ////////////////////////////////////////////////////////
onMounted(() => {
  getLocations();
  getStatuses();
  getParishes();
});

async function getLocations() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${useBaseURLComposable()}get-location-names/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    locations.value = response.data;
  } catch (error) {
    console.error('Error fetching locations:', error.response?.data || error.message);
    alert('Failed to load locations. Check console.');
  }
}

async function getParishes() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${useBaseURLComposable()}get-parish-names/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    parishes.value = response.data;
  } catch (error) {
    console.error('Error fetching locations:', error.response?.data || error.message);
    alert('Failed to load locations. Check console.');
  }
}

async function getStatuses() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${useBaseURLComposable()}get-statuses/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    statuses.value = response.data;
  } catch (error) {
    console.error('Error fetching statuses:', error.response?.data || error.message);
    alert('Failed to load statuses. Check console.');
  }
}

// HANDLE FILTER SUBMISSION ////////////////////////////////////////////////////////
async function applyFilters() {
  try {
    const token = localStorage.getItem("token");
    const payload = {
      locations: selectedLocations.value,
      parishes: selectedParishes.value,
      statuses: selectedStatuses.value,
      components: selectedComponents.value,
    };

    const response = await axios.post(
      `${useBaseURLComposable()}filter-devices/`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    filteredDevices.value = response.data;
    console.log("Filtered Devices:", filteredDevices.value);
  } catch (error) {
    console.error("Error fetching filtered devices:", error.response?.data || error.message);
    alert("Failed to filter devices. Check console.");
  }
}
</script>

<style scoped>
/* Styling spacing between checkbox groups */
.grid {
  margin-top: 0.5rem;
}

.border {
  background-color: #fff;
}

h2 {
  font-family: 'Inter', sans-serif;
}
</style>
