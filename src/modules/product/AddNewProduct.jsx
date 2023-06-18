import { Button, MultiSelect } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { createProductApi } from '../../apis/product.apis';
import { useGetProducts } from '../../hooks/useProducts';

const AddNewProduct = ({ onClose }) => {
	const { mutate } = useGetProducts();
	const queryClient = useQueryClient();

	const [productData, setProductData] = useState({
		name: '',
		description: '',
		price: '',
		category: [],
		variants: [],
		discount: '',
		company: '',
		images: [],
	});

	const handleChange = (e) => {
		setProductData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await createProductApi(productData);

			// Display toast message on success
			toast.success('Product added successfully!', {
				position: toast.POSITION.TOP_RIGHT,
			});

			// Close the modal
			onClose();

			// Update the product table in real-time by re-fetching the products
			mutate(async (data) => {
				// Make a shallow copy of the data array
				const newData = [...data];

				// Add the newly created product to the copy
				newData.push(response.data);

				return newData;
			});

			// Invalidate the query to update the UI
			queryClient.invalidateQueries('products');
		} catch (error) {
			console.log(error);
		}
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
								setProductData((prev) => ({
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
								setProductData((prev) => ({
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

export default AddNewProduct;
