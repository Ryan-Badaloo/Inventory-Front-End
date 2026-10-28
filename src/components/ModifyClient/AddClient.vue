<template>
<SectionTemplate templateName="Add Client">
    <form @submit.prevent="addClient()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6 text-teal-800">
        
            <TextField id="client_first_name" labelFor="client_first_name" name="client_first_name" fieldName="Enter First Name: " v-model="client_first_name"/>

            <TextField id="client_last_name" labelFor="client_last_name" name="client_last_name" fieldName="Enter Last Name: " v-model="client_last_name"/>

            <TextField id="client_username" labelFor="client_username" name="client_username" fieldName="Enter Email: " v-model="client_username"/>

            <TextField id="client_phone_number" labelFor="client_phone_number" name="client_phone_number" fieldName="Enter Phone Number: " v-model="client_phone_number"/>

            <TextField id="client_position" labelFor="client_position" name="client_position" fieldName="Enter Position: " v-model="client_position"/>
        
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="client_parish" :class="[option_field_class]" class="bg-white" v-model.number="client_parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="client_parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="client_location_type" :class="[option_field_class]" class="bg-white" v-model.number="client_location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel labelFor="client_location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="client_location" :class="[option_field_class]" class="bg-white" v-model.number="client_location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="client_location" fieldName="Location" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="client_division" :class="[option_field_class]" class="bg-white" v-model.number="client_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>
                </select>
                <TextLabel labelFor="client_division" fieldName="Division" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="client_branch" :class="[option_field_class]" class="bg-white" v-model.number="client_branch">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="branch in branches" :key="branch.branch_id" :value=branch.branch_id class="text-black">{{ branch.branch_name }}</option>
                </select>
                <TextLabel labelFor="client_branch" fieldName="Branch" />
            </div>
        </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add Client"/>
        </div>
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextLabel from '@/components/Fields/TextLabel.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


import { option_field_class, getDivisions, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions, getDivisionBranches, getBranches } from '@/utils/descriptions';


const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])
const branches = ref([])

onMounted(async () => {
  try {
    divisions.value = await getDivisions();

    branches.value = await getBranches();

    locations.value = await getLocations();

    parishes.value = await getParishes();

    locationTypes.value = await getLocationTypes();

    if (client_parish.value) {
        parishChange(client_parish.value)
    }

    if (client_division.value) {
        divisionChange(client_division.value)
    }

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const fieldNames = [
    "first_name", "last_name", "username", "phone_number", "position",
    "parish", "location_type", "location", "division", "branch"
];

const clientRefs = {};

fieldNames.forEach(name => {
    const key = `client_${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* clientRefs[key] = ref(saved || null); */
    clientRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(clientRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    client_first_name,
    client_last_name,
    client_username,
    client_phone_number,
    client_position,
    client_parish,
    client_location_type,
    client_location,
    client_division,
    client_branch,
} = clientRefs;



async function parishChange(parishValue) {
    if (client_location.value == null || !client_location.value) {

        try {
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter Parish Change If");
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);
    }
}

async function divisionChange(divisionValue) {
    if (client_branch.value == null || !client_branch.value) {

        try {
        branches.value = await getDivisionBranches(divisionValue);
        console.log(branches.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter division Change If");
        branches.value = await getDivisionBranches(divisionValue);
        console.log(branches.value);
    }
}



watch (
    client_parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", client_parish.value, "type:", typeof client_parish.value);
        console.log("location value:", client_location.value, "type:", typeof client_location.value);

        parishChange(newParish)
    }
)

watch (
    client_division, async (newDivision, oldDivision) => {

        console.log("Division changed:", newDivision);
        console.log("Division value:", client_division.value, "type:", typeof client_division.value);
        console.log("Branch value:", client_branch.value, "type:", typeof client_branch.value);

        divisionChange(newDivision)
    }
)



async function addClient() {
    const client = {
        firstname: client_first_name.value,
        lastname: client_last_name.value,
        email: client_username.value,
        phone_number: client_phone_number.value,
        position: client_position.value,
        parish_id: client_parish.value,
        ltype_id: client_location_type.value,
        location_id: client_location.value,
        division_id: client_division.value,
        branch_id: client_branch.value,

    }

    for (const key in client) {
        if (client[key] === undefined || client[key] === "") {
            client[key] = null;
        }
    }

    if (!client_first_name.value || !client_last_name.value) {
        alert("First and Last Names are required")
    } else if (!client_username.value) {
        alert("Email is required")
    } else {
        try {
            const token = localStorage.getItem('token');
            console.log(client)
            const response = await axios.post(`${useBaseURLComposable()}add-client/`, client, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.data == "User Found") {
                alert("User Already Exists", response.data)
                console.log(response.data)
            }
            else {
                console.log(response.data)
                alert("Client successfully added.", response.data);
            }
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to add client. Check console.");
        }
    }
}





</script>