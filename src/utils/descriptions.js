import axios from 'axios';
import {useBaseURLComposable} from '../composable/useUrlcomposable'
export const option_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400 focus:outline-none focus:ring-0peer';
export const date_field_class = 'basis-2/3 ml-4 block w-full rounded-md border-2 border-gray-400'

export async function getRoles() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-roles/`, {
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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

export async function getMeetingRooms() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-meeting-rooms/`, {
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

export async function getCRAVEquipmentTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-crav-equipment-types/`, {
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

export async function getMonitorTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-monitor-types/`, {
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

export async function getMonitorFunctions() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-monitor-functions/`, {
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

export async function getBagTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-bag-types/`, {
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

export async function getBagFabricTypes() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-bag-fabric-types/`, {
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
    }
}

export async function getBranches() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-branches/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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
        console.log("Full error:", error);
        console.log("error.response:", error.response);
        console.log("error.request:", error.request);
        console.log("error.message:", error.message);

        if (error.response) {
            console.log("HTTP status:", error.response.status);
            console.log("Response data:", error.response.data);
            console.log("FastAPI detail:", error.response.data?.detail);
        }

        return [];
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

export async function getDivisionBranches(division_id) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${useBaseURLComposable()}get-division-branches/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                division_id,
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



