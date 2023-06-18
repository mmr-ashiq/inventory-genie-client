import React from 'react';
import { AiOutlineAppstoreAdd, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdProductionQuantityLimits } from 'react-icons/md';

import { useGetProducts } from '../../hooks/useProducts';

const AdminDashboard = () => {
	const { data, error } = useGetProducts();

	console.log(data);

	const products = data?.products || [];
	const totalCount = data?.totalCount || 0;

	// Filter out the out-of-stock products
	const outOfStockCount = products.filter(
		(product) => !product.inStock
	).length;

	// Calculate the total number of categories
	const categoriesCount = [
		...new Set(products.map((product) => product.category)),
	].length;

	return (
		<div className="flex mt-4 justify-evenly">
			<div className="box-border rounded flex items-center justify-between h-[100px] w-[250px] p-4 border-4 bg-purple-400">
				<div className="flex items-center">
					<MdProductionQuantityLimits size={36} color="white" />
				</div>
				<div className="text-right">
					<h3 className="text-lg font-bold text-white">
						Total Products
					</h3>
					<span className="text-2xl">{totalCount}</span>
				</div>
			</div>

			<div className="box-border rounded flex items-center justify-between h-[100px] w-[250px] p-4 border-4 bg-green-300">
				<div className="flex items-center">
					<AiOutlineCloseCircle size={36} color="white" />
				</div>
				<div className="text-right">
					<h3 className="text-lg font-bold text-white">
						Out of Stock
					</h3>
					<span className="text-2xl">{outOfStockCount}</span>
				</div>
			</div>

			<div className="box-border rounded flex items-center justify-between h-[100px] w-[250px] p-4 border-4 bg-blue-400">
				<div className="flex items-center">
					<AiOutlineAppstoreAdd size={36} color="white" />
				</div>
				<div className="text-right">
					<h3 className="text-lg font-bold text-white">
						All Categories
					</h3>
					<span className="text-2xl">{categoriesCount}</span>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
