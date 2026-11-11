<template>
<div>
    <div>
        <!-- THIS DISPLAYS THE SEARCH BAR AND RADIO BUTTONS ////////////////////////////////////////////////////////////-->
        <div>

            <!-- THESE ARE THE SEARCH FIELDS ////////////////////////////////////////////////////////////////////-->
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

                <!-- Inventory Number Search Bar -->
                <div>
                    <label
                        for="inventory_number"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Inventory Number
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
                            v-model="inventory_number_search"
                            id="inventory_number"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Inventory Number"
                        />

                    </div>
                </div>

                <!-- Client Search Bar -->
                <div>
                    <label
                        for="client"
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Client
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
                            v-model="client_search"
                            id="client"
                            class="block w-full p-3 ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm placeholder:text-gray-500 outline-none"
                            placeholder="Client"
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

                <!-- Verification Toggle Button -->
                <div>
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Verification Status
                    </label>

                    <button
                        type="button"
                        @click="verification = !verification"
                        :aria-pressed="verification"
                        :class="[
                            'w-full p-3 border rounded-lg shadow-sm text-sm  transition-all duration-200 cursor-pointer',

                            verification
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900 hover:bg-gray-100'
                        ]"
                    >
                        Not Verified
                    </button>
                </div>

                <!-- Delete Toggle Button -->
                <div>
                    <label
                        class="block mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Delete Status
                    </label>

                    <button
                        type="button"
                        @click="deletion = !deletion"
                        :aria-pressed="deletion"
                        :class="[
                            'w-full p-3 border rounded-lg shadow-sm text-sm  transition-all duration-200 cursor-pointer',

                            deletion
                                ? 'bg-blue-600 border-blue-600 text-white'
                                : 'bg-gray-50 border-gray-300 text-gray-900 hover:bg-gray-100'
                        ]"
                    >
                        To Delete
                    </button>
                </div>

                
            </div>

            <!-- THIS IS THE SEARCH BUTTON ////////////////////////////////////////////////////////////////////-->
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
                                Verify
                            </th>
                            <th scope="col" class="px-6 py-3 w-[8vw]">
                                Delete
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
                            <td class="px-6 py-4 w-[8vw] break-words whitespace-normal hover:bg-green-200 cursor-pointer" @click="openVerifyModal(item.serial_number)">
                                {{ item.verification }}
                            </td>
                            <td class="px-6 py-4 w-[8vw] break-words whitespace-normal hover:bg-red-200 cursor-pointer" @click="confirmDeleteItem(item.serial_number)">
                                {{ item.pending_delete }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle w-[8vw] break-words whitespace-normal">
                                <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                                <div class="grid grid-cols-2 gap-2 place-items-center">
                                    <button @click="openDeviceDetails(item.serial_number, item.category)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    search
                                    </button>

                                    <button @click="openCommentModal(item.devices_id, item.serial_number)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    comment
                                    </button>

                                    <button @click="openUpdateSection(item.serial_number, item.category)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    construction
                                    </button>

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
    </div>

    

    <!-- THIS IS THE MODAL TO SHOW DEVICE COMMENTS -->
    <div v-show="showCommentModal" @close="closeCommentModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="commentRef" class="p-2 z-50 w-9/10 mt-5 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Item Comments">
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="w-full flex items-center gap-8">
                        <CommentField class="flex-grow" id="item_comment" labelFor="item_comment" fieldName="Comment: " v-model="item_comment_text"/>
                        <button @click="add_comment(item_comment_text)" class="material-icons !text-4xl text-white cursor-pointer h-10 px-2 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                            add
                        </button>
                    </div>
                    <div v-if="commentData?.length > 0" class="grid grid-cols-1 gap-x-6 gap-y-4">
                        <div class="py-2">
                            <h1 class="font-bold text-2xl text-center">{{ commentItem }}</h1>
                        </div>
                        <div v-for="comment in commentData" :key="comment.comment_id" class="">
                            <div class="flex justify-between items-start p-4 bg-white border-2 border-gray-600 rounded-3xl">
                                <h1 class="flex-1 break-all">{{ comment.comment_value }}</h1>
                                <button @click="delete_comment(comment.comment_id)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer ml-4"> 
                                    delete
                                </button>
                            </div>
                            <div class="flex justify-center items-center">
                                <div class="bg-white w-fit border-2 border-gray-600 border-t-0">
                                    <h1 class="pl-4 pr-4 text-black">{{ comment.added_by }}</h1>
                                </div>
                                <div class="bg-white w-fit border-2 border-gray-600 border-l-0 border-t-0">
                                    <h1 class="pl-4 pr-4 text-black">{{ formatDateDisplay(comment.created_at) }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="p-4 bg-white border-2 border-gray-600 rounded-3xl">
                            <h1>No Comments Found</h1>
                        </div>
                    </div>
                    
                </div>
            </SectionTemplate>
        </div>
    </div>

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

                    <button @click="requestDeleteItem" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- THIS IS THE MODAL TO Verify DEVICE -->
    <div v-show="showVerifyModal" @close="closeVerifyModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="verifyRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <!-- This is the error sign -->
            <div class="flex justify-center">
                <span class="material-icons !text-7xl text-green-500"> 
                    error
                </span>
            </div>

            <h1 class="text-2xl text-center font-bold p-2 text-black">
                CONFIRM VERIFY!
            </h1>

            <div class="p-2 flex justify-center">
                <div class="flex flex-col">
                    <div class="">
                        <h1><span class="font-bold text-xl">Serial Number: {{ verifySerial }}</span></h1>
                    </div>

                    <button @click="confirmVerifyItem" class="mt-4 p-2 cursor-pointer bg-green-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>



</div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import { useBaseURLComposable } from '../../composable/useUrlcomposable.js';
import { useRouter } from 'vue-router';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import CommentField from '@/components/Fields/CommentField.vue';

const router = useRouter();

const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});


