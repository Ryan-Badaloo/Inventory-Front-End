<template>
    <SectionTemplate template-name="View Clients">
        <div>
            <SearchBar v-model="name" />
        </div>

        <div v-if="users.length > 0" class="relative overflow-x-auto">
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
                                Role
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date Created
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Last Updated
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in paginatedItems" :key="user.user_id
" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ user.firstname }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.lastname }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.email }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.role_id }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.date_created }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.last_updated }}
                            </td>
                        </tr>

                    </tbody>
                </table>

                <!-- Pagination component -->
                <div class="pagination-overall-container">
                    <vue-awesome-paginate
                    :total-items="users.length"
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

import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';


const name = ref('')
const users = ref([])

const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return users.value.slice(start, end);
});

let debounceTimeout = null

watch(name, (newVal) => {
    if (debounceTimeout) {
        clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
        get_users()
    }, 500) // 2 seconds delay
})

onMounted(() => {
  console.log("Getting All Users");
  get_users();
});

async function get_users() {

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-users/', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                name: name.value,
            }
        });
        users.value = response.data
        console.log(users.value)
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