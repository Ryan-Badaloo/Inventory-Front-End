<template>
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
                                <button class="p-2 cursor-pointer bg-blue-500 rounded-sm text-white font-bold hover:bg-blue-700">View</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </SectionTemplate>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SearchBar from '@/components/SearchBar.vue';
import SectionTemplate from './SectionTemplate.vue';

const filter = ref(); //store the text typed into the search bar
const items = ref([]); // Store the search results (list of items)


async function get_items() {
    try {
        const response = await axios.get('http://localhost:8000/get-items/', {
            params: {
                serial_number: "1234",
                brand: "HP",
                status: 1,
                division: 3
            }
        });
        console.log(response.data);

    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

</script>