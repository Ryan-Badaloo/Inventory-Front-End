<template>
    <SectionTemplate template-name="View Workbenches">
        <div>
            <SearchBar v-model="name" />
        </div>

        <div v-if="workbenches.length > 0" class="relative overflow-x-auto">
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
                        <tr v-for="workbench in paginatedItems" :key="workbench.workbench_id" class="bg-white border-bborder-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ workbench.workbench_name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ workbench.client_name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ workbench.date_created }}
                            </td>
                            <td class="px-6 py-4">
                                {{ workbench.added_by }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle w-[8vw] break-words whitespace-normal">
                                <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                                <div class="flex space-x-1">
                                    <button @click="openWorkbenchDevices(workbench.workbench_id)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    search
                                    </button>

                                </div>
                            </td>

                        </tr>

                    </tbody>
                </table>

                <!-- Pagination component -->
                <div class="pagination-overall-container">
                    <vue-awesome-paginate
                    :total-items="workbenches.length"
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
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'
import { useRouter } from 'vue-router';

import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';

const router = useRouter();

const name = ref('')
const workbenches = ref([])

const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return workbenches.value.slice(start, end);
});

let debounceTimeout = null

watch(name, (newVal) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
        get_workbenches()
    }, 500) // 2 seconds delay
})

onMounted(() => {
  console.log("Getting All Workbenches");
  get_workbenches();
});

async function get_workbenches() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-workbenches/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                name: name.value,
            }
        });
        workbenches.value = response.data
        console.log(workbenches.value)
    } catch (error) {
        console.error('Error finding Workbenches:', error.response?.data || error.message);
        alert("Failed to find Workbenches. Check console.");
    }
}


function openWorkbenchDevices(workbench_id) {
    router.push({
        name: 'ViewWorkbench',
        params: {
            workbench_id: workbench_id
        }
    });
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