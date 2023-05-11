import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_IP;

const BASE_URL = `${URL}/api/order`;

const createOrder = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/create`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const orderApi = {
    createOrder,
};

export default orderApi;
