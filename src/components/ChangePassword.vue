<template>
<div>
   <SectionTemplate templateName="Add User">
      <form @submit.prevent="" class="space-y-4">
         <div class="flex flex-col md:flex-row md:gap-20">
               <div class="left-side w-full md:w-1/2 space-y-2">
                  <Password id="old_password" labelFor="old_password" name="old_password" fieldName="Enter Old Password: "/>

                  <Password id="new_password" labelFor="new_password" name="new_password" fieldName="Enter New Password: "/>

                  <Password id="confirm_new_password" labelFor="confirm_new_password" name="confirm_new_password" fieldName="Confirm New Password: "/>
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
</script>