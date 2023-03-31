import { useState } from 'react';

import {
	AiFillShopping,
	AiOutlineArrowDown,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlineFilter,
	AiOutlineSearch,
} from 'react-icons/ai';

import { useGetProducts } from '../hooks/useProducts';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCart } from '../context/products.context';
import { EditProduct } from './EditProduct';

export default function Example() {
	const [productId, setProductId] = useState(null);

	const [opened, { open, close }] = useDisclosure(false);
	const { addToCart, cart, removeFromCart } = useCart();

	console.log(cart);

	const { data, error } = useGetProducts();

	const products = data?.products || [];

	if (error) return <div>failed to load</div>;

	return (
		<div className="container mx-auto">
			<div className="flex items-center justify-center w-full max-w-md mx-auto mt-2 bg-white rounded-lg shadow-md">
				<input
					type="text"
					placeholder="Search Product"
					className="w-full px-4 py-2 text-gray-700 rounded-md focus:outline-none"
				/>
				<div className="flex items-center justify-center h-12 bg-gray-100 rounded-md w-14">
					<button>
						<AiOutlineSearch size={25} />
					</button>
				</div>
			</div>
			<div className="my-6 bg-white rounded shadow-md">
				<table className="w-full table-auto">
					<thead>
						<tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
							<th className="px-6 py-3 text-left">ID</th>
							<th className="px-6 py-3 text-left">
								Name
								<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
							</th>
							<th className="px-6 py-3 text-left">Description</th>
							<th className="px-6 py-3 text-left">
								Price
								<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
							</th>
							<th className="px-6 py-3 text-left">
								Discount
								<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
							</th>
							<th className="flex items-center px-6 py-3 text-left">
								Stock
								<AiOutlineFilter className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
							</th>
							<th className="px-6 py-3 text-center">Image</th>
							<th className="px-6 py-3 text-center">Action</th>
						</tr>
					</thead>

					<tbody className="text-sm font-light text-gray-600">
						{products.map((product) => (
							<tr
								key={product.id}
								className="border-b border-gray-200 hover:bg-gray-100"
							>
								<td className="px-6 py-3 text-left whitespace-nowrap">
									{product.id}
								</td>
								<td className="px-6 py-3 text-left">{product.name}</td>
								<td className="px-6 py-3 text-left">{product.description}</td>
								<td className="px-6 py-3 text-left">
									৳{product.price.toFixed(2)}
								</td>
								<td className="px-6 py-3 text-left">
									{product.discount * 100}%
								</td>
								<td className="px-6 py-3 text-left">{product.stock}</td>
								<td className="px-6 py-3 text-center">
									{!!product.images.length && (
										<img
											className="h-14 w-14"
											src={product.images[0]}
											alt="product_img"
										/>
									)}
								</td>
								<td className="px-6 py-3 text-center">
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
											<AiOutlineEdit size={25} className="mr-2" />
										</button>
										|
										<button className="text-red-500 hover:text-red-700">
											<AiOutlineDelete size={25} className="mr-2" />
										</button>
										|
										{!cart.find((item) => item._id === product._id) && (
											<button
												className="text-green-500 hover:text-green-700"
												onClick={() => addToCart(product)}
											>
												<AiFillShopping size={25} />
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
