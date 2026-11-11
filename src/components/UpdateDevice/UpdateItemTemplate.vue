<template>
<div>

   <SectionTemplate :templateName="deviceData?.serial_number || 'View Item'">
        <form @submit.prevent="updateDevice" class="">
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
                    <select
                        id="status"
                        :class="[option_field_class]"
                        class="bg-white"
                        v-model.number="status"
                    >
                        <option :value="null" class="text-blue-100"></option>

                        <option
                            v-for="item in statuses.filter(s =>
                                ![3, 6].includes(s.status_id) ||
                                s.status_id === originalStatus
                            )"
                            :key="item.status_id"
                            :value="item.status_id"
                            :disabled="[3, 6].includes(item.status_id)"
                            class="text-black"
                        >
                            {{ item.status_description }}
                        </option>
                    </select>

                    <TextLabel labelFor="status" fieldName="System Status: "/>
                </div>
            </div>

            <!-- THIS IS THE LAPTOP SECTION -->
            <div v-if="category == 'Laptop'">
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
            <div v-if="category == 'Desktop'">
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
            <div v-if="category == 'Server'">
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
            <div v-if="category == 'Tablet'">
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

                <h1 class="text-2xl font-bold mb-3 mt-3">Bag Information</h1>

                <div class="grid grid-cols-2 gap-x-6">
                    <div class="flex flex-row-reverse mb-6 group">
                        <select id="bag_type" :class="[option_field_class]" class="bg-white" v-model.number="bag_type">
                            <option :value=null selected class="text-blue-100"></option>
                            <option v-for="type in bag_types" :key="type.bag_type_id" :value=type.bag_type_id class="text-black">{{ type.bag_type_description }}</option>
                        </select>
                        <TextLabel labelFor="bag_type" fieldName="Bag Type:" />
                    </div>

                    <TextField id="bag_brand" labelFor="bag_brand" fieldName="Brand: " v-model="bag_brand"/>

                    <TextField id="bag_model" labelFor="bag_model" fieldName="Model: " v-model="bag_model"/>

                    <TextField id="bag_ministry_number" labelFor="bag_ministry_number" fieldName="Ministry Number: " v-model="bag_ministry_number"/>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="bag_delivery_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="bag_delivery_date" fieldName="Delivery Date: "/>
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="bag_assignment_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="bag_assignment_date" fieldName="Assignment Date: "/>
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <select id="bag_status" :class="[option_field_class]" class="bg-white" v-model.number="bag_status">
                            <option :value=null selected class="text-blue-100"></option>
                            <option v-for="bag_status in statuses" :key="bag_status.status_id" :value=bag_status.status_id class="text-black">{{ bag_status.status_description }}</option>
                        </select>
                        <TextLabel labelFor="bag_status" fieldName="Status" />
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="bag_bos_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="bag_bos_date" fieldName="BOS Date: "/>
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <select id="bag_fabric_type" :class="[option_field_class]" class="bg-white" v-model.number="bag_fabric_type">
                            <option :value=null selected class="text-blue-100"></option>
                            <option v-for="fabric_type in bag_fabric_types" :key="fabric_type.bag_fabric_type_id" :value=fabric_type.bag_fabric_type_id class="text-black">{{ fabric_type.bag_fabric_type_description }}</option>
                        </select>
                        <TextLabel labelFor="bag_fabric_type" fieldName="Fabric Type:" />
                    </div>

                </div>

                <h1 class="text-2xl font-bold mb-3 mt-3">Adapter Information</h1>

                <div class="grid grid-cols-2 gap-x-6">

                    <TextField id="adapter_serial_number" labelFor="adapter_serial_number" fieldName="Serial Number: " v-model="adapter_serial_number"/>

                    <TextField id="adapter_brand" labelFor="adapter_brand" fieldName="Brand: " v-model="adapter_brand"/>

                    <TextField id="adapter_model" labelFor="adapter_model" fieldName="Model: " v-model="adapter_model"/>

                    <TextField id="adapter_ministry_number" labelFor="adapter_ministry_number" fieldName="Ministry Number: " v-model="adapter_ministry_number"/>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="adapter_delivery_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="adapter_delivery_date" fieldName="Delivery Date: "/>
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="adapter_assignment_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="adapter_assignment_date" fieldName="Assignment Date: "/>
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <select id="adapter_status" :class="[option_field_class]" class="bg-white" v-model.number="adapter_status">
                            <option :value=null selected class="text-blue-100"></option>
                            <option v-for="adapter_status in statuses" :key="adapter_status.status_id" :value=adapter_status.status_id class="text-black">{{ adapter_status.status_description }}</option>
                        </select>
                        <TextLabel labelFor="adapter_status" fieldName="Status" />
                    </div>

                    <div class="flex flex-row-reverse mb-6 group">
                        <VueDatePicker 
                            v-model="adapter_bos_date" 
                            :enable-time-picker="false" 
                            :input-class-name="'p-0 bg-green-500'"
                            placeholder="Enter in the format MM/DD/YYY"
                            text-input 
                            :class="[date_field_class]">
                        </VueDatePicker>
                        <TextLabel labelFor="adapter_bos_date" fieldName="BOS Date: "/>
                    </div>

                </div>
            </div>

            <!-- THIS IS THE MOUSE SECTION -->
            <div v-if="category == 'Mouse' || category == 'Keyboard'">
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
            <div v-if="category == 'Scanner'">
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
            <div v-if="category == 'Surge Protector'">
                <div class="grid grid-cols-2 gap-x-6">
                    <TextField id="number_outlets" labelFor="number_outlets" fieldName="Number Of Outlets: " v-model="number_outlets"/>
                </div>
            </div>

            <!-- THIS IS THE UPS SECTION -->
            <div v-if="category == 'UPS'">
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
            <div v-if="category == 'Speaker'">
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
            <div v-if="category == 'Other Equipment'">
                <div class="grid grid-cols-2 gap-x-6">
                    <TextField id="other_equipment_type" labelFor="other_equipment_type" fieldName="Equipment Type: " v-model="other_equipment_type"/>
                </div>
            </div>

            <!-- THIS IS THE PRINTER SECTION -->
            <div v-if="category == 'Printer'">
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
            <div v-if="category == 'CRAV'">
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
            <div v-if="category == 'Network Switch'">
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
            <div v-if="category == 'Monitor'">
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

                <div class="flex flex-row-reverse mb-6 group">
                    <select id="branch" :class="[option_field_class]" class="bg-white" v-model.number="branch">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                    </select>
                    <TextLabel labelFor="branch" fieldName="Branch" />
                </div>
            </div>

            <!-- THIS IS THE WORKBENCH SECTION -->
            <div class="mt-8 grid grid-cols-2 gap-x-6">
                <div class="flex flex-row-reverse mb-6 group">
                    <select id="workbench" :class="[option_field_class]" class="bg-white" v-model.number="workbench">
                        <option :value=null selected class="text-blue-100"></option>
                        <option v-for="workbench in workbenches" :key="workbench.workbench_id" :value=workbench.workbench_id class="text-black">{{ workbench.workbench_name }}</option>
                    </select>
                    <TextLabel labelFor="workbench" fieldName="Workbench" />
                </div>
            </div>
            

            <div class="flex justify-around">
                <!-- <button @click="openSerialModal(deviceData.serial_number)" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
                    Change Serial
                </button> -->

                <AddItemButton buttonName="Update Item"/>

                <button @click="getDeviceDetails()" type="button" class="content-center w-1/5 cursor-pointer py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow focus:outline-none focus:ring-2">
                    Reset
                </button>
            </div>
        </form>
    </SectionTemplate>

    <div v-show="showSerialModal" @close="closeSerialModal" class="fixed inset-0 z-60 bg-black/70 flex justify-center items-start">
        <div ref="serialRef" class="p-2 w-3/10 z-50 mt-10 bg-gray-100 border-2 border-gray-600 rounded-md shadow-lg shadow-black">
            <!-- This is the error sign -->
            <div class="flex justify-center">
                <span class="material-icons !text-7xl text-blue-500 mb-6"> 
                    error
                </span>
            </div>

            <div class="p-2 flex justify-center">
                <div class="flex flex-col">
                    <TextField id="new_serial" labelFor="new_serial" fieldName="New Serial Number: " v-model="new_serial"/>


                    <button @click="requestSerialChange" class="mt-4 p-2 cursor-pointer bg-blue-500 rounded-sm text-white font-bold hover:bg-blue-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import SectionTemplate from '@/components/SectionTemplate.vue';
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'
import { onClickOutside } from '@vueuse/core'

