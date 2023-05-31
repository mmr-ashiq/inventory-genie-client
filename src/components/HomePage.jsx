import React from 'react';
import logo from '../assets/homePage.svg';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';

const HomePage = () => {
	const { data } = useIsLoggedIn();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<img src={logo} alt="Logo" className="w-48 mb-10" />
			<h1 className="mb-8 text-4xl font-bold">Inventory Management System</h1>
			{data && data.userData?.role === 'manager' && (
				<p className="max-w-md text-lg text-center text-gray-500">
					Welcome to Manager Dashboard.
				</p>
			)}
			{data && data.userData?.role === 'admin' && (
				<div>
					<p className="max-w-md text-lg text-center text-gray-500">
						Welcome to Admin Dashboard.
					</p>
				</div>
			)}
			{!data && (
				<p className="max-w-md text-lg text-center text-gray-500">
					Welcome to our inventory management system. This system will help you
					manage your inventory and streamline your business operations.
				</p>
			)}
		</div>
	);
};

export default HomePage;
