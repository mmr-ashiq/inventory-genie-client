import { useQuery, useMutation } from '@tanstack/react-query';

import {
    adminRegistrationApi,
    platformUsersListApi,
    EditUserApi,
    DeleteUserApi,
} from '../apis/user.api';

export const useGetUsers = () => {
    return useQuery('users', platformUsersListApi);
}

export const useEditUser = () => {
    return useMutation(EditUserApi);
}

export const useDeleteUser = () => {
    return useMutation(DeleteUserApi);
}

export const useAdminRegistration = () => {
    return useMutation(adminRegistrationApi);
}