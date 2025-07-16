<template>
<div>  
    <div>
        <SearchBar v-model="filter" :onSubmit="get_items" />

        <SectionTemplate v-if="items.length > 0" template-name="Delete Devices">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.Item_ID" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ item.Brand }}
                            </th>
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
                            <td class="px-6 py-4 inline-block align-middle">
                                <button @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" class="p-2 cursor-pointer bg-blue-500 rounded-sm text-white font-bold hover:bg-blue-700">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </SectionTemplate>
    </div>

    <Modal v-show="showModal" @close="closeModal" modal-name="Confirm Delete">
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
    </Modal>
</div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SearchBar from '@/components/SearchBar.vue';
import Modal from '@/components/UpdateDevice/DeleteModal.vue';

const filter = ref(); //store the text typed into the search bar
const items = ref([]); // Store the search results (list of items)
const itemToDelete = ref(); // Store the Serial Number of the item to be deleted

const item_brand = ref();
const item_model = ref();
const item_inventory_number = ref();
const item_system_status = ref();

const showModal = ref(false)


async function get_items() {
    try {
       // const response = await axios.get(`http://localhost:8080/
        const response = await axios.get(`http://localhost:8000/get_items_by_brand/${encodeURIComponent(filter.value)}`);
        console.log(response.data);
        items.value = response.data;
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

async function delete_item(item) {
    try {
      // const response = await axios.get(`http://localhost:8080/
        await axios.delete(`http://localhost:8000/delete_item_by_serial_number/${encodeURIComponent(item)}`);
        console.log(items.value);
        items.value = items.value.filter(current_item => current_item.Serial_Number !== item);
        console.log("Item Deleted");
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

function closeModal() {
    showModal.value = false;
    itemToDelete.value = '';
    console.log(itemToDelete.value)
}

function openConfirmModal(serial, brand, model, inventory_number, system_status) {
    showModal.value = true;
    itemToDelete.value = serial;

    item_brand.value = brand;
    item_model.value = model;
    item_inventory_number.value = inventory_number;
    item_system_status.value = system_status;
}

function confirmDeleteItem() {
    console.log(itemToDelete.value);
    delete_item(itemToDelete.value);
    closeModal();
}

</script>