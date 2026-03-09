import axios from 'axios';
import {useBaseURLComposable} from '../composable/useUrlcomposable'
export const option_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400 focus:outline-none focus:ring-0peer';
export const date_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400'


export async function getStatuses() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-statuses/`, {
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
        const response = await axios.get(`${useBaseURLComposable()}get-cpu-types/`, {
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

export async function getFormFactors() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-form-factors/`, {
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

export async function getRaidTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-raid-types/`, {
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
        const response = await axios.get(`${useBaseURLComposable()}get-connection-types/`, {
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
        const response = await axios.get(`${useBaseURLComposable()}get-printer-features/`, {
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

export async function getSpeakerTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-speaker-types/`, {
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
        const response = await axios.get(`${useBaseURLComposable()}get-divisions/`, {
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

export async function getLocations() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-locations/`, {
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

export async function getParishes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-parishes/`, {
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

export async function getLocationTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-location-types/`, {
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

export async function getParishLocations(parish_id) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-parish-locations/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                parish_id,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getParishDivisions(parish_id) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-parish-divisions/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                parish_id,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getLocationParishes(location_id) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-location-parish/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                location_id,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}

export async function getLocationDivisions(location_id) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-location-division/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                location_id,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error.response?.data || error.message);
        alert("Failed to add item. Check console.");
    }
}



