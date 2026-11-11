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
                    <tr 
                        v-for="item in paginatedItems" 
                        :key="item.devices_id" 
                        @dblclick="openDeviceDetails(item.serial_number, item.category)" 
                        :class="[
                                'border-b border-gray-200 cursor-pointer transition-colors duration-150',
                                selectedRows.has(item.devices_id)
                                    ? 'bg-blue-200 hover:bg-blue-300'
                                    : 'bg-white hover:bg-gray-200'
                            ]"
                        >
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
</template>

<script setup>
import SectionTemplate from './SectionTemplate.vue';
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const items = ref([]);
const currentPage = ref(1)
const itemsPerPage = 10
const errorMessage = ref(null);

// Highlight Rows
const selectedRows = ref(new Set())

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});


async function getClientDevices() {
    const client_id = route.params.client_id;

    console.log("Client ID:", client_id);

    if (!client_id) {
        errorMessage.value = "Client ID is missing.";
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
                client_id: client_id, 
            }
        });
        items.value = response.data
        console.log(items.value)
        
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
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

watch(
    () => [route.params.client_id],
    () => {
        getClientDevices();
    },
    { immediate: true }
);
</script>