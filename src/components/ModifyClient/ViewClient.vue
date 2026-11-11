<template>
    <div>
        <SectionTemplate template-name="View Clients">
            <div class="w-full min-w-0">
                <SearchBar v-model="name" />
            </div>


            <div v-if="clients.length > 0" class="w-full min-w-0 max-w-full">
                <div class="w-full max-w-full overflow-x-auto">
                    <table class="w-full min-w-max text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    First Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Last Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Parish
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Location Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Division
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Branch
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
                            <tr
                                v-for="client in paginatedItems"
                                :key="client.client_id"
                                @dblclick="viewClientDevices(client.client_id)"
                                :class="[
                                    'border-b border-gray-200 cursor-pointer transition-colors duration-150',
                                    selectedRows.has(client.client_id)
                                        ? 'bg-blue-200 hover:bg-blue-300'
                                        : 'bg-white hover:bg-gray-200'
                                ]"
                            >                            
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ client.firstname }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.lastname }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.email }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.phone_number }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.position }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.parish_name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.location_name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.ltype_name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.division_name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.branch_name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.date_created }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ client.added_by }}
                                </td>
                                <td class="px-6 py-4 inline-block align-middle">
                                        <button @click="openUnassignModal(client.client_id)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                        person_remove
                                        </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <!-- Pagination component -->
                <div class="pagination-overall-container">
                    <vue-awesome-paginate
                    :total-items="clients.length"
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
                                    <tr v-for="device in client_devices" :key="device.devices_id" @click="openDeviceDetails(device.serial_number, device.category)" class="cursor-pointer hover:bg-blue-100 bg-white border-b border-gray-200 hover:bg-gray-200">
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
import { ref, onMounted, computed, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios';

import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'
import { useRouter } from 'vue-router';

const router = useRouter();



const name = ref('')
const clients = ref([])
const client_devices = ref([])
const unassign_id = ref()

const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return clients.value.slice(start, end);
});

// Highlight Rows
const selectedRows = ref(new Set())

const showUnassignModal = ref(false);

function viewClientDevices(client_id) {
    
    console.log(client_id)

    router.push({
        name: 'ViewClientDevices',
        params: {
            client_id: client_id
        }
    });
}


let debounceTimeout = null

watch(name, (newVal) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
        get_clients()
    }, 500) // 2 seconds delay
})

onMounted(() => {
  console.log("Getting All Clients");
  get_clients();
});

async function get_clients() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-clients/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                name: name.value,
            }
        });
        clients.value = response.data
        console.log(clients.value)
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find Client. Check console.");
    }
}

//THIS IS THE UNASSIGN SECTION/////////////////////////////////////////////////////////////////////////////
function closeUnassignModal() {
    showUnassignModal.value = false;

    client_devices.value = null;

}

async function openUnassignModal(client_id) {
    console.log("Selected Workbench:", client_id);

    unassign_id.value = client_id

    showUnassignModal.value = true;

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                client_id: client_id,
            }
        });

        client_devices.value = response.data
        console.log(client_devices.value)

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
        console.log("This is the client id:", unassign_id.value)
        const token = localStorage.getItem('token');
        await axios.post(`${useBaseURLComposable()}unassign-all-client-devices/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                client_id: unassign_id.value,
            }
        });
        // items.value = items.value.filter(item => item.serial_number !== unassign_id.value)
        console.log("Items Have Been Unassigned")
        alert("Items Have Been Unassigned")
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