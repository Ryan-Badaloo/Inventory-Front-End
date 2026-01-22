<template>
<SectionTemplate templateName="Add User">
    <form @submit.prevent="addUser()" class="space-y-4">
        <div class="mt-8 grid grid-cols-2 gap-x-6">
            <TextField id="first_name" labelFor="first_name" name="first_name" fieldName="Enter First Name: " v-model="first_name"/>

            <TextField id="last_name" labelFor="last_name" name="last_name" fieldName="Enter Last Name: " v-model="last_name"/>

            <TextField id="username" labelFor="username" name="username" fieldName="Enter Email: " v-model="username"/>

            <TextField id="password" labelFor="password" name="password" fieldName="Enter Password: " v-model="password"/>

            <TextField id="office" labelFor="office" name="office" fieldName="Enter Office: "/>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="role_id" :class="[option_field_class]" class="bg-white" v-model="role_id">
                    <option selected class="text-blue-100">Choose a Role</option>
                    <option value=1>Administrator</option>
                    <option value=2>Supervisor</option>
                    <option value=3>Technician</option>
                    <option value=4>View Only</option>
                </select>
                <TextLabel :labelFor="role_id" fieldName="User Role" />
            </div>
        </div>

            

        
        <div class="flex justify-center">
            <AddItemButton buttonName="Add User"/>
        </div>
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';

import { option_field_class } from '@/utils/descriptions';
import TextLabel from '@/components/Fields/TextLabel.vue';

const first_name = ref();
const last_name = ref();
const username = ref();
const password = ref();
const role_id = ref();

async function addUser() {
    const user = {
        firstname: first_name.value,
        lastname: last_name.value,
        email: username.value,
        password: password.value,
        role_id: role_id.value,
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${useBaseURLComposable()}create-user/`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log("User Added Succefully")
        alert("User successfully added.", response.data);
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to add user. Check console.");
    }
}

</script>