// DELETE DEVICE REFS ////////////////////////////////////////////////////
const showDeleteModal = ref(false);
const deleteSerial = ref();
const deleteBrand = ref();
const deleteCategory = ref();
const deleteModel = ref();
const deleteInventory = ref();

// COMMENT  REFS ////////////////////////////////////////////////////
const showCommentModal = ref(false);
const commentData = ref();
const commentItem = ref();
const commentID = ref();
const item_comment_text = ref();

const showVerifyModal = ref();
const verifySerial = ref();


///////////////////////////////////////////////////////////////////////////////////

const device_type_search = ref();
const serial_number_search = ref();
const inventory_number_search = ref();
const client_search = ref();
const status_search = ref();
const division_search = ref();
const verification = ref(false);
const deletion = ref(false);



async function get_items() {
    console.log("Device Type: ", device_type_search.value);
    console.log("Serial Number: ", serial_number_search.value);
    console.log("Inventory Number:", inventory_number_search.value);
    console.log("Client: ", client_search.value);
    console.log("Status: ", status_search.value);
    console.log("Division: ", division_search.value);
    console.log("Verification: ", verification.value);

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                device_type: device_type_search.value,
                serial_number: serial_number_search.value,
                inventory_number: inventory_number_search.value,
                client: client_search.value,
                status: status_search.value,
                division: division_search.value,
                verified: verification.value,
                to_delete: deletion.value,
                
            }
        });
        items.value = response.data
        console.log(items.value)
        
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }


    
} 

const formatDateDisplay = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// THIS IS THE UPDATE SECTION /////////////////////////////////////////////////////////////////
function openUpdateSection(serial_number, category) {
    router.push({
        name: 'UpdateItem',
        params: {
            serial_number: serial_number
        },
        query: {
            category: category
        }
    });
}


// THIS IS THE DETAILS SECTION /////////////////////////////////////////////////////////////////
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




//THIS IS THE COMMENT SECTION///////////////////////////////////////////////////////////////////////////////
async function openCommentModal(devices_id, serial_number) {
    console.log(devices_id)
    showCommentModal.value = true

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-comments/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                devices_id: devices_id,
            }
        });

        commentItem.value = serial_number
        commentID.value = devices_id
        commentData.value = response.data
        console.log(commentData.value)
        
    } catch (error) {
        console.error(error.response?.data || error.message);
        alert("Failed to assign Device. Check console.");
    }
}

function closeCommentModal() {
    console.log("Closing Comment Modal")
    commentItem.value = null
    commentID.value = null
    commentData.value = null
    showCommentModal.value = false

}

async function add_comment(comment) {

    const devices_id = commentID.value
    console.log(devices_id)
    console.log(comment)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}add-comments/`, { id: devices_id, comment: comment }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const second_response = await axios.get(`${useBaseURLComposable()}get-comments/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                devices_id: devices_id,
            }
        });

        commentData.value = second_response.data
        console.log(commentData.value)

        console.log("Comment Added Succefully")
        alert("Comment successfully added.", response.data);
        console.log(commentData.value)
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
    
}

async function delete_comment(comment) {
    console.log(comment)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${useBaseURLComposable()}delete-comment/`, {
            params: {
                id: comment
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.data.message === "Comment has been deleted") {

            commentData.value = commentData.value.filter(
                c => c.comment_id !== comment
            );

            console.log("Comment Deleted Successfully");
            alert(response.data.message);
        } else {
            alert(response.data.message);
        }

        console.log(commentData.value)

        
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
    
}


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

async function confirmDeleteItem(serial_number) {
    try {
        console.log(serial_number)
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${useBaseURLComposable()}delete-item/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: serial_number,
            }
        });
        
        console.log(response.data.message)
        alert(response.data.message)

        if (response.data.message == "Device has been deleted") {
            items.value = items.value.filter(item => item.serial_number !== serial_number)
        }
        

        closeDeleteModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

async function requestDeleteItem() {
    try {
        console.log(deleteSerial)
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}request-delete-item/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: deleteSerial.value,
            }
        });

        const device = items.value.find(
            item => item.serial_number === deleteSerial.value
        );

        // Update its pending_delete value
        if (device) {
            device.pending_delete = true;
        }

        console.log(response.data.message)
        alert(response.data.message)
        closeDeleteModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}


// THIS IS THE VERIFY SECTION //////////////////////////////////////////////////////////////////////////////
async function closeVerifyModal() {
    showVerifyModal.value = false;
    verifySerial.value = null;
}

async function openVerifyModal(serial_number) {
    showVerifyModal.value = true;
    verifySerial.value = serial_number
}

async function confirmVerifyItem() {
    try {
        console.log(verifySerial)
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}verify-item/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: verifySerial.value,
            }
        });

        const device = items.value.find(
            item => item.serial_number === verifySerial.value
        );

        // Update its pending_delete value
        if (device) {
            device.verification = true;
        }

        console.log("Item Has Been Verified")
        alert(response.data.message)
        closeVerifyModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////



const verifyRef = ref(null)
const deleteRef = ref(null)
const commentRef = ref(null)


onClickOutside(deleteRef, () => {
  if (showDeleteModal.value) {
    closeDeleteModal()
  }
})

onClickOutside(commentRef, () => {
  if (showCommentModal.value) {
    closeCommentModal()
  }
})

onClickOutside(verifyRef, () => {
  if (showVerifyModal.value) {
    closeVerifyModal()
  }
})

onMounted(() => {
    get_items();
});

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