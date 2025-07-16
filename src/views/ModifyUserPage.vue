<template>
  <div class="flex">
    <SideBar />
    <div class="w-full">
        <ModifyUser @device-selected="selectedDevice = $event" />

        <Transition name="fade" mode="out-in">
            <component
                :is="getComponent(selectedDevice)"
                v-if="selectedDevice"
                :key="selectedDevice"
            />
        </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '@/components/SideBar.vue';
import AddUser from '@/components/ModifyUser/AddUser.vue';
import RemoveUser from '@/components/ModifyUser/RemoveUser.vue';
import ViewUsers from '@/components/ModifyUser/ViewUsers.vue';

import ModifyUser from '@/components/ModifyUser/ModifyUser.vue';

const selectedDevice = ref('');

const getComponent = (device) => {
  switch (device) {
    case 'add_user':
      return AddUser;
    case 'remove_user':
      return RemoveUser;
    case 'view_users':
      return ViewUsers;
    default:
      return null;
  }
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>