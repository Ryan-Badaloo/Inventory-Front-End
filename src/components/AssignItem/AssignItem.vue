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
        <SectionTemplate v-if="items.length > 0" template-name="Assign Devices">
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
                                Client ID
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
                                {{ item.client_id }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                    <button @click="add_to_cart(item)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                        add
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

        <SectionTemplate v-if="cart.length > 0" template-name="Cart">
            <div class="mb-6 relative overflow-x-auto">
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
                                Client ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart" :key="item.Item_ID" class="bg-white border-b border-gray-200 hover:bg-gray-200">
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
                                {{ item.client_id }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
                                <button @click="remove_from_cart(item)" class="material-icons !text-4xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                close
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <div class="w-1/2 flex mb-6 group"> 
                <TextLabel fieldName="Choose Your Client" />

                <input list="allClients" name="allClient" id="allClient" :class="[option_field_class]" v-model="assignClientName">

                <datalist id="allClients">
                    <option v-for="client in allClients" :key="client.client_id" :value="`${client.firstname} ${client.lastname}`" class="text-black"></option>

                </datalist>
            </div>

            <AddItemButton button-name="Assign To Client" @click="assign_items()"/>

        </SectionTemplate>
    </div>

</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';
import AddItemButton from '../AddItemButton.vue';
import TextLabel from '../Fields/TextLabel.vue';
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


onMounted(() => {
  get_clients();
  console.log(allClients.value)
});

const cart = ref([]); //Store the items in the cart
const allClients = ref()

const assignClientName = ref("")
const assignClient = ref(null);

const test_brand = ref('');
const test_category = ref('Tablet');


watch(assignClientName, (newName) => {
  const match = allClients.value.find(
    client => `${client.firstname} ${client.lastname}` === newName
  );
  assignClient.value = match || null;
});


const device_type_search = ref();
const serial_number_search = ref();
const status_search = ref();
const division_search = ref();

async function get_items() {


    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-unassigned-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                device_type: device_type_search.value,
                serial_number: serial_number_search.value,
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

function remove_from_cart(item) {
    const index = cart.value.findIndex(cartItem => cartItem.devices_id === item.devices_id);

    if (index !== -1) {
        cart.value.splice(index, 1);
    }
}

function add_to_cart(item) {
  const alreadyInCart = cart.value.some(
    cartItem => cartItem.devices_id === item.devices_id
  );

  if (!alreadyInCart) {
    cart.value.push(item);
  } else {
    console.log("Device already in cart:", item.serial_number);
  }
}


async function get_clients() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-clients/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log(response.data)
        allClients.value = response.data
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find Client. Check console.");
    }
}

async function assign_items() {
    console.log(assignClient.value)
    console.log(assignClient.value?.email)

    console.log(cart.value)
    const token = localStorage.getItem('token');

    for (const device of cart.value) {
        console.log(device.serial_number)

        try {
            if (!assignClient.value?.client_id) {
                alert("Please select a client")
                return
            } else {
                const response = await axios.put(`${useBaseURLComposable()}assign-device/`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        device_sn: device.serial_number,
                        client_id: assignClient.value?.client_id
                    }
                });
                console.log(response.data)
                
            }
            
            
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to assign Device. Check console.");
        }
    }
    alert("Assignment was successful");
}

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