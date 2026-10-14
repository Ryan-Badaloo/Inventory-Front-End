<template>
<SectionTemplate templateName="Edit Meeting Rooms">
    <form @submit.prevent="" class="space-y-4 w-1/2">
        
        <div class="flex mb-6 group"> 
            <TextLabel fieldName="Enter Meeting Room Name" />

            <input list="meeting_rooms" name="meeting_rooms_input" id="meeting_rooms_input" :class="[option_field_class]" v-model="selectedMeetingRoom">

            <datalist id="meeting_rooms">
                <option v-for="meeting_room in meeting_rooms" :key="meeting_room.meeting_room_id" :value="`${meeting_room.meeting_room_description}`" class="text-black"></option>
            </datalist>
        </div>

        <div class="flex justify-around">
            <button @click="add_meeting_room(selectedMeetingRoom)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
                add
            </button>

            <button @click="remove_meeting_room(selectedMeetingRoom)" class="material-icons !text-4xl text-white cursor-pointer content-center w-1/5 py-2 px-4 bg-blue-500 hover:bg-blue-700 font-semibold rounded-md shadow focus:outline-none focus:ring-2"> 
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
import { getMeetingRooms, getStatuses, option_field_class} from '@/utils/descriptions';
import {useBaseURLComposable} from '@/composable/useUrlcomposable'


const meeting_rooms = ref([])
const selectedMeetingRoom = ref();
const isMeetingRoom = ref();

onMounted(async () => {
  try {
    meeting_rooms.value = await getMeetingRooms();
    console.log(meeting_rooms.value);

  } catch (err) {
    console.error("Failed to load something", err);
  }
});

async function add_meeting_room(meetingRoomText) {
    console.log(meetingRoomText)

    const token = localStorage.getItem('token');
    if (!selectedMeetingRoom.value) {
        alert("Please Enter a Meeting Room")
    } else {
        console.log(token)
        const response = await axios.get(`${useBaseURLComposable()}get-meeting-room/`, {
            params: {
                meeting_room: meetingRoomText
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        isMeetingRoom.value = response.data;

        console.log(isMeetingRoom.value)

        if (isMeetingRoom.value == true) {
            alert("This Meeting Room Is Already In The System")
        } else {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post(`${useBaseURLComposable()}add-meeting-room/`, { meeting_room: meetingRoomText }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                meeting_rooms.value = await getMeetingRooms();
                console.log("Meeting Room Added Succefully")
                alert("Meeting Room successfully added.", response.data);
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

async function remove_meeting_room(meetingRoomText) {
    console.log(meetingRoomText)

    const token = localStorage.getItem('token');
    if (!selectedMeetingRoom.value) {
        alert("Please Enter a Meeting Room")
    }
    const response = await axios.get(`${useBaseURLComposable()}get-meeting-room/`, {
        params: {
            meeting_room: meetingRoomText
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    isMeetingRoom.value = response.data;

    console.log(isMeetingRoom.value)

    if (isMeetingRoom.value == false) {
        alert("This Meeting Room Is Not In The System")
    } else {
        try {

            const token = localStorage.getItem('token');
            await axios.delete(`${useBaseURLComposable()}delete-meeting-room/`, {
                params: {
                    meeting_room: meetingRoomText
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            meeting_rooms.value = await getMeetingRooms();
            console.log("Meeting Room Has Been Deleted")
            alert("Meeting Room Has Been Deleted")
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