<template>
<div>
    <div>
<!-- THIS DISPLAYS THE SEARCH BAR AND RADIO BUTTONS ////////////////////////////////////////////////////////////-->
        <div>
            <SearchBar v-model="filter" :onSubmit="get_items">
                <div class="w-2/3 flex justify-around items-center">
                    <div class="">
                        <input type="radio" id="brand_radio" name="category" value="Brand" v-model="search_category"
                            class="peer hidden" />
                        <label for="brand_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white">
                            Brand
                        </label>
                    </div>

                    <div class="">
                        <input type="radio" id="model_radio" name="category" value="Model" v-model="search_category"
                            class="peer hidden" />
                        <label for="model_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white">
                            Model
                        </label>
                    </div>

                    <div class="">
                        <input type="radio" id="serial_number_radio" name="category" value="Serial_Number" v-model="search_category"
                            class="peer hidden" />
                        <label for="serial_number_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white">
                            Serial Number
                        </label>
                    </div>
                </div>

            </SearchBar>
        </div>

        
<!-- THIS DISPLAYS THE SEARCH RESULTS TABLE ///////////////////////////////////////////////////////////////////-->
        <SectionTemplate v-if="items.length > 0" template-name="Update Devices">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                Delivery Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in paginatedItems" :key="item.devices_id
" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                {{ item.delivery_date }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                                <div class="flex space-x-4">
                                    <button @click="openDeviceModal(item.serial_number, item.category)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    search
                                    </button>

                                    <button @click="openUpdateModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    construction
                                    </button>

                                    <button @click="openDeleteModal(item.serial_number, item.brand, item.category, item.model, item.inventory_number)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    delete
                                    </button>
                                </div>
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
    </div>

    <!-- THIS IS THE MODAL TO SHOW DEVICE DETAILS -->
    <div v-show="showDeviceModal" @close="closeDeviceModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 z-50 w-9/10 mt-5 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Item Details">
                <!-- THIS IS THE LAPTOP SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="laptopData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ laptopData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ laptopData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ laptopData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ laptopData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ laptopData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ laptopData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ laptopData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">CPU Type:</h1>
                            <h1 class="show_detail_body">{{ laptopData.cpu_type_id }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                            <h1 class="show_detail_body">{{ laptopData.hard_disk_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Capacity:</h1>
                            <h1 class="show_detail_body">{{ laptopData.memory_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Speed:</h1>
                            <h1 class="show_detail_body">{{ laptopData.processor_speed }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Type:</h1>
                            <h1 class="show_detail_body">{{ laptopData.processor_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Computer Name:</h1>
                            <h1 class="show_detail_body">{{ laptopData.computer_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ laptopData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Operating System:</h1>
                            <h1 class="show_detail_body">{{ laptopData.operating_system }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Microsoft Office Version:</h1>
                            <h1 class="show_detail_body">{{ laptopData.microsoft_office_version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Antivirus:</h1>
                            <h1 class="show_detail_body">{{ laptopData.antivirus }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Pdf:</h1>
                            <h1 class="show_detail_body">{{ laptopData.pdf_reader }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Returned Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.return_date }}</h1>
                        </div>
                    </div>

                </div>

                <!-- THIS IS THE TABLET SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="tabletData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                                <h1 class="show_detail_head">Category: </h1>
                                <h1 class="show_detail_body">{{ tabletData.category }}</h1>
                            </div>

                            <div class="flex">
                                <h1 class="show_detail_head">Brand:</h1>
                                <h1 class="show_detail_body">{{ tabletData.brand }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Model:</h1>
                                <h1 class="show_detail_body">{{ tabletData.model }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Serial Number:</h1>
                                <h1 class="show_detail_body">{{ tabletData.serial_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Inventory Number:</h1>
                                <h1 class="show_detail_body">{{ tabletData.inventory_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Delivery Date:</h1>
                                <h1 class="show_detail_body">{{ tabletData.delivery_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Deployment Date:</h1>
                                <h1 class="show_detail_body">{{ tabletData.deployment_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Status:</h1>
                                <h1 class="show_detail_body">{{ tabletData.status_description }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Division:</h1>
                                <h1 class="show_detail_body">{{ tabletData.division_name }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">IMEI Number:</h1>
                                <h1 class="show_detail_body">{{ tabletData.imei_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Operating System:</h1>
                                <h1 class="show_detail_body">{{ tabletData.operating_system }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Version:</h1>
                                <h1 class="show_detail_body">{{ tabletData.version }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                                <h1 class="show_detail_body">{{ tabletData.hard_disk_capacity }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Memory Capacity:</h1>
                                <h1 class="show_detail_body">{{ tabletData.memory_capacity }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Warranty Start Date:</h1>
                                <h1 class="show_detail_body">{{ tabletData.warranty_start_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Warranty End Date:</h1>
                                <h1 class="show_detail_body">{{ tabletData.warranty_end_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Returned Date:</h1>
                                <h1 class="show_detail_body">{{ tabletData.return_date }}</h1>
                            </div>
                    </div>
                </div>

                <!-- THIS IS THE MOUSE KEYBOARD SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="mouseKeyboardData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                                <h1 class="show_detail_head">Category: </h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.category }}</h1>
                            </div>

                            <div class="flex">
                                <h1 class="show_detail_head">Brand:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.brand }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Model:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.model }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Serial Number:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.serial_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Inventory Number:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.inventory_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Delivery Date:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.delivery_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Deployment Date:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.deployment_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Status:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.status_description }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Division:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.division_name }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Connection Type:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.connection_type_id }}</h1>
                            </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE PRINTER SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="printerData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                                <h1 class="show_detail_head">Category: </h1>
                                <h1 class="show_detail_body">{{ printerData.category }}</h1>
                            </div>

                            <div class="flex">
                                <h1 class="show_detail_head">Brand:</h1>
                                <h1 class="show_detail_body">{{ printerData.brand }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Model:</h1>
                                <h1 class="show_detail_body">{{ printerData.model }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Serial Number:</h1>
                                <h1 class="show_detail_body">{{ printerData.serial_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Inventory Number:</h1>
                                <h1 class="show_detail_body">{{ printerData.inventory_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Delivery Date:</h1>
                                <h1 class="show_detail_body">{{ printerData.delivery_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Deployment Date:</h1>
                                <h1 class="show_detail_body">{{ printerData.deployment_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Status:</h1>
                                <h1 class="show_detail_body">{{ printerData.status_description }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Division:</h1>
                                <h1 class="show_detail_body">{{ printerData.division_name }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">IP Address ID:</h1>
                                <h1 class="show_detail_body">{{ printerData.ip_address }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Feature ID:</h1>
                                <h1 class="show_detail_body">{{ printerData.feature_id }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Connection Type:</h1>
                                <h1 class="show_detail_body">{{ printerData.connection_type_id }}</h1>
                            </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE CRAV SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="cravData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                                <h1 class="show_detail_head">Category: </h1>
                                <h1 class="show_detail_body">{{ cravData.category }}</h1>
                            </div>

                            <div class="flex">
                                <h1 class="show_detail_head">Brand:</h1>
                                <h1 class="show_detail_body">{{ cravData.brand }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Model:</h1>
                                <h1 class="show_detail_body">{{ cravData.model }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Serial Number:</h1>
                                <h1 class="show_detail_body">{{ cravData.serial_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Inventory Number:</h1>
                                <h1 class="show_detail_body">{{ cravData.inventory_number }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Delivery Date:</h1>
                                <h1 class="show_detail_body">{{ cravData.delivery_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Deployment Date:</h1>
                                <h1 class="show_detail_body">{{ cravData.deployment_date }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Status:</h1>
                                <h1 class="show_detail_body">{{ cravData.status_description }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Division:</h1>
                                <h1 class="show_detail_body">{{ cravData.division_name }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Name:</h1>
                                <h1 class="show_detail_body">{{ cravData.name }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">IP Address ID:</h1>
                                <h1 class="show_detail_body">{{ cravData.ip_address }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Mac Address:</h1>
                                <h1 class="show_detail_body">{{ cravData.mac_address }}</h1>
                            </div>
                            
                    </div>
                </div>
            </SectionTemplate>
        </div>
    </div>

    <UpdateModal v-show="showUpdateModal" @close="closeUpdateModal" modal-name="Confirm Update" :item-to-update="itemToUpdate">
    </UpdateModal>

    <!-- THIS IS THE MODAL TO DELETE DEVICE -->
    <div v-show="showDeleteModal" @close="closeDeleteModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="modalRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <!-- This is the error sign -->
            <div class="flex justify-center">
                <span class="material-icons !text-7xl text-red-500"> 
                    error
                </span>
            </div>

            <h1 class="text-2xl text-center font-bold p-2 text-black">
                This is the modal name
            </h1>

            <div class="p-2 flex justify-center">
                <div class="flex flex-col">
                    <div class="">
                        <h1><span class="font-bold text-xl">Serial Number: {{ deleteSerial }}</span></h1>
                        <h1><span class="font-bold">Brand</span>: {{ deleteBrand }}</h1>
                        <h1><span class="font-bold">Category:</span> {{ deleteCategory }}</h1>
                        <h1><span class="font-bold">Model:</span> {{ deleteModel }}</h1>
                        <h1><span class="font-bold">Inventory number:</span> {{ deleteInventory }}</h1>
                    </div>

                    <button @click="confirmDeleteItem" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';

import UpdateModal from './UpdateModal.vue';

import TextLabel from '../Fields/TextLabel.vue';

import { option_field_class } from '@/utils/descriptions';




const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});



const showDeviceModal = ref(false);
const laptopData = ref();
const tabletData = ref();
const mouseKeyboardData = ref();
const printerData = ref();
const cravData = ref();

const showDeleteModal = ref(false);
const deleteSerial = ref();
const deleteBrand = ref();
const deleteCategory = ref();
const deleteModel = ref();
const deleteInventory = ref();



const showUpdateModal = ref(false)
const itemToDelete = ref();
const itemToUpdate = ref();
const search_category = ref();
const item_brand = ref();
const item_model = ref();
const item_inventory_number = ref();
const item_system_status = ref();
const filter = ref();



// These are tests and should be removed
const test_brand = ref('HP');
const test_category = ref('Laptop');


async function get_items() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-items/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                brand: test_brand.value,
                category: test_category.value,
            }
        });
        items.value = response.data
        console.log(items.value)
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

//THIS IS THE VIEW SECTION///////////////////////////////////////////////////////////////////////////////
function closeDeviceModal() {
    showDeviceModal.value = false;
    laptopData.value = null;
    tabletData.value = null;
    mouseKeyboardData.value = null;
    printerData.value = null;
    cravData.value = null;
    console.log("Closing Device Modal")
}

async function openDeviceModal(serial_number, category) {
    console.log(serial_number)
    showDeviceModal.value = true;
    console.log("Opening Device Modal")

    try {
        const response = await axios.get('http://localhost:8000/get-item-sn/', {
            params: {
                serial_number: serial_number,
                category: category,
            }
        });
        
        if (category === "Laptop") {
            laptopData.value = response.data
            for (const item in laptopData.value) {
                if (laptopData.value[item] == undefined || laptopData.value[item] == null) {
                    laptopData.value[item] = "";
                }
            }
        } else if (category === "Tablet") {
            tabletData.value = response.data
            for (const item in tabletData.value) {
                if (tabletData.value[item] == undefined || tabletData.value[item] == null) {
                    tabletData.value[item] = "";
                }
            }
        } else if (category === "Mouse" || category === "Keyboard") {
            mouseKeyboardData.value = response.data
            for (const item in mouseKeyboardData.value) {
                if (mouseKeyboardData.value[item] == undefined || mouseKeyboardData.value[item] == null) {
                    mouseKeyboardData.value[item] = "";
                }
            }
        } else if (category === "Printer") {
            printerData.value = response.data
            for (const item in printerData.value) {
                if (printerData.value[item] == undefined || printerData.value[item] == null) {
                    printerData.value[item] = "";
                }
            }
        } else if (category === "CRAV") {
            cravData.value = response.data
            for (const item in cravData.value) {
                if (cravData.value[item] == undefined || cravData.value[item] == null) {
                    cravData.value[item] = "";
                }
            }
        }
        
    } catch (error) {
        if (error.response?.status === 401) {
            this.$router.push({name: 'UserLogin' });
            alert("Please Log In Again")
        }
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}




//THIS IS THE UPDATE SECTION///////////////////////////////////////////////////////////////////////////////
function closeUpdateModal() {
    showUpdateModal.value = false;
    itemToUpdate.value = '';
    console.log(itemToUpdate.value)
}

function openUpdateModal(serial, brand, model, inventory_number, system_status) {
    itemToUpdate.value = serial;
    showUpdateModal.value = true;
    
    
    item_brand.value = brand;
    item_model.value = model;
    item_inventory_number.value = inventory_number;
    item_system_status.value = system_status;

    console.log(itemToUpdate.value)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//THIS IS THE DELETE SECTION/////////////////////////////////////////////////////////////////////////////
function closeDeleteModal() {
    showDeleteModal.value = false;

    deleteSerial.value = null;
    deleteBrand.value = null;
    deleteCategory.value = null;
    deleteModel.value = null;
    deleteInventory.value = null;
}

function openDeleteModal(serial_number, brand, category, model, inventory_number) {
    showDeleteModal.value = true;

    deleteSerial.value = serial_number;
    deleteBrand.value = brand;
    deleteCategory.value = category;
    deleteModel.value = model;
    deleteInventory.value = inventory_number;

}

async function confirmDeleteItem() {
    try {
        console.log(deleteSerial)
        const token = localStorage.getItem('token');
        await axios.delete('http://localhost:8000/delete-item/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: deleteSerial.value,
            }
        });
        items.value = items.value.filter(item => item.serial_number !== deleteSerial.value)
        console.log("Item Has Been Deleted")
        closeDeleteModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const modalRef = ref(null)

onClickOutside(modalRef, () => {
  if (showDeviceModal.value) {
    closeDeviceModal()
  }

  if (showDeleteModal.value) {
    closeDeleteModal()
  }
})
</script>

<style scoped>
.show_detail_head {
    padding: 10px;
    background-color: oklch(27.8% 0.033 256.848);
    color: white;
    font-weight: bold;
    width: 10rem;
    border-top-left-radius: 10px; 
    border-bottom-left-radius: 10px; 
}

.show_detail_body {
    padding: 10px;
    background-color: white;
    font-weight: bold;
    width: 100%;
    border: 1px solid oklch(27.8% 0.033 256.848);
    border-top-right-radius: 10px; 
    border-bottom-right-radius: 10px; 
}

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