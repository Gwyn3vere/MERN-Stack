import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const fetchRooms = () => axios.get(`${URL}/room`);

const axiosInstance = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
export const createRoom = (payload) => {
    const formData = new FormData();
    formData.append('nameRoom', payload.nameRoom);
    formData.append('slugRoom', payload.slugRoom);
    formData.append('priceRoom', payload.priceRoom);
    formData.append('typeRoom', payload.typeRoom);
    formData.append('numberCustomer', payload.numberCustomer);
    formData.append('acreageRoom', payload.acreageRoom);
    formData.append('descRoom', payload.descRoom);
    formData.append('thumbnailRoom', payload.thumbnailRoom);

    // add libraryRoom to formData
    for (let i = 0; i < payload.libraryRoom.length; i++) {
        formData.append('libraryRoom', payload.libraryRoom[i]);
    }

    return axiosInstance.post(`${URL}/room/create`, formData);
};
