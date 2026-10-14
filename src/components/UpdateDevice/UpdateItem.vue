<template>
<div>
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
        <SectionTemplate v-if="items.length > 0" template-name="Update Devices">
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
                            <td class="px-6 py-4 w-[8vw] break-words whitespace-normal">
                                {{ item.delivery_date }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle w-[8vw] break-words whitespace-normal">
                                <!-- @click="openConfirmModal(item.Serial_Number, item.Brand, item.Model, item.Inventory_Number, item.System_Status)" -->
                                <div class="flex space-x-1">
                                    <button @click="openDeviceModal(item.serial_number, item.category)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    search
                                    </button>

                                    <button @click="openCommentModal(item.devices_id, item.serial_number)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                    comment
                                    </button>

                                    <button @click="openUpdateModal(item.serial_number, item.category)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
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

    <!-- THIS IS THE MODAL TO SHOW DEVICE DETAILS -->
    <div v-show="showDeviceModal" @close="closeDeviceModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="detailRef" class="p-2 z-50 w-9/10 mt-5 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Item Details">
                <!-- THIS IS THE DEVICE SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="deviceData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ deviceData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ deviceData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ deviceData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ deviceData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ deviceData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ deviceData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ deviceData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ deviceData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ deviceData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ deviceData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ deviceData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ deviceData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ deviceData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ deviceData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ deviceData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ deviceData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ deviceData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ deviceData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ deviceData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ deviceData.device_cost }}</h1>
                        </div>
                    </div>

                </div>

                <!-- THIS IS THE LAPTOP SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="laptopData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ laptopData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ laptopData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ laptopData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ laptopData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ laptopData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ laptopData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ laptopData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ laptopData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ laptopData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ laptopData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ laptopData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ laptopData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ laptopData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ laptopData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ laptopData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ laptopData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">CPU Type:</h1>
                            <h1 class="show_detail_body">{{ laptopData.cpu_type_id }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                            <h1 class="show_detail_body">{{ laptopData.hard_disk_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Capacity:</h1>
                            <h1 class="show_detail_body">{{ laptopData.memory_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Speed:</h1>
                            <h1 class="show_detail_body">{{ laptopData.processor_speed }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Type:</h1>
                            <h1 class="show_detail_body">{{ laptopData.processor_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Computer Name:</h1>
                            <h1 class="show_detail_body">{{ laptopData.computer_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ laptopData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Operating System:</h1>
                            <h1 class="show_detail_body">{{ laptopData.operating_system }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Microsoft Office Version:</h1>
                            <h1 class="show_detail_body">{{ laptopData.microsoft_office_version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Antivirus:</h1>
                            <h1 class="show_detail_body">{{ laptopData.antivirus }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Pdf:</h1>
                            <h1 class="show_detail_body">{{ laptopData.pdf_reader }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Returned Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Manufactured Date:</h1>
                            <h1 class="show_detail_body">{{ laptopData.manufactured_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Type:</h1>
                            <h1 class="show_detail_body">{{ laptopData.memory_type }}</h1>
                        </div>

                    </div>

                </div>

                <!-- THIS IS THE DESKTOP SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="desktopData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ desktopData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ desktopData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ desktopData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ desktopData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ desktopData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ desktopData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ desktopData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ desktopData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ desktopData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ desktopData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ desktopData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ desktopData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ desktopData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ desktopData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ desktopData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ desktopData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">CPU Type:</h1>
                            <h1 class="show_detail_body">{{ desktopData.cpu_type_id }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                            <h1 class="show_detail_body">{{ desktopData.hard_disk_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Capacity:</h1>
                            <h1 class="show_detail_body">{{ desktopData.memory_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Speed:</h1>
                            <h1 class="show_detail_body">{{ desktopData.processor_speed }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Type:</h1>
                            <h1 class="show_detail_body">{{ desktopData.processor_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Computer Name:</h1>
                            <h1 class="show_detail_body">{{ desktopData.computer_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ desktopData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Operating System:</h1>
                            <h1 class="show_detail_body">{{ desktopData.operating_system }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Microsoft Office Version:</h1>
                            <h1 class="show_detail_body">{{ desktopData.microsoft_office_version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Antivirus:</h1>
                            <h1 class="show_detail_body">{{ desktopData.antivirus }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Pdf:</h1>
                            <h1 class="show_detail_body">{{ desktopData.pdf_reader }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Returned Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Manufactured Date:</h1>
                            <h1 class="show_detail_body">{{ desktopData.manufactured_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Type:</h1>
                            <h1 class="show_detail_body">{{ desktopData.memory_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Form Factor:</h1>
                            <h1 class="show_detail_body">{{ desktopData.form_factor }}</h1>
                        </div>

                    </div>

                </div>

                <!-- THIS IS THE SERVER SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="serverData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ serverData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ serverData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ serverData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ serverData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ serverData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ serverData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ serverData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ serverData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ serverData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ serverData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ serverData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ serverData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ serverData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ serverData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ serverData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ serverData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">CPU Type:</h1>
                            <h1 class="show_detail_body">{{ serverData.cpu_type_id }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                            <h1 class="show_detail_body">{{ serverData.hard_disk_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Capacity:</h1>
                            <h1 class="show_detail_body">{{ serverData.memory_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Speed:</h1>
                            <h1 class="show_detail_body">{{ serverData.processor_speed }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Processor Type:</h1>
                            <h1 class="show_detail_body">{{ serverData.processor_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Computer Name:</h1>
                            <h1 class="show_detail_body">{{ serverData.computer_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ serverData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Operating System:</h1>
                            <h1 class="show_detail_body">{{ serverData.operating_system }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Microsoft Office Version:</h1>
                            <h1 class="show_detail_body">{{ serverData.microsoft_office_version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Antivirus:</h1>
                            <h1 class="show_detail_body">{{ serverData.antivirus }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Pdf:</h1>
                            <h1 class="show_detail_body">{{ serverData.pdf_reader }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Returned Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Manufactured Date:</h1>
                            <h1 class="show_detail_body">{{ serverData.manufactured_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Type:</h1>
                            <h1 class="show_detail_body">{{ serverData.memory_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Form Factor:</h1>
                            <h1 class="show_detail_body">{{ serverData.form_factor }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Raid Type:</h1>
                            <h1 class="show_detail_body">{{ serverData.raid_type }}</h1>
                        </div>

                    </div>

                </div>

                <!-- THIS IS THE TABLET SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="tabletData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ tabletData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ tabletData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ tabletData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ tabletData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ tabletData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ tabletData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ tabletData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ tabletData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ tabletData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ tabletData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ tabletData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ tabletData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ tabletData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">IMEI Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.imei_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Operating System:</h1>
                            <h1 class="show_detail_body">{{ tabletData.operating_system }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Version:</h1>
                            <h1 class="show_detail_body">{{ tabletData.version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                            <h1 class="show_detail_body">{{ tabletData.hard_disk_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Memory Capacity:</h1>
                            <h1 class="show_detail_body">{{ tabletData.memory_capacity }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Returned Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.return_date }}</h1>
                        </div>

                    </div>

                    <h1 class="text-2xl font-bold text-gray-500 [-webkit-text-stroke:1px_black] mt-8 mb-3">Bag Information</h1>

                    <div v-if="tabletData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Ministry Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_ministry_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assignment Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_assignment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Bag Type:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Bag Fabric Type:</h1>
                            <h1 class="show_detail_body">{{ tabletData.bag_fabric_type }}</h1>
                        </div>
                    </div>

                    <h1 class="text-2xl font-bold text-gray-500 [-webkit-text-stroke:1px_black] mt-8 mb-3">Adapter Information</h1>

                    <div v-if="tabletData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Ministry Number:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_ministry_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assignment Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_assignment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ tabletData.adapter_bos_date }}</h1>
                        </div>
                    </div>
                </div>

                <!-- THIS IS THE MOUSE KEYBOARD SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="mouseKeyboardData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Connection Type:</h1>
                            <h1 class="show_detail_body">{{ mouseKeyboardData.connection_type }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE SCANNER SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="scannerData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ scannerData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ scannerData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ scannerData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ scannerData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ scannerData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ scannerData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ scannerData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ scannerData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ scannerData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ scannerData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ scannerData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ scannerData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ scannerData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ scannerData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ scannerData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ scannerData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ scannerData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ scannerData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ scannerData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ scannerData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Connection Type:</h1>
                            <h1 class="show_detail_body">{{ scannerData.connection_type }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE SURGE PROTECTOR SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="surgeProtectorData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Number Of Outlets:</h1>
                            <h1 class="show_detail_body">{{ surgeProtectorData.number_of_outlets }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE UPS SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="upsData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ upsData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ upsData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ upsData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ upsData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ upsData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ upsData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ upsData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ upsData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ upsData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ upsData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ upsData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ upsData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ upsData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ upsData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ upsData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ upsData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ upsData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ upsData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ upsData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ upsData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Number Of Outlets:</h1>
                            <h1 class="show_detail_body">{{ upsData.number_of_outlets }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Return Date:</h1>
                            <h1 class="show_detail_body">{{ upsData.return_date }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE SPEAKER SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="speakerData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ speakerData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ speakerData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ speakerData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ speakerData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ speakerData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ speakerData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ speakerData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ speakerData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ speakerData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ speakerData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ speakerData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ speakerData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ speakerData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ speakerData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ speakerData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ speakerData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ speakerData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ speakerData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ speakerData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ speakerData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Number Of Speakers:</h1>
                            <h1 class="show_detail_body">{{ speakerData.number_of_speakers }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Return Date:</h1>
                            <h1 class="show_detail_body">{{ speakerData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Speaker Type:</h1>
                            <h1 class="show_detail_body">{{ speakerData.speaker_type }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE WEBCAM SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="webcamData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ webcamData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ webcamData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ webcamData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ webcamData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ webcamData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ webcamData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ webcamData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ webcamData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ webcamData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ webcamData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ webcamData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ webcamData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ webcamData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ webcamData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ webcamData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ webcamData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ webcamData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ webcamData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ webcamData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ webcamData.device_cost }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE OTHER EQUIPMENT SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="otherEquipmentData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Equipment type:</h1>
                            <h1 class="show_detail_body">{{ otherEquipmentData.equipment_type }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE PRINTER SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="printerData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ printerData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ printerData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ printerData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ printerData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ printerData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ printerData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ printerData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ printerData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ printerData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ printerData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ printerData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ printerData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ printerData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ printerData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ printerData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ printerData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ printerData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ printerData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ printerData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ printerData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">IP Address ID:</h1>
                            <h1 class="show_detail_body">{{ printerData.ip_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Feature ID:</h1>
                            <h1 class="show_detail_body">{{ printerData.feature }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Connection Type:</h1>
                            <h1 class="show_detail_body">{{ printerData.connection_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Return Date:</h1>
                            <h1 class="show_detail_body">{{ printerData.return_date }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE PROJECTOR SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="projectorData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ projectorData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ projectorData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ projectorData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ projectorData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ projectorData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ projectorData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ projectorData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ projectorData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ projectorData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ projectorData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ projectorData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ projectorData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ projectorData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ projectorData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ projectorData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ projectorData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ projectorData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ projectorData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ projectorData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ projectorData.device_cost }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE CRAV SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="cravData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ cravData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ cravData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ cravData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ cravData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ cravData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ cravData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ cravData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ cravData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ cravData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ cravData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ cravData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ cravData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ cravData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ cravData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ cravData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ cravData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ cravData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ cravData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ cravData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ cravData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Name:</h1>
                            <h1 class="show_detail_body">{{ cravData.name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">IP Address ID:</h1>
                            <h1 class="show_detail_body">{{ cravData.ip_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ cravData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Meeting Room:</h1>
                            <h1 class="show_detail_body">{{ cravData.meeting_room }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Equipment Type:</h1>
                            <h1 class="show_detail_body">{{ cravData.equipment_type }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE NETWORK SWITCH SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="networkSwitchData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Return Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Mac Address:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.mac_address }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Size:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.device_size }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Firmware Type:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.firmware_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Firmware Version:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.firmware_version }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Name:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.device_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Manufactured Date:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.manufactured_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Physical Location:</h1>
                            <h1 class="show_detail_body">{{ networkSwitchData.physical_location }}</h1>
                        </div>
                            
                    </div>
                </div>

                <!-- THIS IS THE MONITOR SECTION -->
                <div class="max-h-[75vh] overflow-y-auto pr-2">
                    <div v-if="monitorData" class="grid grid-cols-2 gap-x-6 gap-y-2">
                        <div class="flex">
                            <h1 class="show_detail_head">Category: </h1>
                            <h1 class="show_detail_body">{{ monitorData.category }}</h1>
                        </div>

                        <div class="flex">
                            <h1 class="show_detail_head">Brand:</h1>
                            <h1 class="show_detail_body">{{ monitorData.brand }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Model:</h1>
                            <h1 class="show_detail_body">{{ monitorData.model }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Serial Number:</h1>
                            <h1 class="show_detail_body">{{ monitorData.serial_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Inventory Number:</h1>
                            <h1 class="show_detail_body">{{ monitorData.inventory_number }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Delivery Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.delivery_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployment Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.deployment_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Status:</h1>
                            <h1 class="show_detail_body">{{ monitorData.status_description }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Division:</h1>
                            <h1 class="show_detail_body">{{ monitorData.division_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Client Name:</h1>
                            <h1 class="show_detail_body">{{ monitorData.client_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Added By:</h1>
                            <h1 class="show_detail_body">{{ monitorData.added_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Last Updated By:</h1>
                            <h1 class="show_detail_body">{{ monitorData.last_updated_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Repaired Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.repaired_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.bos_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">BOS By:</h1>
                            <h1 class="show_detail_body">{{ monitorData.bos_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Deployed By:</h1>
                            <h1 class="show_detail_body">{{ monitorData.deployed_by }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Assigned On:</h1>
                            <h1 class="show_detail_body">{{ monitorData.assigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Unassigned On:</h1>
                            <h1 class="show_detail_body">{{ monitorData.unassigned_on }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Supplier Name:</h1>
                            <h1 class="show_detail_body">{{ monitorData.supplier_name }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Device Cost:</h1>
                            <h1 class="show_detail_body">{{ monitorData.device_cost }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty Start Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.warranty_start_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Warranty End Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.warranty_end_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Return Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.return_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Manufactured Date:</h1>
                            <h1 class="show_detail_body">{{ monitorData.manufactured_date }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Monitor Size:</h1>
                            <h1 class="show_detail_body">{{ monitorData.monitor_size }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Monitor Type:</h1>
                            <h1 class="show_detail_body">{{ monitorData.monitor_type }}</h1>
                        </div>
                        <div class="flex">
                            <h1 class="show_detail_head">Monitor Function:</h1>
                            <h1 class="show_detail_body">{{ monitorData.monitor_function }}</h1>
                        </div>
                    </div>
                </div>
            </SectionTemplate>
        </div>
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
                            <h1 class="pl-4 text-black">{{ formatDateDisplay(comment.created_at) }}</h1>
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

    <!-- THIS IS THE MODAL TO UPDATE DEVICE -->
    <div v-show="showUpdateModal" @close="closeUpdateModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="updateRef" class="p-2 z-50 w-9/10 mt-5 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <SectionTemplate template-name="Update {{Item}}">
                <form @submit.prevent="updateDevice" class="max-h-[75vh] overflow-y-auto pr-2">
                    <!-- THIS IS THE BASE -->
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="brand" labelFor="brand" fieldName="Brand: " v-model="brand"/>

                        <TextField id="model" labelFor="model" fieldName="Model: " v-model="model"/>

                        <TextField id="inventory_number" labelFor="inventory_number" fieldName="Inventory Number: " v-model="inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <!-- BOS Date date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="bos_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="bos_date" fieldName="BOS Date: "/>
                        </div>

                        <TextField id="supplier_name" labelFor="supplier_name" fieldName="Supplier Name: " v-model="supplier_name"/>

                        <TextField id="device_cost" labelFor="device_cost" fieldName="Device Cost: " v-model="device_cost"/>

                        <!-- pdf reader -->
                        <!-- <div class="flex flex-row-reverse mb-6 group">
                            <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="file_input" type="file" multiple>
                            <TextLabel labelFor="file_input" fieldName="Upload File: "/>
                        </div> -->

                        <!-- pdf reader -->
                        <!-- <div class="flex flex-row-reverse mb-6 group">
                            <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="file_input" type="file" multiple>
                            <TextLabel labelFor="file_input" fieldName="Upload File: "/>
                        </div> -->

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="status" :class="[option_field_class]" class="bg-white" v-model.number="status">
                                <option :value=null selected class="text-blue-100"></option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="status" fieldName="System Status: "/>
                        </div>
                    </div>

                    <!-- THIS IS THE LAPTOP SECTION -->
                    <div v-if="isLaptop == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="hard_disk_capacity" labelFor="hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="hard_disk_capacity"/>

                            <TextField id="memory_capacity" labelFor="memory_capacity" fieldName="Memory Capacity: " v-model="memory_capacity"/>

                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/>
                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="manufactured_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="manufactured_date" fieldName="Manufactured Date: "/>
                            </div>

                            <TextField id="memory_type" labelFor="memory_type" fieldName="Memory Type: " v-model="memory_type"/>


                            <TextField id="operating_system" labelFor="operating_system" fieldName="Operating System: " v-model="operating_system"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="cpu_type" :class="[option_field_class]" class="bg-white" v-model="cpu_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                                </select>
                                <TextLabel labelFor="cpu_type" fieldName="CPU Type:" />
                            </div>

                            <TextField id="processor_speed" labelFor="processor_speed" fieldName="Processor Speed: " v-model="processor_speed"/>

                            <TextField id="processor_type" labelFor="processor_type" fieldName="Processor Type: " v-model="processor_type"/>

                            <TextField id="computer_name" labelFor="computer_name" fieldName="Computer Name: " v-model="computer_name"/>

                            <TextField id="ms_office_version" labelFor="ms_office_version" fieldName="MS Office Version: " v-model="ms_office_version"/>

                            <TextField id="antivirus" labelFor="antivirus" fieldName="Antivirus: " v-model="antivirus"/>

                        </div>
                    </div>

                    <!-- THIS IS THE DESKTOP SECTION -->
                    <div v-if="isDesktop == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="hard_disk_capacity" labelFor="hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="hard_disk_capacity"/>

                            <TextField id="memory_capacity" labelFor="memory_capacity" fieldName="Memory Capacity: " v-model="memory_capacity"/>

                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/>
                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="manufactured_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="manufactured_date" fieldName="Manufactured Date: "/>
                            </div>

                            <TextField id="memory_type" labelFor="memory_type" fieldName="Memory Type: " v-model="memory_type"/>


                            <TextField id="operating_system" labelFor="operating_system" fieldName="Operating System: " v-model="operating_system"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="cpu_type" :class="[option_field_class]" class="bg-white" v-model="cpu_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                                </select>
                                <TextLabel labelFor="cpu_type" fieldName="CPU Type:" />
                            </div>

                            <TextField id="processor_speed" labelFor="processor_speed" fieldName="Processor Speed: " v-model="processor_speed"/>

                            <TextField id="processor_type" labelFor="processor_type" fieldName="Processor Type: " v-model="processor_type"/>

                            <TextField id="computer_name" labelFor="computer_name" fieldName="Computer Name: " v-model="computer_name"/>

                            <TextField id="ms_office_version" labelFor="ms_office_version" fieldName="MS Office Version: " v-model="ms_office_version"/>

                            <TextField id="antivirus" labelFor="antivirus" fieldName="Antivirus: " v-model="antivirus"/>

                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="form_factor" :class="[option_field_class]" class="bg-white" v-model.number="form_factor">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="form_factor in form_factors" :key="form_factor.form_factor_id" :value=form_factor.form_factor_id class="text-black">{{ form_factor.form_factor_description }}</option>
                                </select>
                                <TextLabel labelFor="form_factor" fieldName="Device Form Factor" />
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE SERVER SECTION -->
                    <div v-if="isServer == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="hard_disk_capacity" labelFor="hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="hard_disk_capacity"/>

                            <TextField id="memory_capacity" labelFor="memory_capacity" fieldName="Memory Capacity: " v-model="memory_capacity"/>

                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/>
                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="manufactured_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="manufactured_date" fieldName="Manufactured Date: "/>
                            </div>

                            <TextField id="memory_type" labelFor="memory_type" fieldName="Memory Type: " v-model="memory_type"/>


                            <TextField id="operating_system" labelFor="operating_system" fieldName="Operating System: " v-model="operating_system"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="cpu_type" :class="[option_field_class]" class="bg-white" v-model="cpu_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                                </select>
                                <TextLabel labelFor="cpu_type" fieldName="CPU Type:" />
                            </div>

                            <TextField id="processor_speed" labelFor="processor_speed" fieldName="Processor Speed: " v-model="processor_speed"/>

                            <TextField id="processor_type" labelFor="processor_type" fieldName="Processor Type: " v-model="processor_type"/>

                            <TextField id="computer_name" labelFor="computer_name" fieldName="Computer Name: " v-model="computer_name"/>

                            <TextField id="ms_office_version" labelFor="ms_office_version" fieldName="MS Office Version: " v-model="ms_office_version"/>

                            <TextField id="antivirus" labelFor="antivirus" fieldName="Antivirus: " v-model="antivirus"/>

                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="form_factor" :class="[option_field_class]" class="bg-white" v-model.number="form_factor">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="form_factor in form_factors" :key="form_factor.form_factor_id" :value=form_factor.form_factor_id class="text-black">{{ form_factor.form_factor_description }}</option>
                                </select>
                                <TextLabel labelFor="form_factor" fieldName="Device Form Factor" />
                            </div>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="raid_type" :class="[option_field_class]" class="bg-white" v-model.number="raid_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="raid_type in raid_types" :key="raid_type.raid_type_id" :value=raid_type.raid_type_id class="text-black">{{ raid_type.raid_type_description }}</option>
                                </select>
                                <TextLabel labelFor="raid_type" fieldName="Device Raid Type" />
                            </div>

                            <TextField id="number_hard_drive" labelFor="number_hard_drive" fieldName="Number Of Hard Drives: " v-model="number_hard_drive"/>

                            <TextField id="number_power_supply" labelFor="number_power_supply" fieldName="Number Of Power Supply: " v-model="number_power_supply"/>

                        </div>

                    </div>

                    <!-- THIS IS THE TABLET SECTION -->
                    <div v-if="isTablet == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="hard_disk_capacity" labelFor="hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="hard_disk_capacity"/>

                            <TextField id="memory_capacity" labelFor="memory_capacity" fieldName="Memory Capacity: " v-model="memory_capacity"/>

                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>



                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="device_size" labelFor="device_size" fieldName="Device Size: " v-model="device_size"/>

                            <TextField id="operating_system" labelFor="operating_system" fieldName="Operating System: " v-model="operating_system"/>

                            <TextField id="imei_number" labelFor="imei_number" fieldName="IMEI Number: " v-model="imei_number"/>

                            <TextField id="version" labelFor="version" fieldName="Version: " v-model="version"/>

                        </div>
                    </div>

                    <!-- THIS IS THE MOUSE SECTION -->
                    <div v-if="isMouseKeyboard == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="connection_type" :class="[option_field_class]" class="bg-white" v-model.number="connection_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                                </select>
                                <TextLabel labelFor="connection_type" fieldName="Connection Type: "/>
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE SCANNER SECTION -->
                    <div v-if="isScanner == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/>

                            <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: " v-model="ip_address"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="connection_type" :class="[option_field_class]" class="bg-white" v-model.number="connection_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                                </select>
                                <TextLabel labelFor="connection_type" fieldName="Connection Type: "/>
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE SURGE PROTECTOR SECTION -->
                    <div v-if="isSurgeProtector == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="number_outlets" labelFor="number_outlets" fieldName="Number Of Outlets: " v-model="number_outlets"/>
                        </div>
                    </div>

                    <!-- THIS IS THE UPS SECTION -->
                    <div v-if="isUPS == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="number_outlets" labelFor="number_outlets" fieldName="Number Of Outlets: " v-model="number_outlets"/>
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE SPEAKER SECTION -->
                    <div v-if="isSpeaker == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="speaker_type" :class="[option_field_class]" class="bg-white" v-model.number="speaker_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="speaker_type in speaker_types" :key="speaker_type.speaker_type_id" :value=speaker_type.speaker_type_id class="text-black">{{ speaker_type.speaker_type_description }}</option>
                                </select>
                                <TextLabel labelFor="speaker_type" fieldName="Speaker Type: "/>
                            </div>

                            <TextField id="number_speakers" labelFor="number_speakers" fieldName="Number Of Speakers: " v-model="number_speakers"/>
                        </div>
                    </div>

                    <!-- THIS IS THE OTHER EQUIPMENT SECTION -->
                    <div v-if="isOtherEquipment == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="other_equipment_type" labelFor="other_equipment_type" fieldName="Equipment Type: " v-model="other_equipment_type"/>
                        </div>
                    </div>

                    <!-- THIS IS THE PRINTER SECTION -->
                    <div v-if="isPrinter == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="printer_features" :class="[option_field_class]" v-model.number="printer_features">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="feature in features" :key="feature.feature_id" :value=feature.feature_id class="text-black">{{ feature.feature_description }}</option>

                                </select>
                                <TextLabel labelFor="printer_features" fieldName="Features: "/>
                            </div>

                            <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: " v-model="ip_address"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="connection_type" :class="[option_field_class]" v-model.number="connection_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>

                                </select>
                                <TextLabel labelFor="connection_type" fieldName="Connection Type: "/>
                            </div>

                        </div>                
                    </div>

                    <!-- THIS IS THE CRAV SECTION -->
                    <div v-if="isCRAV == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="crav_equipment_type" :class="[option_field_class]" class="bg-white" v-model.number="crav_equipment_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="crav_equipment_type in crav_equipment_types" :key="crav_equipment_type.crav_equipment_type_id" :value=crav_equipment_type.crav_equipment_type_id class="text-black">{{ crav_equipment_type.crav_equipment_type_description }}</option>

                                </select>
                                <TextLabel labelFor="crav_equipment_type" fieldName="Equipment Type: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="name" labelFor="name" fieldName="Device Name: " v-model="name"/>

                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/> 

                            <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: " v-model="ip_address"/>  

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="meeting_room" :class="[option_field_class]" class="bg-white" v-model="meeting_room">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="meeting_room in meeting_rooms" :key="meeting_room.meeting_room_id" :value=meeting_room.meeting_room_id class="text-black">{{ meeting_room.meeting_room_description }}</option>

                                </select>
                                <TextLabel labelFor="meeting_room" fieldName="Meeting Room: "/>
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE NETWORK SWITCH SECTION -->
                    <div v-if="isNetworkSwitch == true">
                        <div class="grid grid-cols-2 gap-x-6">


                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                            <TextField id="mac_address" labelFor="mac_address" fieldName="Mac Address: " v-model="mac_address"/>

                            <TextField id="number_ports" labelFor="number_ports" fieldName="Number Of Ports: " v-model="number_ports"/>

                            <TextField id="device_size" labelFor="device_size" fieldName="Device Size: " v-model="device_size"/>

                            <TextField id="firmware_type" labelFor="firmware_type" fieldName="Firmware Type: " v-model="firmware_type"/>

                            <TextField id="firmware_version" labelFor="firmware_version" fieldName="Firmware Version: " v-model="firmware_version"/>

                            <TextField id="device_name" labelFor="device_name" fieldName="Device Name: " v-model="device_name"/>

                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="manufactured_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="manufactured_date" fieldName="Manufactured Date: "/>
                            </div>
                        </div>
                    </div>

                    <!-- THIS IS THE MONITOR SECTION -->
                    <div v-if="isMonitor == true">
                        <div class="grid grid-cols-2 gap-x-6">
                            <!-- warranty start date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_start_date" 
                                    :enable-time-picker="false" 
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_start_date" fieldName="Warranty Start Date: "/>
                            </div>

                            <!-- warranty end date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="warranty_end_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="warranty_end_date" fieldName="Warranty End Date: "/>
                            </div>

                            <!-- returned date -->
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="returned_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="returned_date" fieldName="Returned Date: "/>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-6">
                        </div>


                        <div class="grid grid-cols-2 gap-x-6">
                            <div class="flex flex-row-reverse mb-6 group">
                                <VueDatePicker 
                                    v-model="manufactured_date" 
                                    :enable-time-picker="false" 
                                    :input-class-name="'p-0 bg-green-500'"
                                    placeholder="Enter in the format MM/DD/YYY"
                                    text-input 
                                    :class="[date_field_class]">
                                </VueDatePicker>
                                <TextLabel labelFor="manufactured_date" fieldName="Manufactured Date: "/>
                            </div>

                            <TextField id="size" labelFor="size" fieldName="Monitor Size: " v-model="size"/>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="monitor_type" :class="[option_field_class]" class="bg-white" v-model.number="monitor_type">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="monitor_type in monitor_types" :key="monitor_type.monitor_type_id" :value=monitor_type.monitor_type_id class="text-black">{{ monitor_type.monitor_type_description }}</option>

                                </select>
                                <TextLabel labelFor="monitor_type" fieldName="Monitor Type: "/>
                            </div>

                            <div class="flex flex-row-reverse mb-6 group">
                                <select id="monitor_function" :class="[option_field_class]" class="bg-white" v-model.number="monitor_function">
                                    <option :value=null selected class="text-blue-100"></option>
                                    <option v-for="monitor_function in monitor_functions" :key="monitor_function.monitor_function_id" :value=monitor_function.monitor_function_id class="text-black">{{ monitor_function.monitor_function_description }}</option>

                                </select>
                                <TextLabel labelFor="function" fieldName="Monitor Function: "/>
                            </div>
                        </div>                
                    </div>

                    





                    <!-- THIS IS THE LOCATIONS SECTION -->
                     <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="parish" :class="[option_field_class]" class="bg-white" v-model.number="parish">
                                <option :value=null selected class="text-blue-100"></option>
                                <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                            </select>
                            <TextLabel labelFor="parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="location_type" :class="[option_field_class]" class="bg-white" v-model.number="location_type">
                                <option :value=null selected class="text-blue-100"></option>
                                <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                            </select>
                            <TextLabel labelFor="location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="location" :class="[option_field_class]" class="bg-white" v-model.number="location">
                                <option :value=null selected class="text-blue-100"></option>
                                <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                            </select>
                            <TextLabel labelFor="location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="division" :class="[option_field_class]" class="bg-white" v-model.number="division">
                                <option :value=null selected class="text-blue-100"></option>
                                <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                            </select>
                            <TextLabel labelFor="division" fieldName="Division" />
                        </div>
                    </div>
                    

                    <div class="flex justify-center">
                        <AddItemButton buttonName="Update Item"/>
                    </div>
                </form>

                
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

                    <button @click="confirmDeleteItem" class="mt-4 p-2 cursor-pointer bg-red-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>



</div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import axios from 'axios';
import SectionTemplate from '../SectionTemplate.vue';
import SearchBar from '../SearchBar.vue';
import { useBaseURLComposable } from '../../composable/useUrlcomposable';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import CommentField from '@/components/Fields/CommentField.vue';
import UpdateModal from './UpdateModal.vue';

import { getStatuses, getRaidTypes, getMonitorFunctions, getMonitorTypes, getMeetingRooms, getCRAVEquipmentTypes, getSpeakerTypes, getCPUTypes, getFormFactors, getConnectionTypes, getPrinterFeatures, option_field_class, date_field_class, getDivisions, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';

const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});


// DEVICE DETAIL REFS ///////////////////////////////////////////
const showDeviceModal = ref(false);
const deviceData = ref();
const laptopData = ref();
const desktopData = ref();
const serverData = ref();
const tabletData = ref();
const mouseKeyboardData = ref();
const scannerData = ref();
const surgeProtectorData = ref();
const upsData = ref();
const speakerData = ref();
const webcamData = ref();
const otherEquipmentData = ref();
const printerData = ref();
const projectorData = ref();
const networkSwitchData = ref();
const cravData = ref();
const monitorData = ref();

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


// UPDATE SECTION///////////////////////////////////////////////////////////////////////////////////
const showUpdateModal = ref(false)
const isOtherDevice = ref(false);
const isLaptop = ref(false);
const isDesktop = ref(false);
const isServer = ref(false);
const isTablet = ref(false);
const isMouseKeyboard = ref(false);
const isScanner = ref(false);
const isSurgeProtector = ref(false);
const isUPS = ref(false);
const isSpeaker = ref(false);
const isWebcam = ref(false);
const isPrinter = ref(false);
const isOtherEquipment = ref(false);
const isCRAV = ref(false);
const isNetworkSwitch = ref(false);
const isMonitor = ref(false);



const statuses = ref([])
const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])
const cpu_types = ref([])
const connection_types = ref([])
const features = ref([]);
const form_factors = ref([])
const speaker_types = ref([])
const crav_equipment_types = ref([])
const meeting_rooms = ref([])
const monitor_types = ref([])
const monitor_functions = ref([])
const raid_types = ref([])




const updateSerial = ref();
const updateCategory = ref();

const fieldNames = [
    "brand", "model", "serial_number", "inventory_number",
    "delivery_date", "deployment_date", "bos_date", "supplier_name", "device_cost", "status",
    "hard_disk_capacity", "memory_capacity", "warranty_start_date",
    "warranty_end_date", "returned_date", "mac_address", "manufactured_date", "memory_type",
    "operating_system", "cpu_type", "processor_speed",
    "processor_type", "computer_name", "ms_office_version",
    "antivirus", "form_factor", "raid_type", "number_hard_drive", "number_power_supply", "parish", "location_type",
    "device_size", "imei_number", "version",
    "connection_type",
    "ip_address",
    "speaker_type", "number_speakers",
    "number_outlets",
    "other_equipment_type",
    "printer_features",
    "crav_equipment_type", "name", "meeting_room",
    "number_ports", "firmware_type", "firmware_version", "device_name",
    "size", "monitor_function", "monitor_type",
    "location", "division", "comment"
];

const refs = {};

fieldNames.forEach(name => {
    const key = `${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* refs[key] = ref(saved || null); */
    refs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(refs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
});

const {
    brand,
    model,
    serial_number,
    inventory_number,
    delivery_date,
    deployment_date,
    bos_date,
    supplier_name,
    device_cost,
    status,
    hard_disk_capacity,
    memory_capacity,
    warranty_start_date,
    warranty_end_date,
    returned_date,
    mac_address,
    manufactured_date,
    memory_type,
    operating_system,
    cpu_type,
    processor_speed,
    processor_type,
    computer_name,
    ms_office_version,
    antivirus,
    form_factor,
    raid_type,
    number_hard_drive,
    number_power_supply,
    device_size,
    imei_number,
    version,
    connection_type,
    ip_address,
    number_outlets,
    speaker_type,
    number_speakers,
    other_equipment_type,
    printer_features,
    crav_equipment_type,
    name,
    meeting_room,
    number_ports,
    firmware_type,
    firmware_version,
    device_name,
    size,
    monitor_type,
    monitor_function,
    
    parish,
    location_type,
    location,
    division,
    comment,
} = refs;

onMounted(async () => {
  try {
    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();

    cpu_types.value = await getCPUTypes();

    form_factors.value = await getFormFactors();

    raid_types.value = await getRaidTypes();

    connection_types.value = await getConnectionTypes();

    features.value = await getPrinterFeatures();

    speaker_types.value = await getSpeakerTypes();

    crav_equipment_types.value = await getCRAVEquipmentTypes();

    meeting_rooms.value = await getMeetingRooms();

    monitor_types.value = await getMonitorTypes();

    monitor_functions.value = await getMonitorFunctions();

    if (location.value) {
        locationChange(location.value)
    } else if (parish.value) {
        parishChange(parish.value)
    }

  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

async function parishChange(parishValue) {
    if (location.value == null || !location.value) {

        try {
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);

        divisions.value = await getParishDivisions(parishValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);
    }
}

async function locationChange(locationValue) {
    if (location.value != null) {

        try {
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        divisions.value = await getLocationDivisions(locationValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        console.log(parish.value)
        divisions.value = await getParishDivisions(parish.value);
        console.log(divisions.value);
    }
}

watch (
    parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", parish.value, "type:", typeof parish.value);
        console.log("location value:", location.value, "type:", typeof location.value);

        parishChange(newParish)
    }
)

watch (
    location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", parish.value)
        console.log("Divisions:", division.value)

        console.log("location value:", location.value);
        locationChange(newLocation)
        
    }
)


///////////////////////////////////////////////////////////////////////////////////

const search_category = ref();
const search_filter = ref();

const device_type_search = ref();
const serial_number_search = ref();
const client_search = ref();
const status_search = ref();
const division_search = ref();



async function get_items() {
    console.log("Device Type: ", device_type_search.value);
    console.log("Serial Number: ", serial_number_search.value);
    console.log("Client: ", client_search.value);
    console.log("Status: ", status_search.value);
    console.log("Division: ", division_search.value);

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-items/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                device_type: device_type_search.value,
                serial_number: serial_number_search.value,
                client: client_search.value,
                status: status_search.value,
                division: division_search.value,
                
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
async function closeUpdateModal() {
    showUpdateModal.value = false;
    isLaptop.value = false;
    isDesktop.value = false;
    isServer.value = false;
    isTablet.value = false;
    isMouseKeyboard.value = false;
    isPrinter.value = false;
    isScanner.value = false;
    isSurgeProtector.value = false;
    isUPS.value = false
    isSpeaker.value = false;
    isWebcam.value = false;
    isOtherEquipment.value = false;
    isCRAV.value = false;
    isOtherDevice.value = false;
    isNetworkSwitch.value = false;
    isMonitor.value = false;
    updateSerial.value = null;
    updateCategory.value = null;
    console.log(isLaptop.value)

    function resetForm() {
        Object.keys(refs).forEach(key => {
            refs[key].value = null;
            localStorage.removeItem(`${key}_val`);
        });
    }

    resetForm()
}

async function openUpdateModal(serial_number, category) {
    showUpdateModal.value = true;
    updateSerial.value = serial_number;
    updateCategory.value = category;

    if (category == "Laptop") {
        isLaptop.value = true
    } else if (category == "Desktop") {
        isDesktop.value = true
    } else if (category == "Server") {
        isServer.value = true
    }  else if (category == "Tablet") {
        isTablet.value = true
    } else if (category == "Mouse" || category == "Keyboard") {
        isMouseKeyboard.value = true
    } else if (category == "Scanner") {
        isScanner.value = true
    } else if (category == "Surge Protector") {
        isSurgeProtector.value = true
    } else if (category == "UPS") {
        isUPS.value = true
    } else if (category == "Speaker") {
        isSpeaker.value = true
    } else if (category == "Webcam") {
        isWebcam.value = true
    } else if (category == "Printer") {
        isPrinter.value = true
    } else if (category == "Other Equipment") {
        isOtherEquipment.value = true
    } else if (category == "CRAV") {
        isCRAV.value = true
    } else if (category == "Network Switch") {
        isNetworkSwitch.value = true
    } else if (category == "Monitor") {
        isMonitor.value = true
    } else {
        isOtherDevice.value = true
    }

    console.log(serial_number)
    console.log(category)

}


function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function updateDevice() {
    console.log(updateSerial.value)
    console.log(updateCategory.value)

    const device = {
        category: updateCategory.value,
        brand: brand.value,
        model: model.value,
        serial_number: updateSerial.value,
        inventory_number: inventory_number.value,
        delivery_date: formatDate(delivery_date.value),
        deployment_date: formatDate(deployment_date.value),
        bos_date: formatDate(bos_date.value),
        supplier_name: supplier_name.value,
        device_cost: device_cost.value,
        status_id: status.value,

        hard_disk_capacity: hard_disk_capacity.value,
        memory_capacity: memory_capacity.value,
        warranty_start_date: formatDate(warranty_start_date.value),
        warranty_end_date: formatDate(warranty_end_date.value),
        return_date: formatDate(returned_date.value),
        mac_address: mac_address.value,
        manufactured_date: formatDate(manufactured_date.value),
        memory_type: memory_type.value,
        operating_system: operating_system.value,
        cpu_type_id: cpu_type.value,
        processor_speed: processor_speed.value,
        processor_type: processor_type.value,
        computer_name: computer_name.value,
        ms_office_version: ms_office_version.value,
        antivirus: antivirus.value,
        form_factor_id: form_factor.value,
        raid_type_id: raid_type.value,
        number_hard_drive: number_hard_drive.value,
        number_power_supply: number_power_supply.value,
        device_size: device_size.value,
        imei_number: imei_number.value,
        version: version.value,
        connection_type_id: connection_type.value,
        ip_address: ip_address.value,
        number_outlets: number_outlets.value,  
        speaker_type_id: speaker_type.value,
        number_speakers: number_speakers.value,
        equipment_type: other_equipment_type.value,
        feature_id: printer_features.value,
        crav_equipment_type_id: crav_equipment_type.value,
        name: name.value,
        meeting_room_id: meeting_room.value,
        number_of_ports: number_ports.value,
        firmware_type: firmware_type.value,
        firmware_version: firmware_version.value,
        device_name: device_name.value,
        size: size.value,
        monitor_type_id: monitor_type.value,
        monitor_function_id: monitor_function.value,
        

        location_id: location.value,
        division_id: division.value,
    }

    function cleanDeviceData(device) {
        return Object.fromEntries(
            Object.entries(device).map(([key, value]) => [
                key,
                value === "" ? null : value
            ])
        );
    }

    const cleanedDevice = cleanDeviceData(device);

    console.log(cleanedDevice)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}update-device/`, cleanedDevice, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

    
    alert("Device has been Updated.");

    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find item. Check console.");
    }
}

//THIS IS THE VIEW SECTION///////////////////////////////////////////////////////////////////////////////
function closeDeviceModal() {
    showDeviceModal.value = false;
    deviceData.value = null;
    laptopData.value = null;
    desktopData.value = null;
    tabletData.value = null;
    mouseKeyboardData.value = null;
    scannerData.value = null;
    surgeProtectorData.value = null;
    upsData.value = null;
    speakerData.value = null;
    webcamData.value = null;
    otherEquipmentData.value = null;
    printerData.value = null;
    projectorData.value = null;
    cravData.value = null;
    networkSwitchData.value = null;
    monitorData.value = null;
    console.log("Closing Device Modal")
}

async function openDeviceModal(serial_number, category) {
    console.log(serial_number)
    showDeviceModal.value = true;
    console.log("Opening Device Modal")

    try {
        const response = await axios.get(`${useBaseURLComposable()}get-item-sn/`, {
            params: {
                serial_number: serial_number,
                category: category,
            }
        });

        console.log(response.data)
        
        if (category === "Laptop") {
            laptopData.value = response.data
            for (const item in laptopData.value) {
                if (laptopData.value[item] == undefined || laptopData.value[item] == null) {
                    laptopData.value[item] = "";
                }
            }
        } 
        else if (category === "Desktop") {
            desktopData.value = response.data
            for (const item in desktopData.value) {
                if (desktopData.value[item] == undefined || desktopData.value[item] == null) {
                    desktopData.value[item] = "";
                }
            }
        }
        else if (category === "Server") {
            serverData.value = response.data
            for (const item in serverData.value) {
                if (serverData.value[item] == undefined || serverData.value[item] == null) {
                    serverData.value[item] = "";
                }
            }
        } else if (category === "Tablet") {
            tabletData.value = response.data
            for (const item in tabletData.value) {
                if (tabletData.value[item] == undefined || tabletData.value[item] == null) {
                    tabletData.value[item] = "";
                }
            }
        } else if (category === "Mouse" || category === "Keyboard") {
            mouseKeyboardData.value = response.data
            for (const item in mouseKeyboardData.value) {
                if (mouseKeyboardData.value[item] == undefined || mouseKeyboardData.value[item] == null) {
                    mouseKeyboardData.value[item] = "";
                }
            }
        } else if (category === "Scanner") {
            scannerData.value = response.data
            for (const item in scannerData.value) {
                if (scannerData.value[item] == undefined || scannerData.value[item] == null) {
                    scannerData.value[item] = "";
                }
            }
        } else if (category === "Surge Protector") {
            surgeProtectorData.value = response.data
            for (const item in surgeProtectorData.value) {
                if (surgeProtectorData.value[item] == undefined || surgeProtectorData.value[item] == null) {
                    surgeProtectorData.value[item] = "";
                }
            }
        } else if (category === "UPS") {
            upsData.value = response.data
            for (const item in upsData.value) {
                if (upsData.value[item] == undefined || upsData.value[item] == null) {
                    upsData.value[item] = "";
                }
            }
        } else if (category === "Speaker") {
            speakerData.value = response.data
            for (const item in speakerData.value) {
                if (speakerData.value[item] == undefined || speakerData.value[item] == null) {
                    speakerData.value[item] = "";
                }
            }
        } else if (category === "Webcam") {
            webcamData.value = response.data
            for (const item in webcamData.value) {
                if (webcamData.value[item] == undefined || webcamData.value[item] == null) {
                    webcamData.value[item] = "";
                }
            }
        } else if (category === "Other Equipment") {
            otherEquipmentData.value = response.data
            for (const item in otherEquipmentData.value) {
                if (otherEquipmentData.value[item] == undefined || otherEquipmentData.value[item] == null) {
                    otherEquipmentData.value[item] = "";
                }
            }
        } else if (category === "Printer") {
            printerData.value = response.data
            for (const item in printerData.value) {
                if (printerData.value[item] == undefined || printerData.value[item] == null) {
                    printerData.value[item] = "";
                }
            }
        } else if (category === "Projector") {
            projectorData.value = response.data
            for (const item in projectorData.value) {
                if (projectorData.value[item] == undefined || projectorData.value[item] == null) {
                    projectorData.value[item] = "";
                }
            }
        } else if (category === "CRAV") {
            cravData.value = response.data
            for (const item in cravData.value) {
                if (cravData.value[item] == undefined || cravData.value[item] == null) {
                    cravData.value[item] = "";
                }
            }
        } else if (category === "Network Switch") {
            networkSwitchData.value = response.data
            for (const item in networkSwitchData.value) {
                if (networkSwitchData.value[item] == undefined || networkSwitchData.value[item] == null) {
                    networkSwitchData.value[item] = "";
                }
            }
        } else if (category === "Monitor") {
            monitorData.value = response.data
            for (const item in monitorData.value) {
                if (monitorData.value[item] == undefined || monitorData.value[item] == null) {
                    monitorData.value[item] = "";
                }
            }
        } else {
            deviceData.value = response.data
            for (const item in deviceData.value) {
                if (deviceData.value[item] == undefined || deviceData.value[item] == null) {
                    deviceData.value[item] = "";
                }
            }
        }
        
    } catch (error) {
        if (error.response?.status === 401) {
            this.$router.push({name: 'UserLogin' });
            alert("Please Log In Again")
        }
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
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

        commentData.value = commentData.value.filter(
            c => c.comment_id !== comment
        );

        console.log(commentData.value)

        console.log("Comment Deleted Succefully")
        alert("Comment successfully deleted.", response.data);
        
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

async function confirmDeleteItem() {
    try {
        console.log(deleteSerial)
        const token = localStorage.getItem('token');
        await axios.delete(`${useBaseURLComposable()}delete-item/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                serial_number: deleteSerial.value,
            }
        });
        items.value = items.value.filter(item => item.serial_number !== deleteSerial.value)
        console.log("Item Has Been Deleted")
        closeDeleteModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const detailRef = ref(null)
const deleteRef = ref(null)
const commentRef = ref(null)
const updateRef = ref(null)

onClickOutside(detailRef, () => {
  if (showDeviceModal.value) {
    closeDeviceModal()
  }
})

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

onClickOutside(updateRef, () => {
  if (showUpdateModal.value) {
    closeUpdateModal()
  }
})
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