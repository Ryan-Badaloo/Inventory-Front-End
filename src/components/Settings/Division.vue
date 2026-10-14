<template>
<SectionTemplate templateName="Edit System Status">
    <form @submit.prevent="">

        <div class="mt-8 grid grid-cols-2 gap-x-6">

            <div class="flex flex-row-reverse mb-6 group">
                <select id="_parish" :class="[option_field_class]" class="bg-white" v-model.number="parish">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="parish in parishes" :key="parish.parish_id" :value=parish.parish_id class="text-black">{{ parish.parish_name }}</option>
                </select>
                <TextLabel labelFor="parish" fieldName="Parish" />
            </div>
            
            <div class="flex flex-row-reverse mb-6 group">
                <select id="location_type" :class="[option_field_class]" class="bg-white" v-model.number="location_type">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location_type in locationTypes" :key="location_type.ltype_id" :value=location_type.ltype_id class="text-black">{{ location_type.ltype_name }}</option>
                </select>
                <TextLabel :labelFor="location_type" fieldName="Location Type" />
            </div>

            <div class="flex flex-row-reverse mb-6 group">
                <select id="location" :class="[option_field_class]" class="bg-white" v-model.number="location">
                    <option :value=null selected class="text-blue-100"></option>
                    <option v-for="location in locations" :key="location.location_id" :value=location.location_id class="text-black">{{ location.location_name }}</option>
                </select>
                <TextLabel labelFor="location" fieldName="Location" />
            </div>

            <div class="flex mb-6 group"> 
                <TextLabel fieldName="Enter Division Name" />

                <input list="divisions" name="division_input" id="division_input" :class="[option_field_class]" v-model="selectedDivision">

                <datalist id="divisions">
                    <option v-for="division in divisions" :key="division.division_id" :value="`${division.division_name}`" class="text-black"></option>
                </datalist>
            </div>

            
        </div>

        <div class="flex justify-around">
            <button @click="add_division(selectedDivision, location)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_division(selectedDivision)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                delete
            </button>
        </div>
        

    </form> 
</SectionTemplate>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import SectionTemplate from '@/components/SectionTemplate.vue';
import TextLabel from '../Fields/TextLabel.vue';
import { getStatuses, getDivisions, option_field_class, date_field_class, getLocations, getParishes, getLocationTypes, getParishLocations, getParishDivisions, getLocationParishes, getLocationDivisions } from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const divisions = ref([])
const locations = ref([])
const parishes = ref([])
const locationTypes = ref([])

onMounted(async () => {
  try {
    divisions.value = await getDivisions();
    console.log(divisions.value);

    divisions.value = await getDivisions();

    locations.value = await getLocations();

    parishes.value = await getParishes();
    
    locationTypes.value = await getLocationTypes();

    if (location.value) {
        locationChange(location.value)
    } else if (parish.value) {
        parishChange(parish.value)
    }

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

const divisionRefs = {};

const fieldNames = [
  "parish", "location_type", "location", "selectedDivision"
];

fieldNames.forEach(name => {
    const key = `${name}`;
    const saved = localStorage.getItem(`${key}_val`);
    /* divisionRefs[key] = ref(saved || null); */
    divisionRefs[key] = ref(saved === null || saved === "" || saved === "null" ? null : saved);

    watch(divisionRefs[key], val => {
        localStorage.setItem(`${key}_val`, val == null ? "" : String(val));
    });
}); 

const {

    parish,
    location_type,
    location,
    selectedDivision,
} = divisionRefs;

async function parishChange(parishValue) {
    if (location.value == null || !location.value) {

        try {
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);

        divisions.value = await getParishDivisions(parishValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        locations.value = await getParishLocations(parishValue);
        console.log(locations.value);
    }
}

async function locationChange(locationValue) {
    if (location.value != null) {

        try {
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        divisions.value = await getLocationDivisions(locationValue);
        console.log(divisions.value);

        } catch (err) {
        console.error(err);
        }
    } else {
        console.log("Did not enter if");
        parishes.value = await getLocationParishes(locationValue);
        console.log(parishes.value);

        console.log(parish.value)
        divisions.value = await getParishDivisions(parish.value);
        console.log(divisions.value);
    }
}

watch (
    parish, async (newParish, oldParish) => {

        console.log("Parish changed:", newParish);
        console.log("Parish value:", parish.value, "type:", typeof parish.value);
        console.log("location value:", location.value, "type:", typeof location.value);

        parishChange(newParish)
    }
)

watch (
    location, async (newLocation, oldLocation) => {

        console.log("Location changed:", newLocation);
        console.log("Parishes:", parish.value)
        console.log("Divisions:", selectedDivision.value)

        console.log("location value:", location.value);
        locationChange(newLocation)
        
    }
)

async function add_division(divisionText, location_id) {
    console.log("Division Name: ", divisionText)
    console.log("Location ID: ", location_id)
    
    const division = {
        division: divisionText,
        location: location_id,
    }

    try {
        const token = localStorage.getItem('token');
        if (!selectedDivision.value) {
            alert("Please Enter a Division")
        } else {
            const response = await axios.post(`${useBaseURLComposable()}add-division/`, division, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            divisions.value = await getDivisions();
            console.log("Division Added Succefully")
            alert("Division successfully added.", response.data);
        }    
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to add item. Check console.");
    }
}

async function remove_division(divisionText) {
    try {

        const token = localStorage.getItem('token');
        if (!selectedDivision.value) {
            alert("Please Enter a Division")
        } else {
            await axios.delete(`${useBaseURLComposable()}delete-division/`, {
                params: {
                    division: divisionText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            divisions.value = await getDivisions();
            console.log("Division Has Been Deleted")
            alert("Division Has Been Deleted")
        }
    } catch (error) {
        console.error(
        "Error creating item:",
        error.response?.data || error.message
        );
        console.error("Detail:", error.response?.data?.detail);

        alert("Failed to find Client. Check console.");
    }
}
</script>