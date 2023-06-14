import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import {
	AiFillShopping,
	AiOutlineArrowDown,
	AiOutlineDelete,
	AiOutlineEdit,
	AiOutlinePlusCircle,
	AiOutlineSearch,
} from 'react-icons/ai';
import { useCart } from '../../context/products.context';
import { useGetProducts } from '../../hooks/useProducts';
import { EditProduct } from '../product/EditProduct';
import { AddNewProduct } from '../../components/AddNewProduct';

export default function Example() {
	const [productId, setProductId] = useState(null);
	const [opened, { open, close }] = useDisclosure(false);
	const { addToCart, cart } = useCart();
	const { data, error } = useGetProducts();

	const [
		addNewProductOpened,
		{ open: addNewProductOpen, close: addNewProductClose },
	] = useDisclosure(false);

	const products = data?.products || [];
	const itemsPerPage = 2; // Number of items to show per page
	const totalPages = Math.ceil(products.length / itemsPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const productSliceStart = (currentPage - 1) * itemsPerPage;
	const productSliceEnd = currentPage * itemsPerPage;
	const displayedProducts = products.slice(
		productSliceStart,
		productSliceEnd
	);

	const toggleDescription = (productId) => {
		setExpandedDescriptions((prevState) =>
			prevState.includes(productId)
				? prevState.filter((id) => id !== productId)
				: [...prevState, productId]
		);
	};

	const getFirstFiveWords = (text) => {
		const words = text.trim().split(/\s+/);
		return words.slice(0, 5).join(' ');
	};

	const getWordCount = (text) => {
		const words = text.trim().split(/\s+/);
		return words.length;
	};

	const shouldShowMoreButton = (productId) => {
		const product = products.find((product) => product.id === productId);
		return getWordCount(product.description) > 5;
	};

	const isDescriptionExpanded = (productId) => {
		return expandedDescriptions.includes(productId);
	};

	const [expandedDescriptions, setExpandedDescriptions] = useState([]);

	if (error) return <div>Failed to load</div>;
	console.log(data);

	return (
		<div className="container mx-auto">
			<div className="flex justify-start mt-2">
				<button
					className="flex items-center px-4 py-2 ml-4 text-gray-600 transition-colors bg-gray-200 rounded-md hover:bg-gray-300"
					onClick={() => {
						addNewProductOpen();
					}}
				>
					<AiOutlinePlusCircle size={20} className="mr-2" />
					Add Product
				</button>
			</div>

			<div className="flex justify-end mt-2">
				<div className="relative">
					<input
						type="text"
						placeholder="Search Product"
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
				{products.length === 0 ? (
					<div className="p-4">No products found.</div>
				) : (
					<table className="w-full table-auto">
						<thead>
							<tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
								<th className="px-6 py-3 text-left">ID</th>
								<th className="px-6 py-3 text-left">
									Name
									<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
								</th>
								<th className="px-6 py-3 text-left">
									Description
								</th>
								<th className="px-6 py-3 text-left">
									Price
									<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
								</th>
								<th className="px-6 py-3 text-left">
									Discount
									<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
								</th>
								<th className="px-6 py-3 text-left">
									Stock
									<AiOutlineArrowDown className="inline-block w-4 h-4 ml-1 text-gray-500 cursor-pointer" />
								</th>
								<th className="px-6 py-3 text-center">Image</th>
								<th className="px-6 py-3 text-center">
									Action
								</th>
							</tr>
						</thead>

						<tbody className="text-sm font-medium text-gray-600">
							{displayedProducts.map((product) => (
								<tr
									key={product.id}
									className="border-b border-gray-200 hover:bg-gray-100"
								>
									<td className="px-6 py-3 text-left whitespace-nowrap">
										<label>
											<input
												type="checkbox"
												className="checkbox"
											/>
										</label>
									</td>
									<td className="px-6 py-3 text-left">
										{product.name}
									</td>
									<td className="px-6 py-3 text-left">
										{isDescriptionExpanded(product.id)
											? product.description
											: getFirstFiveWords(
													product.description
											  )}
										{shouldShowMoreButton(product.id) && (
											<button
												className="text-sm font-light text-blue-500 hover:text-blue-700"
												onClick={() =>
													toggleDescription(
														product.id
													)
												}
											>
												{isDescriptionExpanded(
													product.id
												)
													? 'Show less'
													: '...Show more'}
											</button>
										)}
									</td>
									<td className="px-6 py-3 text-left">
										৳{product.price.toFixed(2)}
									</td>
									<td className="px-6 py-3 text-center">
										{product.discount * 100}%
									</td>
									<td className="px-6 py-3 text-center">
										{product.stock}
									</td>
									<td className="px-6 py-3 text-center">
										{!!product.images.length && (
											<img
												className="w-12 h-12 mask mask-squircle"
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
												disabled={cart.find(
													(item) =>
														item._id === product._id
												)}
												title="Edit product"
											>
												<AiOutlineEdit
													size={25}
													className="mr-2"
												/>
											</button>
											|
											<button className="text-red-500 hover:text-red-700">
												<AiOutlineDelete
													size={25}
													className="mr-2"
												/>
											</button>
											|
											{!cart.find(
												(item) =>
													item._id === product._id
											) && (
												<button
													className="text-green-500 hover:text-green-700"
													onClick={() =>
														addToCart(product)
													}
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
				)}

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="flex items-center justify-center py-4">
						<button
							className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
							disabled={currentPage === 1}
							onClick={handlePreviousPage}
						>
							Previous
						</button>
						<div className="px-4 py-2 text-sm font-medium text-gray-700">
							Page {currentPage} of {totalPages}
						</div>
						<button
							className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
							disabled={currentPage === totalPages}
							onClick={handleNextPage}
						>
							Next
						</button>
					</div>
				)}

				<Modal opened={opened} onClose={close}>
					<EditProduct productId={productId} />
				</Modal>

				<Modal
					opened={addNewProductOpened}
					onClose={addNewProductClose}
				>
					<AddNewProduct />
				</Modal>
			</div>
		</div>
	);
}
