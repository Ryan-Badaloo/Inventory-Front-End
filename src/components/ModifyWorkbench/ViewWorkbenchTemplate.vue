<template>
<div>
    <SectionTemplate v-if="items.length > 0" template-name="Devices">
        <div class="relative overflow-x-auto">
                <table class="w-full table-fixed text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-[8vw]">
                            Brand
                        </th>
                        <th scope="col" class="px-6 py-3 w-[8vw]">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3 w-[9vw]">
                            Serial Number
                        </th>
                        <th scope="col" class="px-6 py-3 w-[8vw]">
                            Inventory Number
                        </th>
                        <th scope="col" class="px-6 py-3 w-[8vw]">
                            Model
                        </th>
                        <th scope="col" class="px-6 py-3 w-[9vw]">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 w-[8vw]">
                            Delivery Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedItems" :key="item.devices_id
" class="bg-white border-b border-gray-200 hover:bg-gray-200">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 w-[8vw] break-words whitespace-normal">
                            {{ item.brand }}
                        </td>
                        <td class="px-6 py-4 w-[8vw] break-words whitespace-normal">
                            {{ item.category }}
                        </td>
                        <td class="px-6 py-4 w-[9vw] break-words whitespace-normal">
                            {{ item.serial_number }}
                        </td>
                        <td class="px-6 py-4 w-[8vw] break-words whitespace-normal">
                            {{ item.inventory_number }}
                        </td>
                        <td class="px-6 py-4 w-[8vw] break-words whitespace-normal">
                            {{ item.model }}
                        </td>
                        <td class="px-6 py-4 w-[9vw] break-words whitespace-normal">
                            {{ item.status_description }}
                        </td>
                        <td class="px-6 py-4 w-[8vw] break-words whitespace-normal">
                            {{ item.delivery_date }}
                        </td>
                        <td class="px-6 py-4 inline-block align-middle w-[8vw] break-words whitespace-normal">
                            <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                            <div class="flex space-x-1">
                                <button @click="openDeleteModal(item.serial_number, item.brand, item.category, item.model, item.inventory_number)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
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

    <!-- THIS IS THE MODAL TO DELETE DEVICE -->
    <div v-show="showDeleteModal" @close="closeDeleteModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="deleteRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <!-- This is the error sign -->
            <div class="flex justify-center">
                <span class="material-icons !text-7xl text-red-500"> 
                    error
                </span>
            </div>

            <h1 class="text-2xl text-center font-bold p-2 text-black">
                CONFIRM DELETE!
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

                    <button @click="confirmRemoveItem" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import SectionTemplate from '@/components/SectionTemplate.vue';
import { ref, computed, onMounted, watch } from 'vue';
import { onClickOutside } from '@vueuse/core'
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10
const errorMessage = ref(null);

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});

async function getWorkbenchDevices() {
    const workbench_id = route.params.workbench_id;

    console.log("Workbench ID:", workbench_id);


    if (!workbench_id) {
        errorMessage.value = "Workbench ID is missing.";
        alert(errorMessage.value)
        return;
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                workbench_id: workbench_id,
            }
        });

        items.value = response.data
        console.log(items.value)

    } catch (error) {
        if (error.response?.status === 401) {
            router.push({name: 'UserLogin' });
            alert("Please Log In Again")
        }
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

// Automatically retrieve device when URL parameters change,
// including when the component first loads.
watch(
    () => [route.params.workbench_id],
    () => {
        getWorkbenchDevices();
    },
    { immediate: true }
);


// DELETE DEVICE REFS ////////////////////////////////////////////////////
const showDeleteModal = ref(false);
const deleteSerial = ref();
const deleteBrand = ref();
const deleteCategory = ref();
const deleteModel = ref();
const deleteInventory = ref();

//THIS IS THE DELETE SECTION/////////////////////////////////////////////////////////////////////////////
async function closeDeleteModal() {
    showDeleteModal.value = false;

    deleteSerial.value = null;
    deleteBrand.value = null;
    deleteCategory.value = null;
    deleteModel.value = null;
    deleteInventory.value = null;
}

async function openDeleteModal(serial_number, brand, category, model, inventory_number) {
    showDeleteModal.value = true;

    deleteSerial.value = serial_number;
    deleteBrand.value = brand;
    deleteCategory.value = category;
    deleteModel.value = model;
    deleteInventory.value = inventory_number;

}

async function confirmRemoveItem() {
    const workbench_id = route.params.workbench_id;

    try {
        console.log(deleteSerial)
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${useBaseURLComposable()}remove-workbench-item/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: deleteSerial.value,
                workbench_id: workbench_id
            }

        
        });

        alert(response.data.message)
        items.value = items.value.filter(item => item.serial_number !== deleteSerial.value)
        console.log("Item Has Been Deleted")
        closeDeleteModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteRef = ref(null)

onClickOutside(deleteRef, () => {
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