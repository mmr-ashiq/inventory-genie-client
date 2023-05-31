import React from 'react';
import { useNavigate } from 'react-router-dom';
import addProductImg from '../../assets/addProduct.svg';
import viewProductsImg from '../../assets/viewProducts.svg';

const ManageInventory = () => {
	const navigate = useNavigate();

	const handleAddProduct = () => {
		navigate('/inventory');
	};

	const handleViewProduct = () => {
		navigate('/products');
	};

	return (
		<div className="flex items-center justify-center mt-10 space-x-4">
			<div className="relative w-48 shadow-xl card bg-base-100">
				<div className="relative">
					<img
						src={addProductImg}
						alt="Shoes"
						className="w-full h-auto transition-opacity cursor-pointer hover:opacity-50"
					/>
					<div
						className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center text-white transition-opacity cursor-pointer opacity-20 hover:opacity-100"
						onClick={handleAddProduct}
					>
						<h2 className="text-xl font-bold text-slate-700">Add Product</h2>
					</div>
				</div>
			</div>

			<div className="relative w-48 shadow-xl card bg-base-100">
				<div className="relative">
					<img
						src={viewProductsImg}
						alt="Shoes"
						className="w-full h-auto transition-opacity cursor-pointer opacity-full hover:opacity-10"
					/>
					<div
						className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center text-white transition-opacity cursor-pointer opacity-20 hover:opacity-100"
						onClick={handleViewProduct}
					>
						<h2 className="text-xl font-bold text-slate-700">View Products</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ManageInventory;
