import { ref } from "vue";
import axios from 'axios';

export const option_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400 focus:outline-none focus:ring-0peer';
export const date_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400'


export async function getStatuses() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-statuses/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getCPUTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-cpu-types/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getConnectionTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-connection-types/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getPrinterFeatures() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-printer-features/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getDivisions() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/get-divisions/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

