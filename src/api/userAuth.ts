import axios from "axios";

// const API_BASE_URL = "http://localhost:5001/api/logs"; // Update to match working endpoints
const API_BASE_URL = 'https://smarthome-sut5.onrender.com/api/logs/';


export const signup = (userData: any) => {
    console.log(userData);
    return axios.post(`${API_BASE_URL}/signup`, userData);
};

export const login = (userData: any) => {
    console.log(userData);
    return axios.post(`${API_BASE_URL}/login`, userData);
};