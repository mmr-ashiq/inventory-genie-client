import { API_CLIENT } from './axios';

export const adminRegistrationApi = async (registraionData) => API_CLIENT.post('/auth/register', registraionData);
export const platformUsersListApi = async() => API_CLIENT.get('/users');
export const EditUserApi = async (id, data) => API_CLIENT.put(`/users/${id}`, data);
export const DeleteUserApi = async (id) => API_CLIENT.delete(`/users/${id}`);