import axios from 'axios';
export const API_CLIENT = axios.create({
	baseURL: process.env.REACT_APP_baseURL || 'http://localhost:5000',
	withCredentials: true,
});
