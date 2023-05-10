import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_IP;

const BASE_URL = `${URL}/api`;

const createRoom = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/room/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const getRoomBySlug = async (slugRoom) => {
    try {
        const response = await axios.get(`${BASE_URL}/room/${slugRoom}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const getRoomById = async (_id) => {
    try {
        const response = await axios.get(`${BASE_URL}/room/find/${_id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const updateRoom = async (_id, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/room/update/${_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const getRoomList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/room`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const roomApi = {
    createRoom,
    getRoomList,
    updateRoom,
    getRoomBySlug,
    getRoomById,
};

export default roomApi;
