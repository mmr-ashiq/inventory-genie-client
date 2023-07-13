import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../context/products.context';

const navigation = {
	categories: [
		{
			id: 'women',
			name: 'Women',
			featured: [
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
					imageAlt:
						'Models sitting back to back, wearing Basic Tee in black and bone.',
				},
				{
					name: 'Basic Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
				{
					name: 'Accessories',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
					imageAlt:
						'Model wearing minimalist watch with black wristband and white watch face.',
				},
			],
			sections: [
				[
					{
						id: 'shoes',
						name: 'Shoes & Accessories',
						items: [
							{ name: 'Sneakers', href: '#' },
							{ name: 'Boots', href: '#' },
							{ name: 'Flats', href: '#' },
							{ name: 'Sandals', href: '#' },
							{ name: 'Heels', href: '#' },
							{ name: 'Socks', href: '#' },
						],
					},
					{
						id: 'collection',
						name: 'Shop Collection',
						items: [
							{ name: 'Everything', href: '#' },
							{ name: 'Core', href: '#' },
							{ name: 'New Arrivals', href: '#' },
							{ name: 'Sale', href: '#' },
							{ name: 'Accessories', href: '#' },
						],
					},
				],
				[
					{
						id: 'clothing',
						name: 'All Clothing',
						items: [
							{ name: 'Basic Tees', href: '#' },
							{ name: 'Artwork Tees', href: '#' },
							{ name: 'Tops', href: '#' },
							{ name: 'Bottoms', href: '#' },
							{ name: 'Swimwear', href: '#' },
							{ name: 'Underwear', href: '#' },
						],
					},
					{
						id: 'accessories',
						name: 'All Accessories',
						items: [
							{ name: 'Watches', href: '#' },
							{ name: 'Wallets', href: '#' },
							{ name: 'Bags', href: '#' },
							{ name: 'Sunglasses', href: '#' },
							{ name: 'Hats', href: '#' },
							{ name: 'Belts', href: '#' },
						],
					},
				],
				[
					{
						id: 'brands',
						name: 'Brands',
						items: [
							{ name: 'Full Nelson', href: '#' },
							{ name: 'My Way', href: '#' },
							{ name: 'Re-Arranged', href: '#' },
							{ name: 'Counterfeit', href: '#' },
							{ name: 'Significant Other', href: '#' },
						],
					},
				],
			],
		},
		{
			id: 'men',
			name: 'Men',
			featured: [
				{
					name: 'Accessories',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
					imageAlt:
						'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
				},
				{
					name: 'New Arrivals',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
					imageAlt:
						'Drawstring top with elastic loop closure and textured interior padding.',
				},
				{
					name: 'Artwork Tees',
					href: '#',
					imageSrc:
						'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
					imageAlt:
						'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
				},
			],
			sections: [
				[
					{
						id: 'shoes',
						name: 'Shoes & Accessories',
						items: [
							{ name: 'Sneakers', href: '#' },
							{ name: 'Boots', href: '#' },
							{ name: 'Sandals', href: '#' },
							{ name: 'Socks', href: '#' },
						],
					},
					{
						id: 'collection',
						name: 'Shop Collection',
						items: [
							{ name: 'Everything', href: '#' },
							{ name: 'Core', href: '#' },
							{ name: 'New Arrivals', href: '#' },
							{ name: 'Sale', href: '#' },
						],
					},
				],
				[
					{
						id: 'clothing',
						name: 'All Clothing',
						items: [
							{ name: 'Basic Tees', href: '#' },
							{ name: 'Artwork Tees', href: '#' },
							{ name: 'Pants', href: '#' },
							{ name: 'Hoodies', href: '#' },
							{ name: 'Swimsuits', href: '#' },
						],
					},
					{
						id: 'accessories',
						name: 'All Accessories',
						items: [
							{ name: 'Watches', href: '#' },
							{ name: 'Wallets', href: '#' },
							{ name: 'Bags', href: '#' },
							{ name: 'Sunglasses', href: '#' },
							{ name: 'Hats', href: '#' },
							{ name: 'Belts', href: '#' },
						],
					},
				],
				[
					{
						id: 'brands',
						name: 'Brands',
						items: [
							{ name: 'Re-Arranged', href: '#' },
							{ name: 'Counterfeit', href: '#' },
							{ name: 'Full Nelson', href: '#' },
							{ name: 'My Way', href: '#' },
						],
					},
				],
			],
		},
	],
	pages: [
		{ name: 'Company', href: '#' },
		{ name: 'Stores', href: '#' },
	],
};
const products = [
	{
		id: 1,
		name: 'Nomad Tumbler',
		href: '#',
		price: '$35.00',
		color: 'White',
		inStock: true,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
		imageAlt: 'Insulated bottle with white base and black snap lid.',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		price: '$32.00',
		color: 'Sienna',
		inStock: true,
		size: 'Large',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in sienna.",
	},
	// More products...
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [open, setOpen] = useState(false);
	const { cart, removeAllWithId, setNewCart } = useCart();
	const navigate = useNavigate();

	const handleQuantityChange = (id, quantity) => {
		const newCart = cart.map((product) => {
			if (product._id === id) {
				return {
					...product,
					quantity: Number(quantity),
				};
			}
			return product;
		});

		setNewCart(newCart);
	};

	function handlePayNow() {
		toast.success('Payment Successfull');
		navigate(-1);
		setNewCart([]);
	}

	function handleContinueShopping() {
		navigate(-1);
	}

	return (
		<div className="bg-white">
			<main>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl pt-16">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">
							Shopping Cart
						</h1>

						<form className="mt-12">
							<section aria-labelledby="cart-heading">
								<h2 id="cart-heading" className="sr-only">
									Items in your shopping cart
								</h2>

								<ul
									role="list"
									className="divide-y divide-gray-200 border-t border-b border-gray-200"
								>
									{cart.map((product, productIdx) => (
										<li
											key={product._id}
											className="flex py-6 sm:py-10"
										>
											<div className="flex-shrink-0">
												{!!product.images.length && (
													<img
														src={product.images[0]}
														alt={product.name}
														className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
													/>
												)}
												{product.images.length ===
													0 && (
													<img
														src="https://picsum.photos/200/300"
														alt="No image"
														className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
													/>
												)}
											</div>

											<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
												<div>
													<div className="flex justify-between sm:grid sm:grid-cols-2">
														<div className="pr-6">
															<h3 className="text-sm">
																<a
																	href={
																		product?.href
																	}
																	className="font-medium text-gray-700 hover:text-gray-800"
																>
																	{
																		product.name
																	}
																</a>
															</h3>
														</div>

														<p className="text-right text-sm font-medium text-gray-900">
															{product?.quantity
																? product?.quantity *
																  product?.price
																: product?.price}
														</p>
													</div>

													<div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
														<label
															htmlFor={`quantity-${productIdx}`}
															className="sr-only"
														>
															Quantity,{' '}
															{product.name}
														</label>

														<div>
															<label>
																{' '}
																quantity:{' '}
															</label>
															<input
																type="number"
																name={
																	product._id
																}
																defaultValue={1}
																onChange={(
																	e
																) => {
																	if (
																		e.target
																			.value <
																		1
																	) {
																		e.target.value = 1;
																	}

																	handleQuantityChange(
																		product._id,
																		e.target
																			.value
																	);
																}}
															/>
														</div>
														{/* <select
                              id={`quantity-${productIdx}`}
                              name={`quantity-${productIdx}`}
                              className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                            </select> */}

														<button
															type="button"
															className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
														>
															<span
																onClick={() =>
																	removeAllWithId(
																		product._id
																	)
																}
															>
																Remove
															</span>
														</button>
													</div>
												</div>

												{/* <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                          {product.inStock ? (
                            <CheckIcon
                              className="h-5 w-5 flex-shrink-0 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ClockIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-300"
                              aria-hidden="true"
                            />
                          )} */}

												{/* <span>
                            {product.inStock
                              ? "In stock"
                              : `Ships in ${product.leadTime}`}
                          </span> */}
												{/* </p> */}
											</div>
										</li>
									))}
								</ul>
							</section>

							{/* Order summary */}
							<section
								aria-labelledby="summary-heading"
								className="mt-10 sm:ml-32 sm:pl-6"
							>
								<div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
									<h2
										id="summary-heading"
										className="sr-only"
									>
										Order summary
									</h2>

									<div className="flow-root">
										<dl className="-my-4 divide-y divide-gray-200 text-sm">
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">
													Subtotal
												</dt>
												<dd className="font-medium text-gray-900">
													{cart
														.reduce(
															(acc, product) => {
																if (
																	product?.quantity
																) {
																	return (
																		acc +
																		product.quantity *
																			product.price
																	);
																} else {
																	return (
																		acc +
																		product.price
																	);
																}
															},
															0
														)
														.toFixed(2)}
													<span text-3xl>৳</span>
												</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">
													Shipping
												</dt>
												<dd className="font-medium text-gray-900">
													100
												</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-gray-600">
													Tax
												</dt>
												<dd className="font-medium text-gray-900">
													{(
														cart.reduce(
															(acc, product) => {
																if (
																	product?.quantity
																) {
																	return (
																		acc +
																		product.quantity *
																			product.price
																	);
																} else {
																	return (
																		acc +
																		product.price
																	);
																}
															},
															0
														) * 0.02
													).toFixed(2)}
												</dd>
											</div>
											<div className="flex items-center justify-between py-4">
												<dt className="text-base font-medium text-gray-900">
													Order total
												</dt>
												<dd className="text-base font-medium text-gray-900">
													{(
														cart.reduce(
															(acc, product) => {
																if (
																	product?.quantity
																) {
																	return (
																		acc +
																		product.quantity *
																			product.price
																	);
																} else {
																	return (
																		acc +
																		product.price
																	);
																}
															},
															0
														) +
														100 +
														cart.reduce(
															(acc, product) => {
																if (
																	product?.quantity
																) {
																	return (
																		acc +
																		product.quantity *
																			product.price
																	);
																} else {
																	return (
																		acc +
																		product.price
																	);
																}
															},
															0
														) *
															0.02
													).toFixed(2)}
												</dd>
											</div>
										</dl>
									</div>
								</div>
								<div className="mt-10">
									<button
										onClick={handlePayNow}
										type="button"
										className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
									>
										Pay Now
									</button>
								</div>

								<div className="mt-6 mb-4 text-center text-sm text-gray-500">
									<p>
										or&nbsp;
										<span
											onClick={handleContinueShopping}
											className="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500"
										>
											Continue Shopping
											<span aria-hidden="true">
												&nbsp;&rarr;
											</span>
										</span>
									</p>
								</div>
							</section>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}
