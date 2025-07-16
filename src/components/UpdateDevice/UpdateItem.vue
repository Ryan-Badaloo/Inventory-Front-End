<template>
<div>
    <div>
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
        

        <SectionTemplate v-if="items.length > 0" template-name="Update Devices">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Model
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Serial Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Inventory Number
                            </th>
                            <th scope="col" class="px-6 py-3">
                                System Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Delivery Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Deployment Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.Item_ID" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.Brand }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.Model }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.Serial_Number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.Inventory_Number }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.System_Status }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.Delivery_Date }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.Deployment_Date }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                                <div class="flex space-x-4">
                                    <button class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    search
                                    </button>

                                    <button @click="openUpdateModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    construction
                                    </button>

                                    <button @click="openDeleteModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </SectionTemplate>
    </div>

    <UpdateModal v-show="showUpdateModal" @close="closeUpdateModal" modal-name="Confirm Update">
        <div>
            <div class="flex flex-row-reverse mb-6 group">
                <select id="surge_protector_status" :class="[option_field_class]">
                    <option selected class="text-blue-100">Choose a Status</option>
                    <option value="working">Working</option>
                    <option value="malfunctioned">Malfunctioned/Being Repaired</option>
                    <option value="being_upgraded">Being Upgraded</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="stolen">Stolen</option>
                    <option value="bos">BOS</option>
                </select>
                <TextLabel labelFor="surge_protector_status" fieldName="New System Status: "/>
            </div>

            <div class="">
                <h1><span class="font-bold text-xl">Serial Number: {{ itemToUpdate }}</span></h1>
                <h1><span class="font-bold">Brand</span>: {{ item_brand }}</h1>
                <h1><span class="font-bold">Model:</span> {{ item_model }}</h1>
                <h1><span class="font-bold">Inventory number:</span> {{ item_inventory_number }}</h1>
                <h1><span class="font-bold">System Status:</span> {{ item_system_status }}</h1>
            </div>

            <button @click="test()" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
        </div>
    </UpdateModal>

    <DeleteModal v-show="showDeleteModal" @close="closeDeleteModal" modal-name="Confirm Delete">
        <div class="flex flex-col">
            <div class="">
                <h1><span class="font-bold text-xl">Serial Number: {{ itemToDelete }}</span></h1>
                <h1><span class="font-bold">Brand</span>: {{ item_brand }}</h1>
                <h1><span class="font-bold">Model:</span> {{ item_model }}</h1>
                <h1><span class="font-bold">Inventory number:</span> {{ item_inventory_number }}</h1>
                <h1><span class="font-bold">System Status:</span> {{ item_system_status }}</h1>
            </div>

            <button @click="confirmDeleteItem()" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
        </div>
    </DeleteModal>
</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';
import UpdateModal from './UpdateModal.vue';
import DeleteModal from './DeleteModal.vue';
import TextLabel from '../Fields/TextLabel.vue';

import { option_field_class } from '@/utils/descriptions';




const filter = ref(); //store the text typed into the search bar
const items = ref([]); // Store the search results (list of items)
const search_category = ref();


const itemToUpdate = ref(); // Store the Serial Number of the item to be updated
const itemToDelete = ref(); // Store the Serial Number of the item to be deleted



const item_brand = ref();
const item_model = ref();
const item_inventory_number = ref();
const item_system_status = ref();

const showUpdateModal = ref(false)
const showDeleteModal = ref(false)



async function get_items() {
    // http://localhost:8000/
    try {
        const response = await axios.get(`http://localhost:8000/get_items_by_brand/${encodeURIComponent(filter.value)}`);
        console.log(search_category.value);
        items.value = response.data;
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
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
    showUpdateModal.value = true;
    itemToUpdate.value = serial;
    
    item_brand.value = brand;
    item_model.value = model;
    item_inventory_number.value = inventory_number;
    item_system_status.value = system_status;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////


//THIS IS THE DELETE SECTION/////////////////////////////////////////////////////////////////////////////
function closeDeleteModal() {
    showDeleteModal.value = false;
    itemToDelete.value = '';
}

function openDeleteModal(serial, brand, model, inventory_number, system_status) {
    showDeleteModal.value = true;
    itemToDelete.value = serial;

    item_brand.value = brand;
    item_model.value = model;
    item_inventory_number.value = inventory_number;
    item_system_status.value = system_status;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function test() {
    showModal.value = false;
    console.log("Button Is Working");
    console.log(itemToUpdate.value);
}

</script>