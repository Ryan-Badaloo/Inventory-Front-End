<template>
<SectionTemplate templateName="Edit Microsoft Office Versions">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Microsoft Office Version" />

            <input list="microsoft_office_versions" name="microsoft_office_versions_input" id="microsoft_office_versions_input" :class="[option_field_class]" v-model="selectedMicrosoftOfficeVersion">

            <datalist id="microsoft_office_versions">
                <option v-for="microsoft_office_version in microsoft_office_versions" :key="microsoft_office_version.microsoft_office_version_id" :value="`${microsoft_office_version.microsoft_office_version_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_microsoft_office_version(selectedMicrosoftOfficeVersion)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_microsoft_office_version(selectedMicrosoftOfficeVersion)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getMicrosoftOfficeVersions, option_field_class } from '@/utils/descriptions';
import { useBaseURLComposable } from '@/composable/useUrlcomposable'


const microsoft_office_versions = ref([])
const selectedMicrosoftOfficeVersion = ref();
const isMicrosoftOfficeVersion = ref();

onMounted(async () => {
    try {
        microsoft_office_versions.value = await getMicrosoftOfficeVersions();
        console.log(microsoft_office_versions.value);

    } catch (err) {
        console.error("Failed to load something", err);
    }
});

async function add_microsoft_office_version(microsoftOfficeVersionText) {
    console.log(microsoftOfficeVersionText)

    const token = localStorage.getItem('token');
    if (!selectedMicrosoftOfficeVersion.value) {
        alert("Please Enter a Microsoft Office Version")
    } else {
        const response = await axios.get(`${useBaseURLComposable()}get-microsoft-office-version/`, {
            params: {
                microsoft_office_version: microsoftOfficeVersionText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isMicrosoftOfficeVersion.value = response.data;

        console.log(isMicrosoftOfficeVersion.value)

        if (isMicrosoftOfficeVersion.value == true) {
            alert("This Microsoft Office Version Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-microsoft-office-version/`, { microsoft_office_version: microsoftOfficeVersionText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                microsoft_office_versions.value = await getMicrosoftOfficeVersions();
                console.log("Microsoft Office Version Added Successfully")
                alert("Microsoft Office Version successfully added.");
            } catch (error) {
                console.error(
                    "Error creating item:",
                    error.response?.data || error.message
                );
                console.error("Detail:", error.response?.data?.detail);

                alert("Failed to add Microsoft Office Version. Check console.");
            }
        }
    }
}

async function remove_microsoft_office_version(microsoftOfficeVersionText) {
    console.log(microsoftOfficeVersionText)

    const token = localStorage.getItem('token');
    if (!selectedMicrosoftOfficeVersion.value) {
        alert("Please Enter a Microsoft Office Version")
        return;
    }

    const response = await axios.get(`${useBaseURLComposable()}get-microsoft-office-version/`, {
        params: {
            microsoft_office_version: microsoftOfficeVersionText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isMicrosoftOfficeVersion.value = response.data;

    console.log(isMicrosoftOfficeVersion.value)

    if (isMicrosoftOfficeVersion.value == false) {
        alert("This Microsoft Office Version Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-microsoft-office-version/`, {
                params: {
                    microsoft_office_version: microsoftOfficeVersionText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            microsoft_office_versions.value = await getMicrosoftOfficeVersions();
            console.log("Microsoft Office Version Has Been Deleted")
            alert("Microsoft Office Version Has Been Deleted")
        } catch (error) {
            console.error(
                "Error deleting item:",
                error.response?.data || error.message
            );
            console.error("Detail:", error.response?.data?.detail);

            alert("Failed to delete Microsoft Office Version. Check console.");
        }
    }
}
</script>