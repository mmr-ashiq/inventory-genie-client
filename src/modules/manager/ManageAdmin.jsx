import { Button, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import {
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineSearch,
	AiOutlinePlusCircle,
} from 'react-icons/ai';

import {
	useGetUsers,
	useDeleteUser,
	useEditUser,
	useAdminRegistration,
} from '../../hooks/useUsers';

export default function Example() {
	const [userId, setUserId] = useState(null);
	const [
		openedDeleteModal,
		{ open: openDeleteModal, close: closeDeleteModal },
	] = useDisclosure(false);
	const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
		useDisclosure(false);

	const { data, error, mutate } = useGetUsers();
	const users = data?.users || [];

	const editUser = useEditUser();
	const deleteUser = useDeleteUser();
	const adminRegistration = useAdminRegistration();

	const handleDeleteUser = async (userId) => {
		try {
			await deleteUser.mutateAsync(userId);
			closeDeleteModal();
			// Remove the deleted user from the users list
			mutate((prevData) => ({
				...prevData,
				users: prevData.users.filter((user) => user.id !== userId),
			}));
		} catch (error) {
			console.log(error);
		}
	};

	if (error) {
		return <div>Failed to load users</div>;
	}

	console.log(data?.users); // Added console.log to see the data

	return (
		<div className="container mx-auto">
			<div className="flex justify-start mt-2">
				<button className="flex items-center px-4 py-2 ml-4 text-gray-600 transition-colors bg-gray-200 rounded-md hover:bg-gray-300">
					<AiOutlinePlusCircle size={20} className="mr-2" />
					Add User
				</button>
			</div>

			<div className="flex justify-end mt-2">
				<div className="relative">
					<input
						type="text"
						placeholder="Search User"
						className="px-4 py-2 text-gray-700 rounded-md focus:outline-none"
					/>
					<div className="absolute top-0 right-0 flex items-center justify-center h-full w-14">
						<button className="text-gray-500 hover:text-blue-800">
							<AiOutlineSearch size={25} />
						</button>
					</div>
				</div>
			</div>

			<div className="my-6 bg-white rounded shadow-md">
				<table className="w-full table-auto">
					<thead>
						<tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
							<th className="px-6 py-3 text-left">ID</th>
							<th className="px-6 py-3 text-left">Name</th>
							<th className="px-6 py-3 text-left">Email</th>
							<th className="px-6 py-3 text-left">Role</th>
							<th className="px-6 py-3 text-left">Permissions</th>
							<th className="px-6 py-3 text-left">Action</th>
						</tr>
					</thead>
					<tbody className="text-sm font-light text-gray-600">
						{users.map((user) => (
							<tr
								key={user.id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="flex items-center">
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">
												{user.id}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.name}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.email}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.role}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{user.permissions}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="flex items-center space-x-4 text-sm font-medium">
										<button
											className="text-indigo-600 hover:text-indigo-900"
											onClick={() => {
												setUserId(user.id);
												openEditModal();
											}}
										>
											<AiOutlineEdit size={25} />
										</button>
										<button
											className="text-red-600 hover:text-red-900"
											onClick={() => {
												setUserId(user.id);
												openDeleteModal();
											}}
										>
											<AiOutlineDelete size={25} />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal
				opened={openedDeleteModal}
				onClose={closeDeleteModal}
				size="md"
				shadow="md"
			>
				<div className="p-6">
					<Text size="lg" weight="bold" className="mb-4">
						Delete User
					</Text>
					<Text size="sm" className="mb-6">
						Are you sure you want to delete this user?
					</Text>
					<div className="flex justify-end">
						<Button
							onClick={() => handleDeleteUser(userId)}
							color="red"
							className="mr-2 text-black"
						>
							Yes
						</Button>
						<Button onClick={closeDeleteModal} variant="outline">
							No
						</Button>
					</div>
				</div>
			</Modal>

			<Modal
				opened={openedEditModal}
				onClose={closeEditModal}
				size="md"
				shadow="md"
			>
				{/* <EditUser userId={userId} /> */}
			</Modal>
		</div>
	);
}
