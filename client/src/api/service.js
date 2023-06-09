import axios from 'axios';
const URL = process.env.REACT_APP_SERVER_IP;

const BASE_URL = `${URL}/api/service`;

const getServiceList = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// const createOrder = async (formData) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/create`, formData);
//         return response.data;
//     } catch (error) {
//         throw new Error(error.response.data.message);
//     }
// };

const serviceApi = {
    // createOrder,
    getServiceList,
};

export default serviceApi;
