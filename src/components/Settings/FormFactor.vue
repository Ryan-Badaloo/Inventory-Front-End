<template>
<SectionTemplate templateName="Edit Form Factor">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Form Factor Name" />

            <input list="form_factors" name="form_factors_input" id="form_factors_input" :class="[option_field_class]" v-model="selectedFormFactor">

            <datalist id="form_factors">
                <option v-for="form_factor in form_factors" :key="form_factor.form_factor_id" :value="`${form_factor.form_factor_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_form_factor(selectedFormFactor)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_form_factor(selectedFormFactor)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getFormFactors, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const form_factors = ref([])
const selectedFormFactor = ref();
const isFormFactor = ref();

onMounted(async () => {
  try {
    form_factors.value = await getFormFactors();
    console.log(form_factors.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_form_factor(formFactorText) {
    console.log(formFactorText)

    const token = localStorage.getItem('token');
    if (!selectedFormFactor.value) {
        alert("Please Enter a Form Factor")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-form-factor/`, {
            params: {
                form_factor: formFactorText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isFormFactor.value = response.data;

        console.log(isFormFactor.value)

        if (isFormFactor.value == true) {
            alert("This Form Factor Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-form-factor/`, { form_factor: formFactorText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                form_factors.value = await getFormFactors();
                console.log("Form Factor Added Succefully")
                alert("Form Factor successfully added.", response.data);
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

async function remove_form_factor(formFactorText) {
    console.log(formFactorText)

    const token = localStorage.getItem('token');
    if (!selectedFormFactor.value) {
        alert("Please Enter a Form Factor")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-form-factor/`, {
        params: {
            form_factor: formFactorText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isFormFactor.value = response.data;

    console.log(isFormFactor.value)

    if (isFormFactor.value == false) {
        alert("This Form Factor Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-form-factor/`, {
                params: {
                    form_factor: formFactorText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            form_factors.value = await getFormFactors();
            console.log("Form Factor Has Been Deleted")
            alert("Form Factor Has Been Deleted")
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