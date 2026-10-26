<template>
    <div>
        <SectionTemplate template-name="Filter Devices">

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

            <!-- PARISHES /////////////////////////////////////////////////////////////// -->
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

            <!-- DIVISIONS /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Division</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="div in divisions" :key="div.division_id" class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            :id="`division_${div.division_id}`"
                            :value="div.division_name"
                            v-model="selectedDivisions"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`division_${div.division_id}`"
                            class="cursor-pointer text-gray-700 text-sm"
                        >
                            {{ div.division_name }}
                        </label>
                    </div>
                </div>
            </div>

            <!-- BRANCHES /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Branch</h2>
                <div class="grid grid-cols-3 gap-x-6 gap-y-2">
                    <div v-for="branch in branches" :key="branch.branch_id" class="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            :id="`branch_${branch.branch_id}`"
                            :value="branch.branch_name"
                            v-model="selectedBranches"
                            class="cursor-pointer w-4 h-4 accent-blue-600"
                        />
                        <label 
                            :for="`branch_${branch.branch_id}`"
                            class="cursor-pointer text-gray-700 text-sm"
                        >
                            {{ branch.branch_name }}
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

            <!-- DELIVERY DATE /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Delivery</h2>
                <div class="flex flex-row-reverse mb-6 group">
                  <!-- YEAR SELECTOR -->
                    <VueDatePicker
                        v-model="deliveryYearRange"
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

                <!-- MONTH SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker
                        v-model="deliveryMonthRange"
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
                        v-model="deliveryQuarter"
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
            </div>

            <!-- DEPLOYMENT DATE /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Deployment</h2>
                <div class="flex flex-row-reverse mb-6 group">
                  <!-- YEAR SELECTOR -->
                    <VueDatePicker
                        v-model="deploymentYearRange"
                        year-picker
                        placeholder="Select year range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />
                    
                    <TextLabel
                        labelFor="device_deployment_date"
                        fieldName="Deployment Year:"
                    />
                </div>

                <!-- MONTH SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker
                        v-model="deploymentMonthRange"
                        month-picker
                        placeholder="Select month range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />

                    <TextLabel
                        labelFor="device_deployment_date"
                        fieldName="Deployment Month:"
                    />
                </div>

                <!-- QUARTER SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <select
                        v-model="deploymentQuarter"
                        id="device_deployment_quarter"
                        :class="[date_field_class]"
                    >
                        <option :value="null">Select Quarter</option>
                        <option :value="1">Quarter 1</option>
                        <option :value="2">Quarter 2</option>
                        <option :value="3">Quarter 3</option>
                        <option :value="4">Quarter 4</option>
                    </select>

                    <TextLabel
                        labelFor="device_deployment_quarter"
                        fieldName="Deployment Quarter:"
                    />
                </div>
            </div>

            <!-- RETURNED DATE /////////////////////////////////////////////////////////////// -->
            <div class="border border-gray-300 rounded-lg p-4 mb-6">
                <h2 class="text-lg font-semibold text-black mb-3">Returned</h2>
                <div class="flex flex-row-reverse mb-6 group">
                  <!-- YEAR SELECTOR -->
                    <VueDatePicker
                        v-model="returnedYearRange"
                        year-picker
                        placeholder="Select year range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />
                    
                    <TextLabel
                        labelFor="device_returned_date"
                        fieldName="Returned Year:"
                    />
                </div>

                <!-- MONTH SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <VueDatePicker
                        v-model="returnedMonthRange"
                        month-picker
                        placeholder="Select month range"
                        :auto-apply="true"
                        :class="[date_field_class]"
                    />

                    <TextLabel
                        labelFor="device_returned_date"
                        fieldName="Returned Month:"
                    />
                </div>

                <!-- QUARTER SELECTOR -->
                <div class="flex flex-row-reverse mb-6 group">
                    <select
                        v-model="returnedQuarter"
                        id="device_returned_quarter"
                        :class="[date_field_class]"
                    >
                        <option :value="null">Select Quarter</option>
                        <option :value="1">Quarter 1</option>
                        <option :value="2">Quarter 2</option>
                        <option :value="3">Quarter 3</option>
                        <option :value="4">Quarter 4</option>
                    </select>

                    <TextLabel
                        labelFor="device_returned_quarter"
                        fieldName="Returned Quarter:"
                    />
                </div>
            </div>

            <!-- SUBMIT BUTTON /////////////////////////////////////////////////////////////// -->
            <div class="flex justify-center mt-8">
                <AddItemButton button-name="Search" @click="applyFilters"/>
            </div>

            <!-- FILTER RESULTS TABLE -->
            <SectionTemplate v-if="filteredDevices.length > 0" template-name="Filtered Results" ref="filteredResultsSection">
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
import { ref, computed, onMounted, nextTick } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import AddItemButton from '@/components/AddItemButton.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { option_field_class, date_field_class } from '@/utils/descriptions';
import TextLabel from '@/components/Fields/TextLabel.vue';
import { DateRangePicker } from 'flowbite-datepicker';



