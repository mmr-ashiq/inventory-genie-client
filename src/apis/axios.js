import axios from "axios";
export const API_CLIENT = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});
