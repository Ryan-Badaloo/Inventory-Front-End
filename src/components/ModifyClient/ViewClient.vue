<template>
    <SectionTemplate template-name="View Clients">
        <div>
            <SearchBar v-model="name" />
        </div>


        <div v-if="clients.length > 0" class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                Division
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Last Updated By
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Added By
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="client in paginatedItems" :key="client.client_id
" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                {{ client.division_id }}
                            </td>
                            <td class="px-6 py-4">
                                {{ client.date_created }}
                            </td>
                            <td class="px-6 py-4">
                                {{ client.last_updated }}
                            </td>
                            <td class="px-6 py-4">
                                {{ client.added_by }}
                            </td>
                        </tr>

                    </tbody>
                </table>

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
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import axios from 'axios';
import { useBaseURLComposable } from '../../composable/useUrlcomposable'
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';

const name = ref('')
const clients = ref([])

const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return clients.value.slice(start, end);
});

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
        console.error('Error finding Client:', error.response?.data || error.message);
        alert("Failed to find Client. Check console.");
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