import { Button } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { updateProductApi } from '../apis/product.apis';
import { useGetSingleProduct } from '../hooks/useProducts';

export const EditProduct = ({ productId }) => {
	const id = productId;
	const queryClient = useQueryClient();

	const { data } = useGetSingleProduct(id);
	const product = data?.product || {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const productData = Object.fromEntries(formData.entries());

		try {
			await updateProductApi({
				id,
				shopId: product?.shopId,
				data: productData,
			});

			//   invalidate query
			queryClient.invalidateQueries({ queryKey: ['products'] });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-md mx-auto my-4 bg-white p-6 rounded-md shadow-md">
			<h1 className="text-2xl font-bold mb-4">Edit Product</h1>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="name"
						className="block font-semibold text-gray-700 mb-2"
					>
						Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						defaultValue={product.name}
						className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div>
					<label
						htmlFor="price"
						className="block font-semibold text-gray-700 mb-2"
					>
						Price
					</label>
					<input
						type="number"
						name="price"
						id="price"
						defaultValue={product.price}
						className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div>
					<label
						htmlFor="description"
						className="block font-semibold text-gray-700 mb-2"
					>
						Description
					</label>
					<input
						type="text"
						name="description"
						id="description"
						defaultValue={product.description}
						className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div>
					<label
						htmlFor="stock"
						className="block font-semibold text-gray-700 mb-2"
					>
						Stock
					</label>
					<input
						type="number"
						name="stock"
						id="stock"
						defaultValue={product.stock}
						className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div>
					<label
						htmlFor="discount"
						className="block font-semibold text-gray-700 mb-2"
					>
						Discount
					</label>
					<input
						type="number"
						name="discount"
						id="discount"
						defaultValue={product.discount}
						className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>

				<div>
					<Button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
					>
						Update
					</Button>
				</div>
			</form>
		</div>
	);
};
