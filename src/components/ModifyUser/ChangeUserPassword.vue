<template>
<SectionTemplate templateName="Remove User">
    <form @submit.prevent="change_password" class="space-y-4">
        <div class="flex flex-col md:flex-row md:gap-20">
               <div class="left-side w-full md:w-1/2 space-y-2">
                    <TextField id="email" labelFor="email" name="email" fieldName="Enter Email: " v-model="email"/>

                    <Password id="new_password" labelFor="new_password" name="new_password" fieldName="Enter New Password: " v-model="new_password"/>

                    <Password id="confirm_new_password" labelFor="confirm_new_password" name="confirm_new_password" fieldName="Confirm New Password: " v-model="confirm_new_password"/>
               </div>
         </div>
        
        <div class="flex justify-center">
            <AddItemButton buttonName="Change Password"/>
        </div>
    </form> 
</SectionTemplate>
</template>
    
    
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AddItemButton from '@/components/AddItemButton.vue';
import TextField from '@/components/Fields/TextField.vue';
import SectionTemplate from '@/components/SectionTemplate.vue';
import Password from '@/components/Fields/PasswordField.vue';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const email = ref();
const new_password = ref();
const confirm_new_password = ref();

async function change_password() {
   if (new_password.value == confirm_new_password.value) {
      const user_password_set = {
        email: email.value,
        new_password: new_password.value,
      }

      try {
         const token = localStorage.getItem('token');
         const response = await axios.post(`${useBaseURLComposable()}change-user-password/`, user_password_set, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
         });
         console.log("Password Succesfully Changed")
         alert("Password Changed Succefully", response.data);
      } catch (error) {
         console.error(
         "Error creating item:",
         error.response?.data || error.message
         );
         console.error("Detail:", error.response?.data?.detail);

         alert("Failed to change password. Check console.");
      }
   } else {
      alert("Passwords are not the same")
   }
}


</script>