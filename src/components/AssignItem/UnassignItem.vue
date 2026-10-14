<template>

    <div>
<!-- THIS DISPLAYS THE SEARCH BAR AND RADIO BUTTONS ////////////////////////////////////////////////////////////-->
        <div>
            <div class="grid grid-cols-4 gap-4 p-2">
                <!-- Device Type Search Bar -->
                <div>
                    <label
                        for="device_type"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Device Type
                    </label>

                    <div class="relative">

                        <!-- Search Icon -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <!-- Search Input -->
                        <input
                            type="search"
                            v-model="device_type_search"
                            id="device_type"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Device Type"
                        />

                    </div>
                </div>

                <!-- Serial Number Search Bar -->
                <div>
                    <label
                        for="serial_number"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Serial Number
                    </label>

                    <div class="relative">

                        <!-- Search Icon -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <!-- Search Input -->
                        <input
                            type="search"
                            v-model="serial_number_search"
                            id="serial_number"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Serial Number"
                        />

                    </div>
                </div>

                <!-- Client Search Bar -->
                <div>
                    <label
                        for="client"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Client
                    </label>

                    <div class="relative">

                        <!-- Search Icon -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <!-- Search Input -->
                        <input
                            type="search"
                            v-model="client_search"
                            id="client"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Client"
                        />

                    </div>
                </div>

                <!-- Status Search Bar -->
                <div>
                    <label
                        for="status"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Status
                    </label>

                    <div class="relative">

                        <!-- Search Icon -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <!-- Search Input -->
                        <input
                            type="search"
                            v-model="status_search"
                            id="status"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Status"
                        />

                    </div>
                </div>

                <!-- Division Search Bar -->
                <div>
                    <label
                        for="division"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Division
                    </label>

                    <div class="relative">

                        <!-- Search Icon -->
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                class="w-4 h-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-width="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        <!-- Search Input -->
                        <input
                            type="search"
                            v-model="division_search"
                            id="division"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Division"
                        />

                    </div>
                </div>



                
            </div>

            <div class="p-2">
                <button
                    type="submit"
                    @click="get_items"
                    class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2"
                    >
                    Search
                </button>
            </div>
        </div>

<!-- THIS DISPLAYS THE SEARCH RESULTS TABLE ///////////////////////////////////////////////////////////////////-->
        <SectionTemplate v-if="items.length > 0" template-name="Unassign Devices">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Serial Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Inventory Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Model
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Client Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in paginatedItems" :key="item.devices_id" class="bg-white border-b border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.brand }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.category }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.serial_number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.inventory_number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.model }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.status_description }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.client_name }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                    <button @click="openUnassignModal(item.serial_number, item.brand, item.category, item.model, item.client_id, item.client_name)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    person_remove
                                    </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

                <!-- Pagination component -->
                <div class="pagination-overall-container">
                    <vue-awesome-paginate
                    :total-items="items.length"
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

        <!-- THIS IS THE MODAL TO DELETE DEVICE -->
        <div v-show="showUnassignModal" @close="closeUnassignModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
            <div ref="unassignRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
                <!-- This is the error sign -->
                <div class="flex justify-center">
                    <span class="material-icons !text-7xl text-red-500"> 
                        error
                    </span>
                </div>

                <h1 class="text-2xl text-center font-bold p-2 text-black">
                    CONFIRM UNASSIGN
                </h1>

                <div class="p-2 flex justify-center">
                    <div class="flex flex-col">
                        <div class="">
                            <h1><span class="font-bold text-xl">Serial Number: {{ unassignSerial }}</span></h1>
                            <h1><span class="font-bold">Brand</span>: {{ unassignBrand }}</h1>
                            <h1><span class="font-bold">Category:</span> {{ unassignCategory }}</h1>
                            <h1><span class="font-bold">Model:</span> {{ unassignModel }}</h1>
                            <h1><span class="font-bold">Client ID:</span> {{ unassignClientID }}</h1>
                            <h1><span class="font-bold">Client Name:</span> {{ unassignClientName }}</h1>
                        </div>

                        <button @click="confirmUnassignItem" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

        
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';
import AddItemButton from '../AddItemButton.vue';
import TextLabel from '../Fields/TextLabel.vue';
import { onClickOutside } from '@vueuse/core'
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { option_field_class } from '@/utils/descriptions';

const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});



const cart = ref([]); //Store the items in the cart


const showUnassignModal = ref(false);
const unassignSerial = ref();
const unassignBrand = ref();
const unassignCategory = ref();
const unassignModel = ref();
const unassignClientID = ref();
const unassignClientName = ref();

const device_type_search = ref();
const serial_number_search = ref();
const client_search = ref();
const status_search = ref();
const division_search = ref();

async function get_items() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-assigned-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                device_type: device_type_search.value,
                serial_number: serial_number_search.value,
                client: client_search.value,
                status: status_search.value,
                division: division_search.value,
            }
        });
        items.value = response.data
        console.log(items.value)
        
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find item. Check console.");
    }
}





//THIS IS THE UNASSIGN SECTION/////////////////////////////////////////////////////////////////////////////
function closeUnassignModal() {
    showUnassignModal.value = false;

    unassignSerial.value = null;
    unassignBrand.value = null;
    unassignCategory.value = null;
    unassignModel.value = null;
    unassignClientID.value = null;
    unassignClientName.value = null;
}

function openUnassignModal(serial_number, brand, category, model, client_id, client_name) {
    showUnassignModal.value = true;

    unassignSerial.value = serial_number;
    unassignBrand.value = brand;
    unassignCategory.value = category;
    unassignModel.value = model;
    unassignClientID.value = client_id;
    unassignClientName.value = client_name;

}

async function confirmUnassignItem() {
    try {
        console.log(unassignSerial)
        const token = localStorage.getItem('token');
        await axios.post(`${useBaseURLComposable()}unassign-item/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: unassignSerial.value,
            }
        });
        items.value = items.value.filter(item => item.serial_number !== unassignSerial.value)
        console.log("Item Has Been Unassigned")
        closeUnassignModal()
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find item. Check console.");
    }
}

const unassignRef = ref(null)

onClickOutside(unassignRef, () => {
  if (showUnassignModal.value) {
    closeUnassignModal()
  }
})




</script>


<style scoped>
.pagination-overall-container {
    display: flex;
    justify-content: center;
}

:global(.pagination-container) {
  display: flex;
  column-gap: 20px;
  padding: 20px;
}

:global(.paginate-buttons) {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  border: 1px solid rgb(240, 240, 240);
  color: black;
}

:global(.paginate-buttons:hover) {
  background-color: #d8d8d8;
}

:global(.active-page) {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

:global(.active-page:hover) {
  background-color: #2988c8;
}
</style>