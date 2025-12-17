<template>
<div>
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
        <SectionTemplate v-if="items.length > 0" template-name="Update Devices">
            <div class="relative overflow-x-auto">
                 <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                Delivery Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in paginatedItems" :key="item.devices_id
" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-200">
                            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                {{ item.delivery_date }}
                            </td>
                            <td class="px-6 py-4 inline-block align-middle">
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
                                <h1 class="show_detail_head">Connection Type:</h1>
                                <h1 class="show_detail_body">{{ mouseKeyboardData.connection_type_id }}</h1>
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
                                <h1 class="show_detail_head">IP Address ID:</h1>
                                <h1 class="show_detail_body">{{ printerData.ip_address }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Feature ID:</h1>
                                <h1 class="show_detail_body">{{ printerData.feature_id }}</h1>
                            </div>
                            <div class="flex">
                                <h1 class="show_detail_head">Connection Type:</h1>
                                <h1 class="show_detail_body">{{ printerData.connection_type_id }}</h1>
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
                        <div v-for="comment in commentData" :key="comment.comment_id" class="flex justify-between p-4 bg-white border-2 border-gray-600 rounded-3xl">
                            <h1 class="">{{ comment.comment_value }}</h1>
                            <button @click="delete_comment(comment.comment_id)" class="material-icons !text-3xl text-gray-500 hover:text-blue-500 cursor-pointer"> 
                                delete
                            </button>
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
                <form v-if="isLaptop" @submit.prevent="updateDevice" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="laptop_brand" labelFor="laptop_brand" fieldName="Brand: " v-model="laptop_brand"/>

                        <TextField id="laptop_model" labelFor="laptop_model" fieldName="Model: " v-model="laptop_model"/>

                        <TextField id="laptop_inventory_number" labelFor="laptop_inventory_number" fieldName="Inventory Number: " v-model="laptop_inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="laptop_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="laptop_delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="laptop_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="laptop_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_status" :class="[option_field_class]" class="bg-white" v-model.number="laptop_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="laptop_status" fieldName="System Status: "/>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="laptop_hard_disk_capacity" labelFor="laptop_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="laptop_hard_disk_capacity"/>

                        <TextField id="laptop_memory_capacity" labelFor="laptop_memory_capacity" fieldName="Memory Capacity: " v-model="laptop_memory_capacity"/>

                        <!-- warranty start date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="laptop_warranty_start_date" 
                                :enable-time-picker="false" 
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="laptop_warranty_start_date" fieldName="Warranty Start Date: "/>
                        </div>

                        <!-- warranty end date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="laptop_warranty_end_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="laptop_warranty_end_date" fieldName="Warranty End Date: "/>
                        </div>

                        <!-- returned date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="laptop_returned_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="laptop_returned_date" fieldName="Returned Date: "/>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="laptop_mac_address" labelFor="laptop_mac_address" fieldName="Mac Address: " v-model="laptop_mac_address"/>
                    </div>


                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="laptop_operating_system" labelFor="laptop_operating_system" fieldName="Operating System: " v-model="laptop_operating_system"/>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_cpu_type" :class="[option_field_class]" class="bg-white" v-model="laptop_cpu_type">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option v-for="cpu_type in cpu_types" :key="cpu_type.cpu_type_id" :value=cpu_type.cpu_type_id class="text-black">{{ cpu_type.cpu_type_description }}</option>
                            </select>
                            <TextLabel :labelFor="laptop_cpu_type" fieldName="CPU Type:" />
                        </div>

                        <TextField id="laptop_processor_speed" labelFor="laptop_processor_speed" fieldName="Processor Speed: " v-model="laptop_processor_speed"/>

                        <TextField id="laptop_processor_type" labelFor="laptop_processor_type" fieldName="Processor Type: " v-model="laptop_processor_type"/>

                        <TextField id="laptop_computer_name" labelFor="laptop_computer_name" fieldName="Computer Name: " v-model="laptop_computer_name"/>

                        <TextField id="laptop_ms_office_version" labelFor="laptop_ms_office_version" fieldName="MS Office Version: " v-model="laptop_ms_office_version"/>

                        <TextField id="laptop_antivirus" labelFor="laptop_antivirus" fieldName="Antivirus: " v-model="laptop_antivirus"/>





                        <!-- pdf reader -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <input class="basis-2/3 ml-4 block w-full rounded-md border border-gray-300 focus:outline-none focus:ring-0 shadow-sm peer" id="laptop_file_input" type="file" multiple>
                            <TextLabel labelFor="laptop_file_input" fieldName="Upload File: "/>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_parish" :class="[option_field_class]" class="bg-white" v-model="laptop_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="laptop_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_location_type" :class="[option_field_class]" class="bg-white" v-model="laptop_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="laptop_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_location" :class="[option_field_class]" class="bg-white" v-model="laptop_location">
                                <option selected class="text-blue-100">Choose a location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="laptop_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="laptop_division" :class="[option_field_class]" class="bg-white" v-model="laptop_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="laptop_division" fieldName="Division" />
                        </div>
                    </div>

                    <CommentField id="laptop_comment" labelFor="laptop_comment" fieldName="Comment: " v-model="laptop_comment"/>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Update Item"/>
                    </div>
                </form>

                <form v-if="isTablet" @submit.prevent="" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="tablet_brand" labelFor="tablet_brand" fieldName="Brand: " v-model="tablet_brand"/>

                        <TextField id="tablet_model" labelFor="tablet_model" fieldName="Model: " v-model="tablet_model"/>

                        <TextField id="tablet_inventory_number" labelFor="tablet_inventory_number" fieldName="Inventory Number: " v-model="tablet_inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="tablet_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="tablet_delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="tablet_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="tablet_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <!-- system status -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="tablet_status" :class="[option_field_class]" class="bg-white" v-model="tablet_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>
                            </select>
                            <TextLabel labelFor="tablet_status" fieldName="System Status: "/>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="tablet_hard_disk_capacity" labelFor="tablet_hard_disk_capacity" fieldName="Hard Disk Capacity: " v-model="tablet_hard_disk_capacity"/>

                        <TextField id="tablet_memory_capacity" labelFor="tablet_memory_capacity" fieldName="Memory Capacity: " v-model="tablet_memory_capacity"/>

                        <!-- warranty start date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="tablet_warranty_start_date" 
                                :enable-time-picker="false" 
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="tablet_warranty_start_date" fieldName="Warranty Start Date: "/>
                        </div>

                        <!-- warranty end date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="tablet_warranty_end_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="tablet_warranty_end_date" fieldName="Warranty End Date: "/>
                        </div>

                        <!-- returned date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="tablet_returned_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="tablet_returned_date" fieldName="Returned Date: "/>
                        </div>
                    </div>



                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="tablet_operating_system" labelFor="tablet_operating_system" fieldName="Operating System: " v-model="tablet_operating_system"/>

                        <TextField id="tablet_imei_number" labelFor="tablet_imei_number" fieldName="IMEI Number: " v-model="tablet_imei_number"/>

                        <TextField id="tablet_version" labelFor="tablet_version" fieldName="Version: " v-model="tablet_version"/>

                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="tablet_parish" :class="[option_field_class]" class="bg-white" v-model="tablet_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="tablet_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="tablet_location_type" :class="[option_field_class]" class="bg-white" v-model="tablet_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="tablet_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="tablet_location" :class="[option_field_class]" class="bg-white" v-model="tablet_location">
                                <option selected class="text-blue-100">Choose a Location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="tablet_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="tablet_division" :class="[option_field_class]" class="bg-white" v-model="tablet_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="tablet_division" fieldName="Division" />
                        </div>
                    </div>
                    
                    <CommentField id="tablet_comment" labelFor="tablet_comment" fieldName="Comment: "/>

                    <div class="flex justify-center">
                        <AddItemButton buttonName="Add Item"/>
                    </div>
                </form>

                <form v-if="isMouseKeyboard" @submit.prevent="" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="mouse_brand" labelFor="mouse_brand" fieldName="Brand: " v-model="mouse_brand"/>

                        <TextField id="mouse_model" labelFor="mouse_model" fieldName="Model: " v-model="mouse_model"/>

                        <TextField id="mouse_inventory_number" labelFor="mouse_inventory_number" fieldName="Inventory Number: " v-model="mouse_inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="mouse_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="mouse_delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="mouse_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="mouse_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_status" :class="[option_field_class]" class="bg-white" v-model="mouse_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="mouse_status" fieldName="System Status: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_connection_type" :class="[option_field_class]" class="bg-white" v-model="mouse_connection_type">
                                <option selected class="text-blue-100">Choose a Connection Type</option>
                                <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>
                            </select>
                            <TextLabel labelFor="mouse_connection_type" fieldName="Connection Type: "/>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_parish" :class="[option_field_class]" class="bg-white" v-model="mouse_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="mouse_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_location_type" :class="[option_field_class]" class="bg-white" v-model="mouse_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="mouse_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_location" :class="[option_field_class]" class="bg-white" v-model="mouse_location">
                                <option selected class="text-blue-100">Choose a Location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="mouse_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="mouse_division" :class="[option_field_class]" class="bg-white" v-model="mouse_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="mouse_division" fieldName="Division" />
                        </div>
                    </div>


                    <CommentField id="mouse_comment" labelFor="mouse_comment" fieldName="Comment: " v-model="mouse_comment"/>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Add Item"/>
                    </div>
                </form>

                <form v-if="isPrinter" @submit.prevent="" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="printer_brand" labelFor="printer_brand" fieldName="Brand: " v-model="printer_brand"/>

                        <TextField id="printer_model" labelFor="printer_model" fieldName="Model: " v-model="printer_model"/>

                        <TextField id="printer_inventory_number" labelFor="printer_inventory_number" fieldName="Inventory Number: " v-model="printer_inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="printer_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="printer_delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="printer_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="printer_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_status" :class="[option_field_class]" class="bg-white" v-model="printer_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="printer_status" fieldName="System Status: "/>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_features" :class="[option_field_class]" v-model="printer_features">
                                <option selected class="text-blue-100">Choose a Feature</option>
                                <option v-for="feature in features" :key="feature.feature_id" :value=feature.feature_id class="text-black">{{ feature.feature_description }}</option>

                            </select>
                            <TextLabel labelFor="printer_features" fieldName="Features: "/>
                        </div>

                        <TextField id="ip_address" labelFor="ip_address" fieldName="IP Address: " v-model="printer_ip_address"/>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_connection_type" :class="[option_field_class]" v-model="printer_connection_type">
                                <option selected class="text-blue-100">Choose a Connection Type</option>
                                <option v-for="ctype in connection_types" :key="ctype.ctype_id" :value=ctype.ctype_id class="text-black">{{ ctype.ctype_description }}</option>

                            </select>
                            <TextLabel labelFor="printer_connection_type" fieldName="Connection Type: "/>
                        </div>

                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_parish" :class="[option_field_class]" class="bg-white" v-model="printer_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="printer_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_location_type" :class="[option_field_class]" class="bg-white" v-model="printer_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="printer_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_location" :class="[option_field_class]" class="bg-white" v-model="printer_location">
                                <option selected class="text-blue-100">Choose a Location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="printer_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="printer_division" :class="[option_field_class]" class="bg-white" v-model="printer_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="printer_division" fieldName="Division" />
                        </div>
                    </div>

                    <CommentField id="printer_comment" labelFor="printer_comment" fieldName="Comment: " v-model="printer_comment"/>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Add Item"/>
                    </div>
                </form>

                <form v-if="isCRAV" @submit.prevent="" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="conference_room_av_equipment_brand" labelFor="conference_room_av_equipment_brand" fieldName="Brand: " v-model="conference_room_av_equipment_brand"/>

                        <TextField id="conference_room_av_equipment_model" labelFor="conference_room_av_equipment_model" fieldName="Model: " v-model="conference_room_av_equipment_model"/>

                        <TextField id="conference_room_av_equipment_inventory_number" labelFor="conference_room_av_equipment_inventory_number" fieldName="Inventory Number: " v-model="conference_room_av_equipment_inventory_number"/>

                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="conference_room_av_equipment_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="conference_room_av_equipment_delivery_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="conference_room_av_equipment_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="conference_room_av_equipment_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="conference_room_av_equipment_status" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="conference_room_av_equipment_status" fieldName="System Status: "/>
                        </div>

                        <TextField id="conference_room_av_equipment_name" labelFor="conference_room_av_equipment_name" fieldName="Device Name: " v-model="conference_room_av_equipment_name"/>
                    </div>

                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="conference_room_av_equipment_mac_address" labelFor="conference_room_av_equipment_mac_address" fieldName="Mac Address: " v-model="conference_room_av_equipment_mac_address"/> 

                        <TextField id="conference_room_av_equipment_ip_address" labelFor="conference_room_av_equipment_ip_address" fieldName="IP Address: " v-model="conference_room_av_equipment_ip_address"/>  
                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="conference_room_av_equipment_parish" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="conference_room_av_equipment_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="conference_room_av_equipment_location_type" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="conference_room_av_equipment_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="conference_room_av_equipment_location" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_location">
                                <option selected class="text-blue-100">Choose a Location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="conference_room_av_equipment_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="conference_room_av_equipment_division" :class="[option_field_class]" class="bg-white" v-model="conference_room_av_equipment_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="conference_room_av_equipment_division" fieldName="Division" />
                        </div>
                    </div>

                    <CommentField id="conference_room_av_equipment_comment" labelFor="conference_room_av_equipment_comment" fieldName="Comment: " v-model="conference_room_av_equipment_comment"/>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Add Item"/>
                    </div>
                </form>

                <form v-if="isOtherDevice" @submit.prevent="" class="max-h-[75vh] overflow-y-auto pr-2">
                    <div class="grid grid-cols-2 gap-x-6">
                        <TextField id="device_brand" labelFor="device_brand" fieldName="Brand: " v-model="device_brand"/>

                        <TextField id="device_model" labelFor="device_model" fieldName="Model: " v-model="device_model"/>

                        <TextField id="device_inventory_number" labelFor="device_inventory_number" fieldName="Inventory Number: " v-model="device_inventory_number"/>

                        <!-- delivery date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="device_delivery_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="device_delivery_date" fieldName="Delivery Date: "/>
                        </div>

                        <!-- deployment date -->
                        <div class="flex flex-row-reverse mb-6 group">
                            <VueDatePicker 
                                v-model="device_deployment_date" 
                                :enable-time-picker="false" 
                                :input-class-name="'p-0 bg-green-500'"
                                placeholder="Enter in the format MM/DD/YYY"
                                text-input 
                                :class="[date_field_class]">
                            </VueDatePicker>
                            <TextLabel labelFor="device_deployment_date" fieldName="Deployment Date: "/>
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="device_status" :class="[option_field_class]" class="bg-white" v-model="device_status">
                                <option selected class="text-blue-100">Choose a Status</option>
                                <option v-for="status in statuses" :key="status.status_id" :value=status.status_id class="text-black">{{ status.status_description }}</option>

                            </select>
                            <TextLabel labelFor="device_status" fieldName="System Status: "/>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-2 gap-x-6">

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="device_parish" :class="[option_field_class]" class="bg-white" v-model="device_parish">
                                <option selected class="text-blue-100">Choose a Parish</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="device_parish" fieldName="Parish" />
                        </div>
                        
                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="device_location_type" :class="[option_field_class]" class="bg-white" v-model="device_location_type">
                                <option selected class="text-blue-100">Choose a Location Type</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="device_location_type" fieldName="Location Type" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="device_location" :class="[option_field_class]" class="bg-white" v-model="device_location">
                                <option selected class="text-blue-100">Choose a Location</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="device_location" fieldName="Location" />
                        </div>

                        <div class="flex flex-row-reverse mb-6 group">
                            <select id="device_division" :class="[option_field_class]" class="bg-white" v-model="device_division">
                                <option selected class="text-blue-100">Choose a Division</option>
                                <option value=1>Option 1</option>
                                <option value=2>Option 2</option>
                                <option value=3>Option 3</option>
                            </select>
                            <TextLabel :labelFor="device_division" fieldName="Division" />
                        </div>
                    </div>

                    <CommentField id="device_comment" labelFor="device_comment" fieldName="Comment: " v-model="device_comment"/>
                    
                    <div class="flex justify-center">
                        <AddItemButton buttonName="Add Item"/>
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
                This is the modal name
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


import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import AddTemplate from '../SectionTemplate.vue';
import CommentField from '@/components/Fields/CommentField.vue';
import UpdateModal from './UpdateModal.vue';


import { getStatuses, getCPUTypes, getConnectionTypes, getPrinterFeatures, option_field_class, date_field_class } from '@/utils/descriptions';




const items = ref([]); // Store the search results (list of items)
const currentPage = ref(1)
const itemsPerPage = 10

// Get the posts for the current page
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});



