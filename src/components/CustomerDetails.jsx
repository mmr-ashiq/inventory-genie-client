import { useState, useRef } from 'react';
import { getCustomersApi } from '../apis/customer.apis';
import { styled } from 'styled-components';
import { Button } from '@mantine/core';
import { useCart } from '../context/products.context';
import { toast } from 'react-toastify';
import { sellProductsApi } from '../apis/product.apis';
import { useQueryClient } from '@tanstack/react-query';

export const CustomerDetails = ({
	setSelectedCustomer,
	totalAmount,
	selectedCustomer,
}) => {
	const queryClient = useQueryClient();
	const [customers, setCustomers] = useState([]);
	const [paidPrice, setPaidPrice] = useState(0);

	const { cart } = useCart();

	const inputRef = useRef();
	const checkboxRef = useRef();

	const handleSearch = async (e) => {
		const customers = await getCustomersApi(e.target.value);

		if (customers?.data?.data?.customers?.length) {
			console.log(customers.data.data);

			setCustomers(customers.data.data.customers);
		}
	};

	const handlePay = async () => {
		if (!selectedCustomer?._id) {
			toast.error('Customer id is required');
			return;
		}

		if (!cart.length) {
			toast.error('Cart is empty');
			return;
		}

		const data = {
			customerId: selectedCustomer?._id,
			paidPrice: checkboxRef.current.checked ? totalAmount : paidPrice,
			products: cart.map((item) => ({
				productId: item._id,
				quantity: item.quantity || 1,
			})),
		};

		console.log(data);

		try {
			await sellProductsApi(data);

			// do something after success
			toast.success('Product sold successfully');

			queryClient.invalidateQueries('products');
		} catch (error) {
			console.log(error);

			if (error?.response?.data?.message) {
				toast.error(error?.response?.data?.message);
			}
		}
	};

	console.log(cart);
	return (
		<div>
			<input
				type="text"
				name="customer"
				placeholder="Search Customer"
				onChange={handleSearch}
				ref={inputRef}
			/>

			<Customers>
				{customers?.map((customer) => (
					<div
						key={customer._id}
						onClick={() => {
							setSelectedCustomer(customer);

							setCustomers([]);
							inputRef.current.value = '';
						}}
					>
						<p>{customer.name}</p>
					</div>
				))}
			</Customers>

			<div>
				<div>
					<p>Total Amount</p>
					<p>{totalAmount || 0}</p>
				</div>

				<div>
					<p>paid price</p>
					<p>
						<input
							type="number"
							onChange={(e) => {
								setPaidPrice(e.target.value);
							}}
						/>
					</p>

					<div>
						<input type="checkbox" ref={checkboxRef} />
						<label>paid full amount</label>
					</div>
				</div>
			</div>

			<Button variant="primary" onClick={handlePay} className="bg-blue">
				pay
			</Button>
		</div>
	);
};

const Customers = styled.div`
	max-height: 200px;
	overflow-y: scroll;

	> div {
		padding: 10px;
		border-bottom: 1px solid #ccc;
		cursor: pointer;
	}
`;
