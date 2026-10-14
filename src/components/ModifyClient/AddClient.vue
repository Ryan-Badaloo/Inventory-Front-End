<template>
<SectionTemplate templateName="Add Client">
    <form @submit.prevent="addClient()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6 text-teal-800">
        
            <TextField id="first_name" labelFor="first_name" name="first_name" fieldName="Enter First Name: " v-model="first_name"/>

            <TextField id="last_name" labelFor="last_name" name="last_name" fieldName="Enter Last Name: " v-model="last_name"/>

            <TextField id="username" labelFor="username" name="username" fieldName="Enter Email: " v-model="username"/>

            <TextField id="phone_number" labelFor="phone_number" name="phone_number" fieldName="Enter Phone Number: " v-model="phone_number"/>

            <TextField id="position" labelFor="position" name="position" fieldName="Enter Position: " v-model="position"/>
        
        </div>

        <div class="mt-8 grid grid-cols-2 gap-x-6 text-teal-800">
            <div class="flex flex-row-reverse mb-6 group">
                <select id="scanner_division" :class="[option_field_class]" class="bg-white" v-model="client_division">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="division in divisions" :key="division.division_id" :value=division.division_id class="text-black">{{ division.division_name }}</option>

                </select>
                <TextLabel labelFor="client_division" fieldName="Division" />
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


import { option_field_class, getDivisions } from '@/utils/descriptions';


const division_id = ref()
const divisions = ref([])

onMounted(async () => {
  try {
    divisions.value = await getDivisions();
    console.log(divisions.value)
  } catch (err) {
    console.error("Failed to load statuses", err);
  }
});

const fieldNames = [
  "first_name", "last_name", "username", "phone_number", "position", "client_division"
];

const clientRefs = {};

fieldNames.forEach(name => {
    const key = name;
    const saved = localStorage.getItem(`${key}_val`);
    /* clientRefs[key] = ref(saved || null); */
    clientRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(clientRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {
    first_name,
    last_name,
    username,
    phone_number,
    position,
    client_division,
} = clientRefs;

async function addClient() {
    const client = {
        firstname: first_name.value,
        lastname: last_name.value,
        email: username.value,
        phone_number: phone_number.value,
        position: position.value,
        division_id: client_division.value,

    }

    if (!first_name.value || !last_name.value) {
        alert("First and Last Names are required")
    } else if (!username.value) {
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