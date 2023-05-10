import axios from 'axios';

export const API_CLIENT = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL ||'http://localhost:5000',
	withCredentials: true,
});
