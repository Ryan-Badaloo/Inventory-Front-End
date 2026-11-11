<template>
<div>
    <SectionTemplate :templateName="deviceData?.serial_number || 'View Item'">
        <!-- THIS IS THE DEVICE SECTION -->
        <div class="">
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
                    <h1 class="show_detail_head">Parish:</h1>
                    <h1 class="show_detail_body">{{ deviceData.parish_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Location Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.ltype_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Location:</h1>
                    <h1 class="show_detail_body">{{ deviceData.location_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Division:</h1>
                    <h1 class="show_detail_body">{{ deviceData.division_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Branch:</h1>
                    <h1 class="show_detail_body">{{ deviceData.branch_name }}</h1>
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
                    <h1 class="show_detail_head">Return Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.return_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Deployed By:</h1>
                    <h1 class="show_detail_body">{{ deviceData.deployed_by }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Supplier Name:</h1>
                    <h1 class="show_detail_body">{{ deviceData.supplier_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Device Cost:</h1>
                    <h1 class="show_detail_body">{{ deviceData.device_cost }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Workbench:</h1>
                    <h1 class="show_detail_body">{{ deviceData.workbench_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Verification:</h1>
                    <h1 class="show_detail_body">{{ deviceData.verification }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Verified By:</h1>
                    <h1 class="show_detail_body">{{ deviceData.verified_by }}</h1>
                </div>
            </div>

        </div>

        <!-- THIS IS THE LAPTOP SECTION -->
        <div class="pt-2">
            <div v-if="deviceCategory === 'Laptop' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
                <div class="flex">
                    <h1 class="show_detail_head">CPU Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.cpu_type_id }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                    <h1 class="show_detail_body">{{ deviceData.hard_disk_capacity }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Memory Capacity:</h1>
                    <h1 class="show_detail_body">{{ deviceData.memory_capacity }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Processor Speed:</h1>
                    <h1 class="show_detail_body">{{ deviceData.processor_speed }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Processor Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.processor_type }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Computer Name:</h1>
                    <h1 class="show_detail_body">{{ deviceData.computer_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Mac Address:</h1>
                    <h1 class="show_detail_body">{{ deviceData.mac_address }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Operating System:</h1>
                    <h1 class="show_detail_body">{{ deviceData.operating_system }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Microsoft Office Version:</h1>
                    <h1 class="show_detail_body">{{ deviceData.microsoft_office_version }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Antivirus:</h1>
                    <h1 class="show_detail_body">{{ deviceData.antivirus }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Pdf:</h1>
                    <h1 class="show_detail_body">{{ deviceData.pdf_reader }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Warranty Start Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Warranty End Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Manufactured Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.manufactured_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Memory Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.memory_type }}</h1>
                </div>

            </div>

        </div>

        <!-- THIS IS THE DESKTOP SECTION -->
        <div v-if="deviceCategory === 'Desktop' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">CPU Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.cpu_type }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                <h1 class="show_detail_body">{{ deviceData.hard_disk_capacity }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Memory Capacity:</h1>
                <h1 class="show_detail_body">{{ deviceData.memory_capacity }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Processor Speed:</h1>
                <h1 class="show_detail_body">{{ deviceData.processor_speed }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Processor Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.processor_type }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Computer Name:</h1>
                <h1 class="show_detail_body">{{ deviceData.computer_name }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Mac Address:</h1>
                <h1 class="show_detail_body">{{ deviceData.mac_address }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Operating System:</h1>
                <h1 class="show_detail_body">{{ deviceData.operating_system }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Microsoft Office Version:</h1>
                <h1 class="show_detail_body">{{ deviceData.microsoft_office_version }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Antivirus:</h1>
                <h1 class="show_detail_body">{{ deviceData.antivirus }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Pdf:</h1>
                <h1 class="show_detail_body">{{ deviceData.pdf_reader }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty Start Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty End Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Manufactured Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.manufactured_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Memory Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.memory_type }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Form Factor:</h1>
                <h1 class="show_detail_body">{{ deviceData.form_factor }}</h1>
            </div>

        </div>



        <!-- THIS IS THE SERVER SECTION -->
        <div class="pt-2">
            <div v-if="deviceCategory === 'Server' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
                <div class="flex">
                    <h1 class="show_detail_head">CPU Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.cpu_type_id }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                    <h1 class="show_detail_body">{{ deviceData.hard_disk_capacity }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Memory Capacity:</h1>
                    <h1 class="show_detail_body">{{ deviceData.memory_capacity }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Processor Speed:</h1>
                    <h1 class="show_detail_body">{{ deviceData.processor_speed }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Processor Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.processor_type }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Computer Name:</h1>
                    <h1 class="show_detail_body">{{ deviceData.computer_name }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Mac Address:</h1>
                    <h1 class="show_detail_body">{{ deviceData.mac_address }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Operating System:</h1>
                    <h1 class="show_detail_body">{{ deviceData.operating_system }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Microsoft Office Version:</h1>
                    <h1 class="show_detail_body">{{ deviceData.microsoft_office_version }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Antivirus:</h1>
                    <h1 class="show_detail_body">{{ deviceData.antivirus }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Pdf:</h1>
                    <h1 class="show_detail_body">{{ deviceData.pdf_reader }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Warranty Start Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Warranty End Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Manufactured Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.manufactured_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Memory Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.memory_type }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Form Factor:</h1>
                    <h1 class="show_detail_body">{{ deviceData.form_factor }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Raid Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.raid_type }}</h1>
                </div>

            </div>

        </div>



        <!-- THIS IS THE TABLET SECTION -->
        <div v-if="deviceCategory === 'Tablet' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">IMEI Number:</h1>
                <h1 class="show_detail_body">{{ deviceData.imei_number }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Operating System:</h1>
                <h1 class="show_detail_body">{{ deviceData.operating_system }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Version:</h1>
                <h1 class="show_detail_body">{{ deviceData.version }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Hard Disk Capacity:</h1>
                <h1 class="show_detail_body">{{ deviceData.hard_disk_capacity }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Memory Capacity:</h1>
                <h1 class="show_detail_body">{{ deviceData.memory_capacity }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty Start Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty End Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
            </div>
        </div>

        <div v-if="deviceCategory === 'Tablet' && deviceData && deviceData.bag_exists == true" class="mt-6">
            <div class="flex">
                <h1 class="text-3xl font-bold">Bag Information</h1>
            </div>
            <div class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
                <div class="flex">
                    <h1 class="show_detail_head">Brand:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_brand }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Model:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_model }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Ministry Number:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_ministry_number }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Delivery Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_delivery_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Assignment Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_assignment_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">BOS Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_bos_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Bag Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_type }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Bag Fabric Type:</h1>
                    <h1 class="show_detail_body">{{ deviceData.bag_fabric_type }}</h1>
                </div>
            </div>
        </div>

        <div v-if="deviceCategory === 'Tablet' && deviceData  && deviceData.adapter_exists == true" class="mt-6">
            <h1 class="text-3xl font-bold">Adapter Information</h1>
            <div class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
                <div class="flex">
                    <h1 class="show_detail_head">Serial Number:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_serial_number }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Brand:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_brand }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Model:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_model }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Ministry Number:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_ministry_number }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Delivery Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_delivery_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">Assignment Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_assignment_date }}</h1>
                </div>
                <div class="flex">
                    <h1 class="show_detail_head">BOS Date:</h1>
                    <h1 class="show_detail_body">{{ deviceData.adapter_bos_date }}</h1>
                </div>
            </div>
        </div>



        <!-- THIS IS THE MOUSE KEYBOARD SECTION -->
        <div v-if="(deviceCategory === 'Mouse' || deviceCategory === 'Keyboard') && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Connection Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.connection_type }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE SCANNER SECTION -->
        <div v-if="deviceCategory === 'Scanner' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Connection Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.connection_type }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE SURGE PROTECTOR SECTION -->
        <div v-if="deviceCategory === 'Surge Protector' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Number Of Outlets:</h1>
                <h1 class="show_detail_body">{{ deviceData.number_of_outlets }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE UPS SECTION -->
            <div v-if="deviceCategory === 'UPS' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Number Of Outlets:</h1>
                <h1 class="show_detail_body">{{ deviceData.number_of_outlets }}</h1>
            </div>
        </div>

        <!-- THIS IS THE SPEAKER SECTION -->
        <div v-if="deviceCategory === 'Speaker' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Number Of Speakers:</h1>
                <h1 class="show_detail_body">{{ deviceData.number_of_speakers }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Speaker Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.speaker_type }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE OTHER EQUIPMENT SECTION -->
        <div v-if="deviceCategory === 'Other Equipment' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Equipment type:</h1>
                <h1 class="show_detail_body">{{ deviceData.equipment_type }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE PRINTER SECTION -->
        <div v-if="deviceCategory === 'Printer' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">IP Address ID:</h1>
                <h1 class="show_detail_body">{{ deviceData.ip_address }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Feature ID:</h1>
                <h1 class="show_detail_body">{{ deviceData.feature }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Connection Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.connection_type }}</h1>
            </div>
        </div>

        <!-- THIS IS THE CRAV SECTION -->
        <div v-if="deviceCategory === 'CRAV' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Name:</h1>
                <h1 class="show_detail_body">{{ deviceData.name }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">IP Address ID:</h1>
                <h1 class="show_detail_body">{{ deviceData.ip_address }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Mac Address:</h1>
                <h1 class="show_detail_body">{{ deviceData.mac_address }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Meeting Room:</h1>
                <h1 class="show_detail_body">{{ deviceData.meeting_room }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Equipment Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.equipment_type }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE NETWORK SWITCH SECTION -->
        <div v-if="deviceCategory === 'Network Switch' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Warranty Start Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty End Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Mac Address:</h1>
                <h1 class="show_detail_body">{{ deviceData.mac_address }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Device Size:</h1>
                <h1 class="show_detail_body">{{ deviceData.device_size }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Firmware Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.firmware_type }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Firmware Version:</h1>
                <h1 class="show_detail_body">{{ deviceData.firmware_version }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Device Name:</h1>
                <h1 class="show_detail_body">{{ deviceData.device_name }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Manufactured Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.manufactured_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Physical Location:</h1>
                <h1 class="show_detail_body">{{ deviceData.physical_location }}</h1>
            </div>
                
        </div>

        <!-- THIS IS THE MONITOR SECTION -->
        <div v-if="deviceCategory === 'Monitor' && deviceData" class="pt-2 grid grid-cols-2 gap-x-6 gap-y-2">
            <div class="flex">
                <h1 class="show_detail_head">Warranty Start Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_start_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Warranty End Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.warranty_end_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Manufactured Date:</h1>
                <h1 class="show_detail_body">{{ deviceData.manufactured_date }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Monitor Size:</h1>
                <h1 class="show_detail_body">{{ deviceData.monitor_size }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Monitor Type:</h1>
                <h1 class="show_detail_body">{{ deviceData.monitor_type }}</h1>
            </div>
            <div class="flex">
                <h1 class="show_detail_head">Monitor Function:</h1>
                <h1 class="show_detail_body">{{ deviceData.monitor_function }}</h1>
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

const deviceData = ref(null);
const deviceCategory = ref(null);
const errorMessage = ref(null);

async function getDeviceDetails() {
    const serial_number = route.params.serial_number;
    const category = route.query.category;

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

        console.log(response.data)

        deviceData.value = response.data

        for (const item in deviceData.value) {
            if (deviceData.value[item] == undefined || deviceData.value[item] == null) {
                deviceData.value[item] = "";
            }
        }
        
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
    () => [route.params.serial_number, route.query.category],
    () => {
        getDeviceDetails();
    },
    { immediate: true }
);
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


.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

</style>