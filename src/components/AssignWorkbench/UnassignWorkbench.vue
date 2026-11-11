<template>

    <div>
<!-- THIS DISPLAYS THE SEARCH BAR AND RADIO BUTTONS ////////////////////////////////////////////////////////////-->
        <div>
            <div class="grid grid-cols-4 gap-4 p-2">
                <!-- Workbench Name Search Bar -->
                <div>
                    <label
                        for="workbench_name"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Workbench Name
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
                            v-model="workbench_name"
                            id="workbench_name"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Workbench Name"
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
        <SectionTemplate v-if="items.length > 0" template-name="Unassign Workbench">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Workbench Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Client
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Added By
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in paginatedItems" :key="item.devices_id" @dblclick="openWorkbenchDevices(item.workbench_id)" class="bg-white cursor-pointer border-b border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.workbench_name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.client_name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.date_created }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.added_by }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                    <button @click="openUnassignModal(item.workbench_id)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
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
                        <div class="max-h-60 overflow-y-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead class="sticky top-0 z-10 text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Brand
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="device in workbench_devices" :key="device.devices_id" @click="openDeviceDetails(device.serial_number, device.category)" class="hover:bg-blue-100 bg-white border-b border-gray-200 hover:bg-gray-200">
                                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ device.serial_number }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ device.category }}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
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

import { useRouter } from 'vue-router';
const router = useRouter();

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

const workbench_name = ref();

const workbench_devices = ref([])

const unassign_id = ref()


async function get_items() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-assigned-workbenches/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                workbench_name: workbench_name.value,

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

function openWorkbenchDevices(workbench_id) {
    router.push({
        name: 'ViewWorkbench',
        params: {
            workbench_id: workbench_id
        }
    });
}





//THIS IS THE UNASSIGN SECTION/////////////////////////////////////////////////////////////////////////////
function closeUnassignModal() {
    showUnassignModal.value = false;

    workbench_devices.value = null;

}

async function openUnassignModal(workbench_id) {
    console.log("Selected Workbench:", workbench_id);

    unassign_id.value = workbench_id

    showUnassignModal.value = true;

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

        workbench_devices.value = response.data
        console.log(workbench_devices.value)

    } catch (error) {
        if (error.response?.status === 401) {
            router.push({name: 'UserLogin' });
            alert("Please Log In Again")
        }
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }

}

async function confirmUnassignItem() {
    try {
        const token = localStorage.getItem('token');
        await axios.post(`${useBaseURLComposable()}unassign-workbench/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                workbench_id: unassign_id.value,
            }
        });
        // items.value = items.value.filter(item => item.serial_number !== unassign_id.value)
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