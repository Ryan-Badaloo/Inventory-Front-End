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
});

const cart = ref([]); //Store the items in the cart
const search_category = ref();
const search_filter = ref();
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



async function get_items() {
    console.log(search_category.value)
    console.log(search_filter.value)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-unassigned-items/`, {
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
            
            const response = await axios.put(`${useBaseURLComposable()}assign-device/`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    device_sn: device.serial_number,
                    client_id: assignClient.value?.client_id
                }
            });
            alert("Assignment was successful");
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to assign Device. Check console.");
        }
    }
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