const showDeviceModal = ref(false);
const deviceData = ref();
const laptopData = ref();
const tabletData = ref();
const mouseKeyboardData = ref();
const printerData = ref();
const cravData = ref();

const showDeleteModal = ref(false);
const deleteSerial = ref();
const deleteBrand = ref();
const deleteCategory = ref();
const deleteModel = ref();
const deleteInventory = ref();

const showCommentModal = ref(false);
const commentData = ref();
const commentItem = ref();
const commentID = ref();
const item_comment_text = ref();


// UPDATE SECTION///////////////////////////////////////////////////////////////////////////////////
const showUpdateModal = ref(false)
const isOtherDevice = ref(false);
const isLaptop = ref(false);
const isTablet = ref(false);
const isMouseKeyboard = ref(false);
const isPrinter = ref(false);
const isCRAV = ref(false);

const statuses = ref([])
const cpu_types = ref([])
const connection_types = ref([])
const features = ref([]);

const updateSerial = ref();
const updateCategory = ref();

onMounted(async () => {
  try {
    statuses.value = await getStatuses();
    cpu_types.value = await getCPUTypes();
    connection_types.value = await getConnectionTypes();
    features.value = await getPrinterFeatures();
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

const laptopRefs = {};
const tabletRefs = {};
const mouseRefs = {};
const printerRefs = {};
const conferenceRoomAvEquipmentRefs = {};
const otherDeviceRefs = {};

const {
    laptop_brand,
    laptop_model,
    laptop_serial_number,
    laptop_inventory_number,
    laptop_delivery_date,
    laptop_deployment_date,
    laptop_status,
    laptop_hard_disk_capacity,
    laptop_memory_capacity,
    laptop_warranty_start_date,
    laptop_warranty_end_date,
    laptop_returned_date,
    laptop_mac_address,
    laptop_operating_system,
    laptop_cpu_type,
    laptop_processor_speed,
    laptop_processor_type,
    laptop_computer_name,
    laptop_ms_office_version,
    laptop_antivirus,
    laptop_file_input,
    laptop_parish,
    laptop_location_type,
    laptop_location,
    laptop_division,
    laptop_comment,
} = laptopRefs;

const {
    tablet_brand,
    tablet_model,
    tablet_serial_number,
    tablet_inventory_number,
    tablet_delivery_date,
    tablet_deployment_date,
    tablet_status,
    tablet_warranty_start_date,
    tablet_warranty_end_date,
    tablet_returned_date,
    tablet_operating_system,
    tablet_imei_number,
    tablet_version,
    tablet_division,
    tablet_hard_disk_capacity,
    tablet_memory_capacity,

    tablet_location,
    tablet_location_type,
    tablet_parish,
} = tabletRefs;

const {
    mouse_brand,
    mouse_model,
    mouse_serial_number,
    mouse_inventory_number,
    mouse_delivery_date,
    mouse_deployment_date,
    mouse_status,
    mouse_connection_type,
    mouse_parish,
    mouse_location_type,
    mouse_location,
    mouse_division,
    mouse_comment,
} = mouseRefs;

const {
    printer_brand,
    printer_model,
    printer_serial_number,
    printer_inventory_number,
    printer_delivery_date,
    printer_deployment_date,
    printer_status,
    printer_features,
    printer_ip_address,
    printer_connection_type,
    printer_parish,
    printer_location_type,
    printer_location,
    printer_division,
    printer_comment,
} = printerRefs;

const {
    conference_room_av_equipment_brand,
    conference_room_av_equipment_model,
    conference_room_av_equipment_serial_number,
    conference_room_av_equipment_inventory_number,
    conference_room_av_equipment_status,
    conference_room_av_equipment_name,
    conference_room_av_equipment_mac_address,
    conference_room_av_equipment_ip_address,
    conference_room_av_equipment_parish,
    conference_room_av_equipment_location_type,
    conference_room_av_equipment_location,
    conference_room_av_equipment_division,
    conference_room_av_equipment_comment,
    conference_room_av_equipment_delivery_date,
    conference_room_av_equipment_deployment_date,
} = conferenceRoomAvEquipmentRefs;

const {
    device_brand,
    device_model,
    device_serial_number,
    device_inventory_number,
    device_delivery_date,
    device_deployment_date,
    device_status,
    device_parish,
    device_location_type,
    device_location,
    device_division,
    device_comment,
} = otherDeviceRefs;
///////////////////////////////////////////////////////////////////////////////////

const itemToUpdate = ref();
const search_category = ref();
const search_filter = ref();




// These are tests and should be removed
const test_brand = ref();
const test_category = ref('Laptop');


async function get_items() {
    console.log(search_category.value)
    console.log(search_filter.value)

    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-items/', {
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
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

//THIS IS THE VIEW SECTION///////////////////////////////////////////////////////////////////////////////
function closeDeviceModal() {
    showDeviceModal.value = false;
    deviceData.value = null;
    laptopData.value = null;
    tabletData.value = null;
    mouseKeyboardData.value = null;
    printerData.value = null;
    cravData.value = null;
    console.log("Closing Device Modal")
}

async function openDeviceModal(serial_number, category) {
    console.log(serial_number)
    showDeviceModal.value = true;
    console.log("Opening Device Modal")

    try {
        const response = await axios.get('http://localhost:8000/get-item-sn/', {
            params: {
                serial_number: serial_number,
                category: category,
            }
        });
        
        if (category === "Laptop") {
            laptopData.value = response.data
            for (const item in laptopData.value) {
                if (laptopData.value[item] == undefined || laptopData.value[item] == null) {
                    laptopData.value[item] = "";
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
        } else if (category === "Printer") {
            printerData.value = response.data
            for (const item in printerData.value) {
                if (printerData.value[item] == undefined || printerData.value[item] == null) {
                    printerData.value[item] = "";
                }
            }
        } else if (category === "CRAV") {
            cravData.value = response.data
            for (const item in cravData.value) {
                if (cravData.value[item] == undefined || cravData.value[item] == null) {
                    cravData.value[item] = "";
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
        const response = await axios.get('http://localhost:8000/get-comments/', {
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
        const response = await axios.post('http://localhost:8000/add-comments/', { id: devices_id, comment: comment }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const second_response = await axios.get('http://localhost:8000/get-comments/', {
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
        const response = await axios.delete('http://localhost:8000/delete-comment/', {
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
//THIS IS THE UPDATE SECTION///////////////////////////////////////////////////////////////////////////////
async function closeUpdateModal() {
    showUpdateModal.value = false;
    isLaptop.value = false;
    isTablet.value = false;
    isMouseKeyboard.value = false;
    isPrinter.value = false;
    isCRAV.value = false;
    isOtherDevice.value = false;
    updateSerial.value = null;
    updateCategory.value = null;
    console.log(isLaptop.value)
}

async function openUpdateModal(serial_number, category) {
    showUpdateModal.value = true;
    updateSerial.value = serial_number;
    updateCategory.value = category;

    if (category == "Laptop") {
        isLaptop.value = true
    } else if (category == "Tablet") {
        isTablet.value = true
    } else if (category == "Mouse" || category == "Keyboard") {
        isMouseKeyboard.value = true
    } else if (category == "Printer") {
        isPrinter.value = true
    } else if (category == "CRAV") {
        isCRAV.value = true
    } else {
        isOtherDevice.value = true
    }

    console.log(serial_number)
    console.log(category)

}

async function updateDevice() {
    console.log(updateSerial.value)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        await axios.delete('http://localhost:8000/delete-item/', {
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