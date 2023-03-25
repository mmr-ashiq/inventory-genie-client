import { useState } from 'react';

import {
	PencilIcon,
	ShoppingCartIcon,
	TrashIcon,
} from '@heroicons/react/24/solid';
// import { useNavigate } from 'react-router-dom';
import { useGetProducts } from '../hooks/useProducts';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCart } from '../context/products.context';
import { EditProduct } from './EditProduct';

// function classNames(...classes) {
// 	return classes.filter(Boolean).join(' ');
// }

export default function Example() {
	// const [modalOpen, setModalOpen] = useState(false);
	const [productId, setProductId] = useState(null);

	const [opened, { open, close }] = useDisclosure(false);
	const { addToCart, cart, removeFromCart } = useCart();

	console.log(cart);

	// const navigator = useNavigate();

	const { data, error } = useGetProducts();

	const products = data?.products || [];

	if (error) return <div>failed to load</div>;

	return (
		<div className="container mx-auto">
			<div className="mt-2 flex items-center justify-center w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
				<div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md">
					<svg
						className="w-6 h-6 text-gray-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15.5 15.5l5.5 5.5"
						></path>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M11 6a5 5 0 100 10 5 5 0 000-10z"
						></path>
					</svg>
				</div>
				<input
					type="text"
					placeholder="Search Product"
					className="w-full px-4 py-2 text-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
			<div className="bg-white shadow-md rounded my-6">
				<table className="w-full table-auto">
					<thead>
						<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
							<th className="py-3 px-6 text-left">ID</th>
							<th className="py-3 px-6 text-left">
								Name
								<svg
									className="w-4 h-4 inline-block ml-1 text-gray-500 cursor-pointer"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							</th>
							<th className="py-3 px-6 text-left">Description</th>
							<th className="py-3 px-6 text-left">
								Price
								<svg
									className="w-4 h-4 inline-block ml-1 text-gray-500 cursor-pointer"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 8h16M4 16h16"
									/>
								</svg>
							</th>
							<th className="py-3 px-6 text-left">
								Discount
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path
										fillRule="evenodd"
										d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
										clipRule="evenodd"
									/>
								</svg>
							</th>
							<th className="py-3 px-6 text-left flex items-center">
								Stock
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5"
								>
									<path d="M17 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM17 15.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM3.75 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM4.5 2.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5zM10 11a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 0110 11zM10.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM10 6a2 2 0 100 4 2 2 0 000-4zM3.75 10a2 2 0 100 4 2 2 0 000-4zM16.25 10a2 2 0 100 4 2 2 0 000-4z" />
								</svg>
							</th>
							<th className="py-3 px-6 text-center">Image</th>
							<th className="py-3 px-6 text-center">Action</th>
						</tr>
					</thead>

					<tbody className="text-gray-600 text-sm font-light">
						{products.map((product) => (
							<tr
								key={product.id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="py-3 px-6 text-left whitespace-nowrap">
									{product.id}
								</td>
								<td className="py-3 px-6 text-left">{product.name}</td>
								<td className="py-3 px-6 text-left">{product.description}</td>
								<td className="py-3 px-6 text-left">
									৳{product.price.toFixed(2)}
								</td>
								<td className="py-3 px-6 text-left">
									{product.discount * 100}%
								</td>
								<td className="py-3 px-6 text-left">{product.stock}</td>
								<td className="py-3 px-6 text-center">
									{!!product.images.length && (
										<img
											className="h-14 w-14"
											src={product.images[0]}
											alt="product_img"
										/>
									)}
								</td>
								<td className="py-3 px-6 text-center">
									<div className="flex space-x-2">
										<button
											className="text-blue-500 hover:text-blue-700"
											onClick={() => {
												setProductId(product._id);
												open();
											}}
											disabled={cart.find((item) => item._id === product._id)}
											title="Edit product"
										>
											<PencilIcon className="h-6 w-6" />
										</button>
										<button className="text-red-500 hover:text-red-700">
											<TrashIcon className="h-6 w-6" />
										</button>
										{!cart.find((item) => item._id === product._id) && (
											<button
												className="text-green-500 hover:text-green-700"
												onClick={() => addToCart(product)}
											>
												<ShoppingCartIcon className="h-6 w-6" />
											</button>
										)}
										{cart.find((item) => item._id === product._id) && (
											<button
												className="text-red-500 hover:text-red-700"
												onClick={() => removeFromCart(product._id)}
											>
												<ShoppingCartIcon className="h-6 w-6" />
											</button>
										)}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<Modal opened={opened} onClose={close}>
					<EditProduct productId={productId} />
				</Modal>
			</div>
		</div>
	);
}