import { useRoute, useRouter } from 'vue-router';

import AddItemButton from '@/components/AddItemButton.vue';

import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';

import { getBagFabricTypes, getBagTypes, getWorkbenches, getStatuses, getDivisions, getRaidTypes, getMonitorFunctions, getMonitorTypes, getMeetingRooms, getCRAVEquipmentTypes, getSpeakerTypes, getCPUTypes, getFormFactors, getConnectionTypes, getPrinterFeatures, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getDivisionBranches, getBranches } from '@/utils/descriptions';


const route = useRoute();
const router = useRouter();

const deviceData = ref(null);
const deviceCategory = ref(null);
const errorMessage = ref(null);

const serial_number = route.params.serial_number;
const category = route.query.category;

const workbenches = ref([])
const branches = ref([])
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
const bag_types = ref([])
const bag_fabric_types = ref([])

const showSerialModal = ref(false)
const new_serial = ref("")



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
    "bag_exists", "bag_type", "bag_brand", "bag_model", "bag_ministry_number", "bag_fabric_type", "bag_delivery_date", "bag_assignment_date", "bag_status", "bag_bos_date", 
    "adapter_exists", "adapter_serial_number", "adapter_brand", "adapter_model", "adapter_ministry_number", "adapter_delivery_date", "adapter_assignment_date", "adapter_status", "adapter_bos_date",  

    "parish", "location_type", "location", "division", "branch", "comment", "workbench"
];

