<template>
<SectionTemplate templateName="Edit Raid Type">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Raid Type" />

            <input list="raid_types" name="raid_types_input" id="raid_types_input" :class="[option_field_class]" v-model="selectedRaidType">

            <datalist id="raid_types">
                <option v-for="raid_type in raid_types" :key="raid_type.raid_type_id" :value="`${raid_type.raid_type_description}`" class="text-black">{{ raid_type.raid_type_description }}</option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_raid_type(selectedRaidType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_raid_type(selectedRaidType)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getRaidTypes, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const raid_types = ref([])
const selectedRaidType = ref();
const isCpuType = ref();

onMounted(async () => {
  try {
    raid_types.value = await getRaidTypes();
    console.log(raid_types.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_raid_type(raidTypeText) {
    console.log(raidTypeText)

    const token = localStorage.getItem('token');
    if (!selectedRaidType.value) {
        alert("Please Enter a Raid Type")
    } else {
        const response = await axios.get(`${useBaseURLComposable()}get-raid-type/`, {
            params: {
                raid_type: raidTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isCpuType.value = response.data;

        console.log(isCpuType.value)


        if (isCpuType.value == true) {
            alert("This Raid Type Is Already In The System")
        } else {
            try {
                console.log(raidTypeText)
                const response = await axios.post(`${useBaseURLComposable()}add-raid-type/`, { raid_type: raidTypeText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                raid_types.value = await getRaidTypes();
                console.log("Raid Type Added Succefully")
                alert("Raid Type successfully added.", response.data);
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

async function remove_raid_type(raidTypeText) {
    console.log(raidTypeText)

    const token = localStorage.getItem('token');
    if (!selectedRaidType.value) {
        alert("Please Enter a Raid Type")
    } else { 
        const response = await axios.get(`${useBaseURLComposable()}get-raid-type/`, {
            params: {
                raid_type: raidTypeText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isCpuType.value = response.data;

        console.log(isCpuType.value)

        if (isCpuType.value == false) {
            alert("This Raid Type Is Not In The System")
        } else {
            try {
                await axios.delete(`${useBaseURLComposable()}delete-raid-type/`, {
                    params: {
                        raid_type: raidTypeText
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                raid_types.value = await getRaidTypes();
                console.log("Raid Type Has Been Deleted")
                alert("Raid Type Has Been Deleted")
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
}

</script>