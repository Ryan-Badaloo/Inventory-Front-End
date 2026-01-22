<template>
<div>
   <SectionTemplate templateName="Add User">
      <form @submit.prevent="change_password" class="space-y-4">
         <div class="flex flex-col md:flex-row md:gap-20">
               <div class="left-side w-full md:w-1/2 space-y-2">
                  <Password id="old_password" labelFor="old_password" name="old_password" fieldName="Enter Old Password: " v-model="old_password"/>

                  <Password id="new_password" labelFor="new_password" name="new_password" fieldName="Enter New Password: " v-model="new_password"/>

                  <Password id="confirm_new_password" labelFor="confirm_new_password" name="confirm_new_password" fieldName="Confirm New Password: " v-model="confirm_new_password"/>
               </div>
         </div>
         
         <div class="flex justify-center">
               <AddItemButton buttonName="Change Password"/>
         </div>
      </form> 
   </SectionTemplate>
</div>
</template>

<script setup>
import SectionTemplate from './SectionTemplate.vue';
import AddItemButton from './AddItemButton.vue';
import Password from './Fields/PasswordField.vue';
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'

const old_password = ref()
const new_password = ref()
const confirm_new_password = ref()


async function change_password() {
   if (new_password.value == confirm_new_password.value) {
      const password_set = {
         old_password: old_password.value,
         new_password: new_password.value,
      }

      try {
         const token = localStorage.getItem('token');
         const response = await axios.post(`${useBaseURLComposable()}change-password/`, password_set, {
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