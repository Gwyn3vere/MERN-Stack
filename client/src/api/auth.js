import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = (email, password) => {
    return axios.post(API_URL + '/register', { email, password });
};

const login = (email, password) => {
    return axios.post(API_URL + '/login', { email, password }).then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.user)); // lưu trữ thông tin user vào localStorage
            localStorage.setItem('token', response.data.token); // lưu trữ token vào localStorage
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authApi = {
    register,
    login,
    logout,
};

export default authApi;
