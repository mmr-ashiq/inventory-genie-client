import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutApi } from '../apis/auth.apis';
import logo from '../assets/diulogo_white.png';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';

// import 'react-toastify/dist/ReactToastify.css';

import { AiOutlineUser } from 'react-icons/ai';

const navigation = [
	{ name: 'Solutions', href: '/solutions' },
	{ name: 'Pricing', href: '/price' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Example() {
	const queryClient = useQueryClient();

	const { data } = useIsLoggedIn();

	const logOutToast = () =>
		toast.success('You have successfully signed out!', {
			theme: 'colored',
			autoClose: 2000,
			icon: '👋',
		});

	return (
		<>
			<header className="bg-indigo-600">
				<nav
					className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
					aria-label="Top"
				>
					<div className="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
						<div className="flex items-center">
							<Link to="/">
								<img className="w-auto h-10" src={logo} alt="" />
							</Link>
							<div className="hidden ml-10 space-x-8 lg:block">
								{navigation.map((link) => (
									<Link
										to={link.href}
										key={link.name}
										className="text-base font-medium text-white hover:text-indigo-100"
									>
										{link.name}{' '}
									</Link>
								))}
							</div>
						</div>
						<div className="flex items-center ml-10 space-x-4">
							{data?.isLoggedIn ? (
								<>
									<span className="flex items-center">
										<AiOutlineUser className="w-6 h-6" />
										<span className="ml-2 text-black transition-colors duration-500 cursor-pointer hover:text-indigo-50">
											{data.userData?.name || 'User'}
										</span>
									</span>

									<button
										className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
										onClick={async () => {
											logOutToast();
											await logoutApi();

											await queryClient.resetQueries({
												queryKey: 'isLoggedIn',
												exact: true,
											});
										}}
									>
										Log out
									</button>
								</>
							) : (
								<>
									<Link
										to="/login"
										className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
									>
										Log in
									</Link>
									<Link
										to="/signup"
										className="inline-block px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-opacity-75"
									>
										Sign up
									</Link>
								</>
							)}
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