const refs = {};

fieldNames.forEach(name => {
    const key = `${name}`;
    const saved = localStorage.getItem(`${key}_val`);

    const invalidValues = [null, "", "null", "undefined", "false"];

    refs[key] = ref(
        invalidValues.includes(saved) ? null : saved
    );

    watch(refs[key], val => {
        if (val === null || val === undefined || val === false) {
            localStorage.removeItem(`${key}_val`);
        } else {
            localStorage.setItem(`${key}_val`, String(val));
        }
    });
});

const {
    brand,
    model,
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

    bag_exists,
    bag_type, 
    bag_brand, 
    bag_model, 
    bag_ministry_number, 
    bag_fabric_type, 
    bag_delivery_date, 
    bag_assignment_date, 
    bag_status, 
    bag_bos_date,

    adapter_exists,
    adapter_serial_number, 
    adapter_brand, 
    adapter_model, 
    adapter_ministry_number, 
    adapter_delivery_date, 
    adapter_assignment_date, 
    adapter_status, 
    adapter_bos_date,
    
    parish,
    location_type,
    location,
    division,
    branch,
    comment,
    workbench,
} = refs;

const originalStatus = ref(null);

const dropdownsLoaded = ref(false);

onMounted(async () => {
  try {
    workbenches.value = await getWorkbenches();

    statuses.value = await getStatuses();

    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();

    locationTypes.value = await getLocationTypes();

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

    bag_fabric_types.value = await getBagFabricTypes(); 
    
    bag_types.value = await getBagTypes();

    if (parish.value) {
        parishChange(parish.value)
    }

    if (division.value) {
        divisionChange(division.value)
    }

    dropdownsLoaded.value = true;

  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

async function parishChange(parishValue) {
    if (location.value == null || !location.value) {

        try {
        locations.value = await getParishLocations(parishValue);


        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter Parish Change If");
        locations.value = await getParishLocations(parishValue);
    }
}

async function divisionChange(divisionValue) {
    if (branch.value == null || !branch.value) {

        try {
        branches.value = await getDivisionBranches(divisionValue);


        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter division Change If");
        branches.value = await getDivisionBranches(divisionValue);
    }
}

watch (
    parish, async (newParish, oldParish) => {

        // console.log("Parish changed:", newParish);
        // console.log("Parish value:", parish.value, "type:", typeof parish.value);
        // console.log("location value:", location.value, "type:", typeof location.value);

        if (newParish === null || newParish === undefined || newParish === "") {
            return;
        }

        await parishChange(newParish);
    }
)

watch (
    division, async (newDivision, oldDivision) => {

        // console.log("Division changed:", newDivision);
        // console.log("Division value:", division.value, "type:", typeof division.value);
        // console.log("Branch value:", branch.value, "type:", typeof branch.value);

        if (newDivision === null || newDivision === undefined || newDivision === "") {
            return;
        }

        await divisionChange(newDivision);
    }
)



function populateFields(deviceData) {

    // Populate fields with matching names
    for (const key in refs) {
        if (Object.prototype.hasOwnProperty.call(deviceData, key)) {
            refs[key].value = deviceData[key];
            console.log(key, ": ", refs[key].value)
        }
    }

    // Base dropdowns
    status.value = deviceData.status_id || null;
    parish.value = deviceData.parish_id || null;
    location_type.value = deviceData.ltype_id || null;
    location.value = deviceData.location_id || null;
    division.value = deviceData.division_id || null;
    branch.value = deviceData.branch_id || null;
    workbench.value = deviceData.workbench_id || null;
    bag_status.value = deviceData.bag_status_id || null;
    adapter_status.value = deviceData.adapter_status_id || null;


    // CPU Type
    cpu_type.value = cpu_types.value.find(
        item => item.cpu_type_description === deviceData.cpu_type
    )?.cpu_type_id ?? null;

    // Form Factor
    form_factor.value = form_factors.value.find(
        item => item.form_factor_description === deviceData.form_factor
    )?.form_factor_id ?? null;

    // RAID Type
    raid_type.value = raid_types.value.find(
        item => item.raid_type_description === deviceData.raid_type
    )?.raid_type_id ?? null;

    // Connection Type
    connection_type.value = connection_types.value.find(
        item => item.ctype_description === deviceData.connection_type
    )?.ctype_id ?? null;

    // Speaker Type
    speaker_type.value = speaker_types.value.find(
        item => item.speaker_type_description === deviceData.speaker_type
    )?.speaker_type_id ?? null;

    // Printer Features
    printer_features.value = features.value.find(
        item => item.feature_description === deviceData.feature
    )?.feature_id ?? null;

    // CRAV Equipment Type
    crav_equipment_type.value = crav_equipment_types.value.find(
        item => item.crav_equipment_type_description === deviceData.equipment_type
    )?.crav_equipment_type_id ?? null;

    // Meeting Room
    meeting_room.value = meeting_rooms.value.find(
        item => item.meeting_room_description === deviceData.meeting_room
    )?.meeting_room_id ?? null;

    // Monitor Type
    monitor_type.value = monitor_types.value.find(
        item => item.monitor_type_description === deviceData.monitor_type
    )?.monitor_type_id ?? null;

    // Monitor Function
    monitor_function.value = monitor_functions.value.find(
        item => item.monitor_function_description === deviceData.monitor_function
    )?.monitor_function_id ?? null;
}


async function getDeviceDetails() {

    console.log("Serial Number:", serial_number);
    console.log("Category:", category);

    if (!serial_number || !category) {
        errorMessage.value = "Serial number or category is missing.";
        alert(errorMessage.value)
        return;
    }

    deviceData.value = null;
    deviceCategory.value = category;

    try {
        const response = await axios.get(`${useBaseURLComposable()}get-item-sn/`, {
            params: {
                serial_number: serial_number,
                category: category,
            }
        });

        deviceData.value = response.data

        for (const item in deviceData.value) {
            if (deviceData.value[item] == undefined || deviceData.value[item] == null) {
                deviceData.value[item] = "";
            }
        }

        console.log("deviceData: ", deviceData.value)

        populateFields(deviceData.value)
        originalStatus.value = status.value;

        
    } catch (error) {
        if (error.response?.status === 401) {
            router.push({name: 'UserLogin' });
            alert("Please Log In Again")
        }
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}


// Automatically retrieve device when URL parameters change,
// including when the component first loads.
watch(
    () => [
        route.params.serial_number,
        route.query.category,
        dropdownsLoaded.value
    ],
    () => {
        if (dropdownsLoaded.value) {
            getDeviceDetails();
        }
    },
    { immediate: true }
);


function formatDate(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date) ? null : date.toISOString().split('T')[0];
}

async function updateDevice() {
    console.log(
        "Form Data:",
        Object.fromEntries(
            Object.entries(refs).map(([key, value]) => [key, value.value])
        )
    );

    const device = {
        category: category,
        serial_number: serial_number,
        brand: brand.value,
        model: model.value,
        inventory_number: inventory_number.value,
        delivery_date: formatDate(delivery_date.value),
        deployment_date: formatDate(deployment_date.value),
        bos_date: formatDate(bos_date.value),
        supplier_name: supplier_name.value,
        device_cost: String(device_cost.value),
        status_id: status.value,
        workbench_id: workbench.value,


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

        bag_exists: Boolean(bag_exists.value),
    
        bag_type_id: bag_type.value, 
        bag_brand: bag_brand.value, 
        bag_model: bag_model.value, 
        bag_ministry_number: bag_ministry_number.value, 
        bag_fabric_type_id: bag_fabric_type.value, 
        bag_delivery_date: formatDate(bag_delivery_date.value), 
        bag_assignment_date: formatDate(bag_assignment_date.value), 
        bag_status_id: bag_status.value, 
        bag_bos_date: formatDate(bag_bos_date.value),

        adapter_exists: Boolean(adapter_exists.value),
        adapter_serial_number: adapter_serial_number.value, 
        adapter_brand: adapter_brand.value, 
        adapter_model: adapter_model.value, 
        adapter_ministry_number: adapter_ministry_number.value, 
        adapter_delivery_date: formatDate(adapter_delivery_date.value), 
        adapter_assignment_date: formatDate(adapter_assignment_date.value), 
        adapter_status_id: adapter_status.value, 
        adapter_bos_date: formatDate(adapter_bos_date.value),
        
        parish_id: parish.value,
        ltype_id: location_type.value,
        location_id: location.value,
        division_id: division.value,
        branch_id: branch.value,
    }

    for (const key in device) {
        if (device[key] === undefined || device[key] === "") {
            device[key] = null;
        }
    }

    console.log("Actual data sent to FastAPI:", device);

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}update-device/`, device, {
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

        if (error.response?.status === 422) {
            error.response.data.detail.forEach((err, index) => {
                console.log(`Validation Error ${index + 1}`);
                console.log("Field:", err.loc);
                console.log("Message:", err.msg);
                console.log("Input:", err.input);
            });
        }

        alert("Failed to Update Item. Check console.");
    }
}

async function requestSerialChange() {
    try {
        console.log("Current Serial Number: ", deviceData.value.serial_number)
        console.log("New Serial Number: ", new_serial.value)
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}request-serial-change/`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                current_serial_number: deviceData.value.serial_number,
                new_serial_number: new_serial.value,
            }
        });

        console.log(response.data.message)
        alert(response.data.message)
        closeSerialModal()
    } catch (error) {
        console.error('Error finding item:', error.response?.data || error.message);
        alert("Failed to find item. Check console.");
    }
}

async function openSerialModal(serial_number) {
    console.log(serial_number)

    showSerialModal.value = true;
}

async function closeSerialModal() {
    showSerialModal.value = false;

}


const serialRef = ref(null)

onClickOutside(serialRef, () => {
  if (showSerialModal.value) {
    closeSerialModal()
  }
})

</script>