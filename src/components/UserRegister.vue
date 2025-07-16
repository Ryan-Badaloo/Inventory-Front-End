<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Register</h2>

      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <div>
          <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            v-model="confirm_password"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 px-4 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  // Defines the vue component
  name: 'UserRegister',

  // Stores data enters in the form
  data() {
    return {
      username: '',
      password: '',
      usertype: '',
    };
  },
  methods: {
    async register() {
      try {
       // const response = await axios.get(`http://localhost:8080/
        const response = await axios.post('http://localhost:8000/register', {
          username: this.username,
          password: this.password,
          usertype: "regular"
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data);
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
