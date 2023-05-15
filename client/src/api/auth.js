import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_IP;

const API_URL = `${URL}/api/auth`;

const getUserList = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const updateRole = async (_id, role) => {
    try {
        const response = await axios.put(`${API_URL}/update-role/${_id}`, { role });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

const register = (email, password) => {
    return axios.post(API_URL + '/register', { email, password });
};

const login = (email, password) => {
    return axios.post(API_URL + '/login', { email, password }).then((response) => {
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.user.role);
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
};

const authApi = {
    getUserList,
    updateRole,
    register,
    login,
    logout,
};

export default authApi;
