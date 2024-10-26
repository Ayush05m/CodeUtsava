import axios from "axios";

// const API_BASE_URL = 'https://smarthome-sut5.onrender.com/api/logs/';
const API_BASE_URL = "http://localhost:5001/api/logs/";


export const AddUser = (userData: any) => {
  return axios.post(`${API_BASE_URL}/addUser`, userData);
};

export const getLog = () => {
  return axios.get(`${API_BASE_URL}/getLogs`);
};

export const RemoveUserAccess = (userData: any) => {
  return axios.post(`${API_BASE_URL}/revokeUserAccess`, userData);
};

export const CheckUserAccess = (userData: any) => {
  return axios.post(`${API_BASE_URL}/checkUserAccess`, userData);
};
