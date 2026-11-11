<template>
    <div class="w-full min-w-0 max-w-full">
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

            

        </SectionTemplate>

        <!-- FILTER RESULTS TABLE -->
        <div class="w-full min-w-0 max-w-full">
            <SectionTemplate v-if="filteredDevices.length > 0" template-name="Filtered Results" ref="filteredResultsSection">
                <div class="w-full min-w-0 max-w-full">
                    <!-- DEVICE COUNT SUMMARY -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

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


                    <div class="w-full min-w-0 max-w-full overflow-x-auto border border-gray-200 rounded-lg">
                        <table class="min-w-max whitespace-nowrap text-sm text-left text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3">Category</th>
                                    <th class="px-6 py-3">Brand</th>
                                    <th class="px-6 py-3">Model</th>
                                    <th class="px-6 py-3">Serial Number</th>
                                    <th class="px-6 py-3">Inventory Number</th>
                                    <th class="px-6 py-3">Delivery Date</th>
                                    <th class="px-6 py-3">Deployment Date</th>
                                    <th class="px-6 py-3">Deployed By</th>
                                    <th class="px-6 py-3">Returned Date</th>
                                    <th class="px-6 py-3">Repaired Date</th>
                                    <th class="px-6 py-3">Repaired By</th>
                                    <th class="px-6 py-3">BOS Date</th>
                                    <th class="px-6 py-3">BOS By</th>
                                    <th class="px-6 py-3">Supplier Name</th>
                                    <th class="px-6 py-3">Device Cost</th>
                                    <th class="px-6 py-3">Status</th>
                                    <th class="px-6 py-3">Parish</th>
                                    <th class="px-6 py-3">Location</th>
                                    <th class="px-6 py-3">Location Type</th>
                                    <th class="px-6 py-3">Division</th>
                                    <th class="px-6 py-3">Branch</th>
                                    <th class="px-6 py-3">Client</th>
                                    <th class="px-6 py-3">Added By</th>
                                    <th class="px-6 py-3">Last Updated Date</th>
                                    <th class="px-6 py-3">Last Updated By</th>
                                    <th class="px-6 py-3">Workbench</th>
                                    <th class="px-6 py-3">Verify</th>
                                    <th class="px-6 py-3">Verified By</th>
                                    <th class="px-6 py-3">Pending Delete</th>
                                    <th class="px-6 py-3">Pending Delete By</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedItems" :key="item.devices_id" @click="openDeviceDetails(item.serial_number, item.category)"  class="bg-white border-b cursor-pointer hover:bg-gray-200">
                                    <td class="px-6 py-4">{{ item.category }}</td>
                                    <td class="px-6 py-4">{{ item.brand }}</td>
                                    <td class="px-6 py-4">{{ item.model }}</td>
                                    <td class="px-6 py-4">{{ item.serial_number }}</td>
                                    <td class="px-6 py-4">{{ item.inventory_number }}</td>
                                    <td class="px-6 py-4">{{ item.delivery_date }}</td>
                                    <td class="px-6 py-4">{{ item.deployment_date }}</td>
                                    <td class="px-6 py-4">{{ item.deployed_by }}</td>
                                    <td class="px-6 py-4">{{ item.return_date }}</td>
                                    <td class="px-6 py-4">{{ item.repaired_date }}</td>
                                    <td class="px-6 py-4">{{ item.repaired_by }}</td>
                                    <td class="px-6 py-4">{{ item.bos_date }}</td>
                                    <td class="px-6 py-4">{{ item.bos_by }}</td>
                                    <td class="px-6 py-4">{{ item.supplier_name }}</td>
                                    <td class="px-6 py-4">{{ item.device_cost }}</td>
                                    <td class="px-6 py-4">{{ item.status_description }}</td>
                                    <td class="px-6 py-4">{{ item.parish_name }}</td>
                                    <td class="px-6 py-4">{{ item.location_name }}</td>
                                    <td class="px-6 py-4">{{ item.ltype_name }}</td>
                                    <td class="px-6 py-4">{{ item.division_name }}</td>
                                    <td class="px-6 py-4">{{ item.branch_name }}</td>
                                    <td class="px-6 py-4">{{ item.client_name }}</td>
                                    <td class="px-6 py-4">{{ item.added_by }}</td>
                                    <td class="px-6 py-4">{{ item.last_updated_date }}</td>
                                    <td class="px-6 py-4">{{ item.last_updated_by }}</td>
                                    <td class="px-6 py-4">{{ item.workbench_name }}</td>
                                    <td class="px-6 py-4">{{ item.verification }}</td>
                                    <td class="px-6 py-4">{{ item.verified_by }}</td>
                                    <td class="px-6 py-4">{{ item.pending_delete }}</td>
                                    <td class="px-6 py-4">{{ item.pending_delete_by }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

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

                <!-- EXPORT BUTTONS -->
                <div class="flex justify-end gap-3 mb-6">

                    <!-- CSV Export -->
                    <button
                        @click="exportCSV"
                        class="bg-green-400 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Export CSV
                    </button>

                    <!-- PDF Export -->
                    <button
                        @click="exportPDF"
                        class="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
                    >
                        Export PDF
                    </button>

                </div>
            </SectionTemplate>
        </div>
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

import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();


// ITEMS TO BE EXPORTED ///////////////////////////////////////////////////
const exportColumns = [
    { key: "category", label: "Category" },
    { key: "brand", label: "Brand" },
    { key: "model", label: "Model" },
    { key: "serial_number", label: "Serial Number" },
    { key: "inventory_number", label: "Inventory Number" },
    { key: "delivery_date", label: "Delivery Date" },
    { key: "deployment_date", label: "Deployment Date" },
    { key: "deployed_by", label: "Deployed By" },
    { key: "return_date", label: "Returned Date" },
    { key: "repaired_date", label: "Repaired Date" },
    { key: "repaired_by", label: "Repaired By" },
    { key: "bos_date", label: "BOS Date" },
    { key: "bos_by", label: "BOS By" },
    { key: "supplier_name", label: "Supplier Name" },
    { key: "device_cost", label: "Device Cost" },
    { key: "status_description", label: "Status" },
    { key: "parish_name", label: "Parish" },
    { key: "location_name", label: "Location" },
    { key: "ltype_name", label: "Location Type" },
    { key: "division_name", label: "Division" },
    { key: "branch_name", label: "Branch" },
    { key: "client_name", label: "Client" },
    { key: "added_by", label: "Added By" },
    { key: "last_updated_date", label: "Last Updated Date" },
    { key: "last_updated_by", label: "Last Updated By" },
    { key: "workbench_name", label: "Workbench" },
    { key: "verification", label: "Verification" },
    { key: "verified_by", label: "Verified By" },
    { key: "pending_delete", label: "Pending Delete" },
    { key: "pending_delete_by", label: "Pending Delete By" },
];

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
const itemsPerPage = 7

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


// CREATE EXPORT FILES //////////////////////////////////////////////////////
function exportCSV() {
    console.log("Beginnign of exportCSV")

    // Check if there are devices to export
    if (filteredDevices.value.length === 0) {
        alert("No devices available to export.");
        return;
    }

    // Get column headings
    const headers = exportColumns.map(column => column.label);

    // Get device data
    const rows = filteredDevices.value.map(device => {

        return exportColumns.map(column => {

            const value = device[column.key] ?? "";

            // Escape double quotes for CSV formatting
            return `"${String(value).replace(/"/g, '""')}"`;

        });

    });

    // Combine headings and rows
    const csvContent = [
        headers.map(header => `"${header.replace(/"/g, '""')}"`).join(","),
        ...rows.map(row => row.join(","))
    ].join("\r\n");

    // Create CSV file
    const blob = new Blob(
        ["\uFEFF", csvContent],
        { type: "text/csv;charset=utf-8;" }
    );

    // Generate download URL
    const url = URL.createObjectURL(blob);

    // Create temporary download link
    const link = document.createElement("a");

    link.href = url;
    link.download = "filtered_devices.csv";

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log("End of exportCSV")

}

function exportPDF() {

    // Check if devices exist
    if (filteredDevices.value.length === 0) {
        alert("No devices available to export.");
        return;
    }

    // Create PDF document
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a3"
    });

    // Report title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");

    doc.text("Filtered Devices Report", 14, 20);

    // Report date
    const currentDate = new Date().toLocaleDateString();

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(`Generated: ${currentDate}`, 14, 28);

    // Total devices
    doc.text(
        `Total Devices: ${filteredDevices.value.length}`,
        14,
        35
    );

    // Table headings
    const headers = exportColumns.map(column => column.label);

    // Table data
    const rows = filteredDevices.value.map(device => {

        return exportColumns.map(column => {

            return String(device[column.key] ?? "");

        });

    });

    // Generate table
    autoTable(doc, {

        head: [headers],

        body: rows,

        startY: 42,

        theme: "grid",

        styles: {
            fontSize: 6,
            cellPadding: 2,
            overflow: "linebreak"
        },

        headStyles: {
            fillColor: [37, 99, 235],
            textColor: 255,
            fontStyle: "bold"
        },

        alternateRowStyles: {
            fillColor: [245, 245, 245]
        },

        margin: {
            left: 10,
            right: 10
        },

        showHead: "everyPage",

        horizontalPageBreak: true,

        didDrawPage: function (data) {

            const pageHeight = doc.internal.pageSize.height;

            doc.setFontSize(9);

            doc.text(
                `Page ${data.pageNumber}`,
                data.settings.margin.left,
                pageHeight - 10
            );

        }

    });

    // Download PDF
    doc.save("filtered_devices.pdf");

}



function openDeviceDetails(serial_number, category) {
    router.push({
        name: 'ViewItem',
        params: {
            serial_number: serial_number
        },
        query: {
            category: category
        }
    });
}
</script>

<style scoped>
.pagination-overall-container {
    display: flex;
    justify-content: center;
}

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
