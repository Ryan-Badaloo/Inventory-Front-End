<template>

    <div>
<!-- THIS DISPLAYS THE SEARCH BAR AND RADIO BUTTONS ////////////////////////////////////////////////////////////-->
        <div>
            <SearchBar :onSubmit="get_items" v-model="search_category">
                <div class="w-2/3 grid grid-cols-3 gap-4">

                    <div class="flex justify-center ">
                        <input type="radio" id="device_type_radio" name="category" value="Device Type" v-model="search_filter"
                            class="peer hidden" />
                        <label for="device_type_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Device Type
                        </label>
                    </div>
                    
                    <div class="flex justify-center">
                        <input type="radio" id="serial_number_radio" name="category" value="Serial Number" v-model="search_filter"
                            class="peer hidden" />
                        <label for="serial_number_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Serial Number
                        </label>
                    </div>

                    <div class="flex justify-center">
                        <input type="radio" id="client_radio" name="category" value="Client" v-model="search_filter"
                            class="peer hidden" />
                        <label for="client_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Client
                        </label>
                    </div>

                    <div class="flex justify-center">
                        <input type="radio" id="status_radio" name="category" value="Status" v-model="search_filter"
                            class="peer hidden" />
                        <label for="status_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Status
                        </label>
                    </div>

                    <div class="flex justify-center">
                        <input type="radio" id="delivery_date_radio" name="category" value="Delivery Date" v-model="search_filter"
                            class="peer hidden" />
                        <label for="delivery_date_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Delivery Date
                        </label>
                    </div>

                    <div class="flex justify-center">
                        <input type="radio" id="deployment_date_radio" name="category" value="Deployment Date" v-model="search_filter"
                            class="peer hidden" />
                        <label for="deployment_date_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Deployment Date
                        </label>
                    </div>

                    <div class="flex justify-center">
                        <input type="radio" id="division_radio" name="category" value="Division" v-model="search_filter"
                            class="peer hidden" />
                        <label for="division_radio"
                            class="cursor-pointer px-4 py-2 rounded-md bg-white text-blue-500 font-semibold
                                peer-checked:bg-blue-800 peer-checked:text-white
                                transition duration-200 ease-in-out hover:bg-blue-800 hover:text-white w-40 text-center">
                            Division
                        </label>
                    </div>

                </div>

            </SearchBar>
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
                    This is the modal name
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
const search_category = ref();
const search_filter = ref();

const showUnassignModal = ref(false);
const unassignSerial = ref();
const unassignBrand = ref();
const unassignCategory = ref();
const unassignModel = ref();
const unassignClientID = ref();
const unassignClientName = ref();

async function get_items() {
    console.log(search_category.value)
    console.log(search_filter.value)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-assigned-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                filter: search_filter.value,
                input: search_category.value,
                
            }
        });
        items.value = response.data
        console.log(items.value)
        
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
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
        console.error('Error finding item:', error.response?.data || error.message);
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