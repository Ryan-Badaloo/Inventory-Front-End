<template>
<SectionTemplate templateName="Edit Bag Types">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Bag Type Name" />

            <input list="bag_types" name="bag_types_input" id="bag_types_input" :class="[option_field_class]" v-model="selectedBagType">

            <datalist id="bag_types">
                <option v-for="bag_type in bag_types" :key="bag_type.bag_type_id" :value="`${bag_type.bag_type_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_bag_type(selectedBagType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_bag_type(selectedBagType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                delete
            </button>
        </div>
        
    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import TextLabel from '../Fields/TextLabel.vue';
import { getBagTypes, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const bag_types = ref([])
const selectedBagType = ref();
const isBagType = ref();

onMounted(async () => {
  try {
    bag_types.value = await getBagTypes();
    console.log(bag_types.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_bag_type(bagTypeText) {
    console.log(bagTypeText)

    const token = localStorage.getItem('token');
    if (!selectedBagType.value) {
        alert("Please Enter a Bag Type")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-bag-type/`, {
            params: {
                bag_type: bagTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isBagType.value = response.data;

        console.log(isBagType.value)

        if (isBagType.value == true) {
            alert("This Bag Type Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-bag-type/`, { bag_type: bagTypeText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                bag_types.value = await getBagTypes();
                console.log("Bag Type Added Succefully")
                alert("Bag Type successfully added.", response.data);
            } catch (error) {
                console.error(
                "Error creating item:",
                error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add item. Check console.");
            }
        }
    }
}

async function remove_bag_type(bagTypeText) {
    console.log(bagTypeText)

    const token = localStorage.getItem('token');
    if (!selectedBagType.value) {
        alert("Please Enter a Bag Type")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-bag-type/`, {
        params: {
            bag_type: bagTypeText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isBagType.value = response.data;

    console.log(isBagType.value)

    if (isBagType.value == false) {
        alert("This Bag Type Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-bag-type/`, {
                params: {
                    bag_type: bagTypeText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            bag_types.value = await getBagTypes();
            console.log("Bag Type Has Been Deleted")
            alert("Bag Type Has Been Deleted")
        } catch (error) {
            console.error(
            "Error creating item:",
            error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to find Client. Check console.");
        }
    }
}
</script>