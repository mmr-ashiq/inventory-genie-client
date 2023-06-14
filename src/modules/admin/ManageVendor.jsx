import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import {
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlinePlusCircle,
	AiOutlineSearch,
} from 'react-icons/ai';

import { EditVendor } from '../vendor/EditVendor';
import { useGetVendors } from '../../hooks/useVendors';
import { AddVendor } from '../vendor/AddVendor';

export default function ManageVendor() {
	const [vendorId, setVendorId] = useState(null);
	const [
		openedDeleteModal,
		{ open: openDeleteModal, close: closeDeleteModal },
	] = useDisclosure(false);
	const [openedEditModal, { open: openEditModal, close: closeEditModal }] =
		useDisclosure(false);
	const [openedAddModal, { open: openAddModal, close: closeAddModal }] =
		useDisclosure(false);

	const { data, error, mutate } = useGetVendors(); // Added mutate function
	const vendors = data?.vendors || [];

	if (error) return <div>failed to load</div>;

	console.log(vendors);

	return (
		<div className="container mx-auto">
			<div className="flex justify-start mt-2">
				<button
					className="flex items-center px-4 py-2 ml-4 text-gray-600 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
					onClick={openAddModal}
				>
					<AiOutlinePlusCircle size={20} className="mr-2" />
					Add Vendor
				</button>
			</div>

			<div className="flex justify-end mt-2">
				<div className="relative">
					<input
						type="text"
						placeholder="Search Vendor"
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
							<th className="px-6 py-3 text-left">Id</th>
							<th className="px-6 py-3 text-left">
								Company Name
							</th>
							<th className="px-6 py-3 text-left">Email</th>
							<th className="px-6 py-3 text-left">Phone</th>
							<th className="px-6 py-3 text-left">Action</th>
						</tr>
					</thead>
					<tbody className="text-sm font-light text-gray-600">
						{vendors.map((vendor, index) => (
							<tr
								key={vendor._id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="flex items-center">
										<div className="ml-4">
											<div className="text-sm font-medium text-gray-900">
												{index + 1}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{vendor.firstName}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{vendor.email}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="text-sm font-medium text-gray-900">
										{vendor.phone}
									</div>
								</td>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									<div className="flex items-center space-x-4 text-sm font-medium">
										<button
											className="text-indigo-600 hover:text-indigo-900"
											onClick={() => {
												setVendorId(vendor._id);
												openEditModal();
											}}
										>
											<AiOutlineEdit size={25} />
										</button>
										<button
											className="text-red-600 hover:text-red-900"
											onClick={() => {
												setVendorId(vendor._id);
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

			{/* <Modal
				opened={openedDeleteModal}
				onClose={closeDeleteModal}
				size="md"
				shadow="md"
			>
				<div className="p-6">
					<Text size="lg" weight="bold" className="mb-4">
						Delete Vendor
					</Text>
					<Text size="sm" className="mb-6">
						Are you sure you want to delete this vendor?
					</Text>
					<div className="flex justify-end">
						<Button
							onClick={() => handleDeleteVendor(vendorId)}
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
			</Modal> */}

			<Modal
				opened={openedEditModal}
				onClose={closeEditModal}
				size="md"
				shadow="md"
			>
				<EditVendor vendorId={vendorId} />
			</Modal>

			<Modal
				opened={openedAddModal}
				onClose={closeAddModal}
				size="md"
				shadow="md"
			>
				<div className="p-6">
					{/* AddVendor component */}
					<AddVendor onClose={closeAddModal} onSuccess={mutate} />
				</div>
			</Modal>
		</div>
	);
}
