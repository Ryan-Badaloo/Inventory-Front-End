<template>
<SectionTemplate templateName="Edit Fabric Types">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Fabric Type Name" />

            <input list="bag_fabric_types" name="bag_fabric_types_input" id="bag_fabric_types_input" :class="[option_field_class]" v-model="selectedBagFabricType">

            <datalist id="bag_fabric_types">
                <option v-for="bag_fabric_type in bag_fabric_types" :key="bag_fabric_type.bag_fabric_type_id" :value="`${bag_fabric_type.bag_fabric_type_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_bag_fabric_type(selectedBagFabricType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_bag_fabric_type(selectedBagFabricType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getBagFabricTypes, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const bag_fabric_types = ref([])
const selectedBagFabricType = ref();
const isBagFabricType = ref();

onMounted(async () => {
  try {
    bag_fabric_types.value = await getBagFabricTypes();
    console.log(bag_fabric_types.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_bag_fabric_type(bagFabricTypeText) {
    console.log(bagFabricTypeText)

    const token = localStorage.getItem('token');
    if (!selectedBagFabricType.value) {
        alert("Please Enter a Bag Type")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-bag-fabric-type/`, {
            params: {
                bag_fabric_type: bagFabricTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isBagFabricType.value = response.data;

        console.log(isBagFabricType.value)

        if (isBagFabricType.value == true) {
            alert("This Fabric Type Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-bag-fabric-type/`, { bag_fabric_type: bagFabricTypeText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                bag_fabric_types.value = await getBagFabricTypes();
                console.log("Fabric Type Added Succefully")
                alert("Fabric Type successfully added.", response.data);
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

async function remove_bag_fabric_type(bagFabricTypeText) {
    console.log(bagFabricTypeText)

    const token = localStorage.getItem('token');
    if (!selectedBagFabricType.value) {
        alert("Please Enter a Fabric Type")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-bag-fabric-type/`, {
        params: {
            bag_fabric_type: bagFabricTypeText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isBagFabricType.value = response.data;

    console.log(isBagFabricType.value)

    if (isBagFabricType.value == false) {
        alert("This Fabric Type Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-bag-fabric-type/`, {
                params: {
                    bag_fabric_type: bagFabricTypeText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            bag_fabric_types.value = await getBagFabricTypes();
            console.log("Fabric Type Has Been Deleted")
            alert("Fabric Type Has Been Deleted")
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