import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

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
};

export default roomApi;
