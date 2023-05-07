import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const createRoom = (roomData) => {
    return axios.post(`${API_URL}/room/create`, roomData);
};

export default { createRoom };
