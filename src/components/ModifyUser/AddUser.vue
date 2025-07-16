<template>
<SectionTemplate templateName="Add User">
    <form @submit.prevent="" class="space-y-4">
        <div class="flex flex-col md:flex-row md:gap-20">
            <div class="left-side w-full md:w-1/2 space-y-2">
                <TextField id="first_name" labelFor="first_name" name="first_name" fieldName="Enter First Name: "/>

                <TextField id="last_name" labelFor="last_name" name="last_name" fieldName="Enter Last Name: "/>

                <TextField id="username" labelFor="username" name="username" fieldName="Enter Username: "/>

                <TextField id="password" labelFor="password" name="password" fieldName="Enter Password: "/>

                <TextField id="Office" labelFor="Office" name="Office" fieldName="Enter Office: "/>

                <TextField id="user_level" labelFor="user_level" name="user_level" fieldName="Enter User Level: "/>
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

import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';


</script>