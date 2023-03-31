import React from 'react';

const Solutions = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-gray-200">
				<div className="p-10 m-10 bg-white rounded-lg shadow-lg">
					<h1 className="mb-4 text-4xl font-bold text-center">
						Our{' '}
						<span className="bg-gradient-to-r from-purple-500 via-blue-300 to-teal-200 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 text-purple-500 text-4xl">
							Solutions
						</span>
					</h1>
					<div className="grid grid-cols-3 gap-5">
						<div className="overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://source.unsplash.com/random/800x600"
								alt="Solution 1"
								className="object-cover w-full h-64"
							/>
							<div className="p-6">
								<h2 className="mb-2 text-2xl font-bold">Inventory Tracking</h2>
								<p className="text-gray-800">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									ut elit vel est porta tristique.
								</p>
								<button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600 ">
									Learn More
								</button>
							</div>
						</div>
						<div className="overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://source.unsplash.com/random/800x600"
								alt="Solution 2"
								className="object-cover w-full h-64"
							/>
							<div className="p-6">
								<h2 className="mb-2 text-2xl font-bold">Stock Management</h2>
								<p className="text-gray-800">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									ut elit vel est porta tristique.
								</p>
								<button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600">
									Learn More
								</button>
							</div>
						</div>
						<div className="overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://source.unsplash.com/random/800x600"
								alt="Solution 3"
								className="object-cover w-full h-64"
							/>
							<div className="p-6">
								<h2 className="mb-2 text-2xl font-bold">Order Management</h2>
								<p className="text-gray-800">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									ut elit vel est porta tristique.
								</p>
								<button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600">
									Learn More
								</button>
							</div>
						</div>
						<div className="overflow-hidden rounded-lg shadow-lg">
							<img
								src="https://source.unsplash.com/random/800x600"
								alt="Solution 4"
								className="object-cover w-full h-64"
							/>
							<div className="p-6">
								<h2 className="mb-2 text-2xl font-bold">
									Reporting & Analytics
								</h2>
								<p className="text-gray-800">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									ut elit vel est porta tristique.
								</p>
								<button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Solutions;