// STATE VARIABLES ////////////////////////////////////////////////////////
const filteredResultsSection = ref(null);

const locations = ref([]);
const parishes = ref([])
const divisions = ref([])
const branches = ref([])
const statuses = ref([]);

const deliveryYearRange = ref(null);
const deliveryMonthRange = ref(null);
const deliveryQuarter = ref(null);

const deploymentYearRange = ref(null);
const deploymentMonthRange = ref(null);
const deploymentQuarter = ref(null);

const returnedYearRange = ref(null);
const returnedMonthRange = ref(null);
const returnedQuarter = ref(null);

const selectedLocations = ref([]);
const selectedParishes = ref([]);
const selectedDivisions = ref([]);
const selectedBranches = ref([]);
const selectedStatuses = ref([]);
const selectedComponents = ref([]);
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

// Static component list
const components = [
  "Laptop", "Desktop", "Tablet", "Mouse", "Keyboard",
  "Scanner", "Surge Protector", "UPS", "Speaker",
  "Webcam", "Other Equipment", "Printer", "Projector", "CRAV",
];

// FETCH FUNCTIONS ////////////////////////////////////////////////////////
onMounted(() => {
  getLocations();
  getStatuses();
  getParishes();
  getDivisions();
  getBranches();
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
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

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
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

    alert('Failed to load locations. Check console.');
  }
}

async function getDivisions() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${useBaseURLComposable()}get-division-names/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    divisions.value = response.data;
  } catch (error) {
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

    alert('Failed to load locations. Check console.');
  }
}

async function getBranches() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${useBaseURLComposable()}get-branch-names/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    branches.value = response.data;
  } catch (error) {
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

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
    console.error(
      "Error creating item:",
      error.response?.data || error.message
    );
    console.error("Detail:", error.response?.data?.detail);

    alert('Failed to load statuses. Check console.');
  }
}

// HANDLE FILTER SUBMISSION ////////////////////////////////////////////////////////
async function applyFilters() {
    try {
        const token = localStorage.getItem("token");

        const params = new URLSearchParams();

        // Component filters
        selectedComponents.value.forEach(component => {
            params.append("components", component);
        });

        // Parish filters
        selectedParishes.value.forEach(parish => {
            params.append("parishes", parish);
        });

        // Location filters
        selectedLocations.value.forEach(location => {
            params.append("locations", location);
        });

        // Division filters
        selectedDivisions.value.forEach(division => {
            params.append("divisions", division);
        });

        // Branch filters
        selectedBranches.value.forEach(branch => {
            params.append("branches", branch);
        });

        // Status filters
        selectedStatuses.value.forEach(status => {
            params.append("statuses", status);
        });

        // DELIVERY DATE FILTERS //////////////////////////////////////

        // Delivery Year
        if (deliveryYearRange.value !== null && deliveryYearRange.value !== "") {
            params.append("delivery_year", deliveryYearRange.value);
        }

        // Delivery Month
        if (deliveryMonthRange.value?.month != null) {
            params.append("delivery_month", deliveryMonthRange.value.month + 1);
        }

        // Delivery Quarter
        if (deliveryQuarter.value !== null && deliveryQuarter.value !== "") {
            params.append("delivery_quarter", deliveryQuarter.value);
        }


        // DEPLOYMENT DATE FILTERS ////////////////////////////////////

        // Deployment Year
        if (deploymentYearRange.value !== null && deploymentYearRange.value !== "") {
            params.append("deployment_year", deploymentYearRange.value);
        }

        // Deployment Month
        if (deploymentMonthRange.value?.month != null) {
            params.append("deployment_month", deploymentMonthRange.value.month + 1);
        }

        // Deployment Quarter
        if (deploymentQuarter.value !== null && deploymentQuarter.value !== "") {
            params.append("deployment_quarter", deploymentQuarter.value);
        }

        // RETURNED DATE FILTERS ////////////////////////////////////

        // Returned Year
        if (returnedYearRange.value !== null && returnedYearRange.value !== "") {
            params.append("returned_year", returnedYearRange.value);
        }

        // Returned Month
        if (returnedMonthRange.value?.month != null) {
            params.append("returned_month", returnedMonthRange.value.month + 1);
        }

        // Returned Quarter
        if (returnedQuarter.value !== null && returnedQuarter.value !== "") {
            params.append("returned_quarter", returnedQuarter.value);
        }

        console.log("Sending filters:", params.toString());

        const response = await axios.get(
            `${useBaseURLComposable()}filter-devices/`,
            {
                params,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        filteredDevices.value = response.data;

        // Reset pagination
        currentPage.value = 1;

        // Wait for Vue to update the DOM
        await nextTick();

        // Scroll to filtered results
        if (filteredResultsSection.value) {
            const element = filteredResultsSection.value.$el;

            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    } catch (error) {
        console.error("Error filtering devices:", error);
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
