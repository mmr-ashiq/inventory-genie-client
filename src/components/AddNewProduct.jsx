import { Button, MultiSelect } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createProductApi } from '../apis/product.apis';

export const AddNewProduct = () => {
	const queryClient = useQueryClient();

	const [data, setData] = useState({
		name: '',
		description: '',
		price: '',
		category: [],
		variants: [],
		discount: '',
		company: '',
		images: [],
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// create fromData from state
		const formData = new FormData();

		for (let key in data) {
			if (key === 'images') {
				for (let i = 0; i < data.images.length; i++) {
					formData.append('images', data.images[i]);
				}
				continue;
			}

			//   stringify arrays
			if (Array.isArray(data[key])) {
				formData.append(key, JSON.stringify(data[key]));
				continue;
			}

			formData.append(key, data[key]);
		}

		try {
			const response = await createProductApi(formData);

			//   invalidate query
			queryClient.invalidateQueries({ queryKey: ['products'] });
		} catch (error) {
			console.log(error);
		}

		// console log formData
		for (let key of formData.entries()) {
			console.log(key);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'images') {
			setData((prev) => ({
				...prev,
				images: e.target.files,
			}));
			return;
		}

		setData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="p-5">
			<h1 className="mb-4 text-2xl font-bold text-center">
				Add a new product
			</h1>

			<div>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="description">Description</label>
						<input
							type="text"
							name="description"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="price">Price</label>
						<input
							type="number"
							name="price"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					<div className="mb-3">
						<MultiSelect
							label="Category"
							data={[]}
							placeholder="Shirt, Panjabi"
							searchable
							creatable
							getCreateLabel={(query) => `+ ${query}`}
							onCreate={(query) => {
								return { value: query, label: query };
							}}
							onChange={(e) => {
								setData((prev) => ({
									...prev,
									category: e,
								}));
							}}
						/>
					</div>

					<div className="mb-3">
						<MultiSelect
							label="Variants"
							data={[]}
							placeholder="S, M, L"
							searchable
							creatable
							getCreateLabel={(query) => `+ ${query}`}
							onCreate={(query) => {
								return { value: query, label: query };
							}}
							onChange={(e) => {
								setData((prev) => ({
									...prev,
									variants: e,
								}));
							}}
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="discount">Discount</label>
						<input
							type="number"
							name="discount"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					<div className="mb-3">
						<label htmlFor="company">Company</label>
						<input
							type="text"
							name="company"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					{/* make a div for stocks */}
					<div className="mb-3">
						<label htmlFor="stocks">Stocks</label>
						<input
							type="number"
							name="stocks"
							onChange={handleChange}
							className="w-full px-2 py-1 border border-gray-300 rounded"
						/>
					</div>

					<div className="mb-3">
						<label
							htmlFor="images"
							className="block mb-1 font-medium text-gray-700"
						>
							Images
						</label>
						<input
							type="file"
							name="images"
							multiple
							accept="image/*"
							onChange={handleChange}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
						/>
						<p className="text-xs text-gray-500">
							Upload image files only
						</p>
					</div>

					<hr />

					<div>
						<Button
							type="submit"
							className="px-4 mt-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
						>
							Save
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
