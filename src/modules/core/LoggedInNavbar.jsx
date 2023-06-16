import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logoutApi } from '../../apis/auth.apis';
import { useIsLoggedIn } from '../../hooks/useIsLoggedIn';

import { Menu, Transition } from '@headlessui/react';
import { AiOutlineCloseCircle, AiOutlineDown } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

const LoggedInNavbar = () => {
	const queryClient = useQueryClient();
	const [isOpen, setIsOpen] = useState(false);
	const [activeLink, setActiveLink] = useState('');
	const { data } = useIsLoggedIn();
	const sidebarRef = useRef(null);
	const navigate = useNavigate();

	const closeSidebar = () => {
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // Prevent scrolling when the sidebar is open
		} else {
			document.body.style.overflow = ''; // Allow scrolling when the sidebar is closed
		}
	}, [isOpen]);

	const logOutToast = () =>
		toast.success('You have successfully signed out!', {
			theme: 'colored',
			autoClose: 2000,
			icon: '👋',
		});

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<div className="relative h-12">
			<div className="flex items-center justify-between h-full px-4 bg-gradient-to-r from-teal-500 via-blue-200 to-blue-400">
				<div
					className="flex flex-col justify-between w-10 h-6 cursor-pointer"
					onClick={() => setIsOpen(true)}
				>
					<GiHamburgerMenu className="h-10 ml-auto text-3xl text-white " />
				</div>

				<div>
					<div className="flex items-center">
						<Menu as="div" className="relative z-50 ml-3">
							<div>
								<Menu.Button className="flex items-center max-w-xs text-sm">
									<VscAccount className="h-10 ml-auto text-2xl text-grey-700" />
									<span className="hidden ml-3 overflow-hidden text-sm font-semibold text-gray-700 overflow-ellipsis lg:block">
										<span className="sr-only">
											Open user menu for{' '}
										</span>
										{data.userData?.name}
									</span>
									<AiOutlineDown
										className="flex-shrink-0 hidden ml-1 text-sm font-bold text-gray-600 lg:block"
										aria-hidden="true"
									/>
								</Menu.Button>
							</div>
							<Transition
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="absolute right-0 z-50 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/user-profile"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Your Profile
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												to="/settings-route"
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
											>
												Settings
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<button
												className={classNames(
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700'
												)}
												onClick={async () => {
													logOutToast();
													await logoutApi();
													await queryClient.invalidateQueries(
														{
															queryKey:
																'isLoggedIn',
														}
													);
													navigate('/login'); // Navigate to the login page
												}}
											>
												Logout
												<FiLogOut className="inline-block w-4 h-4 ml-1 text-gray-700" />
											</button>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>

					{isOpen && (
						<div
							className="fixed inset-0 z-10 transition-opacity duration-300 bg-black opacity-50"
							onClick={closeSidebar}
						></div>
					)}
				</div>

				<div
					ref={sidebarRef}
					className={`fixed bottom-0 left-0 z-20 w-64 h-screen transition-transform duration-300 transform ${
						isOpen ? 'translate-x-0' : '-translate-x-full'
					} bg-gradient-to-b from-navy-900 to-teal-500`}
				>
					<div className="p-3 bg-gradient-to-r from-blue-300 to-teal-400">
						{data?.userData?.role === 'manager' ? (
							<p className="mr-3">Manager Portal</p>
						) : (
							<p className="mr-3 font-medium text-slate-700">
								Admin Portal
							</p>
						)}

						<button
							className="absolute top-2 right-3 focus:outline-none group"
							onClick={closeSidebar}
						>
							<AiOutlineCloseCircle className="text-3xl text-white" />
							<span className="absolute px-2 py-1 mt-1 text-white transition-opacity duration-300 transform -translate-x-1/2 rounded opacity-0 bg-slate-600 group-hover:opacity-100 top-full left-1/2">
								close
							</span>
						</button>
					</div>
					<div className="px-4 pt-3">
						<ul className="flex flex-col space-y-4">
							{data?.userData?.role === 'manager' && (
								<>
									<li
										className={`text-white ${
											activeLink === '/dashboard'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/dashboard"
											className={`${
												activeLink === '/dashboard'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink('/dashboard')
											}
											onMouseLeave={() =>
												setActiveLink('/dashboard')
											}
										>
											Dashboard
										</Link>
									</li>
									<li
										className={`text-white ${
											activeLink === '/manage-admin'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/manage-admin"
											className={`${
												activeLink === '/manage-admin'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink('/manage-admin')
											}
											onMouseLeave={() =>
												setActiveLink('/manage-admin')
											}
										>
											Manage-Admin
										</Link>
									</li>
								</>
							)}
							{data?.userData?.role === 'admin' && (
								<>
									<li
										className={`text-white ${
											activeLink === '/dashboard'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/dashboard"
											className={`${
												activeLink === '/dashboard'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink('/dashboard')
											}
											onMouseLeave={() =>
												setActiveLink('/dashboard')
											}
										>
											Dashboard
										</Link>
									</li>

									<li
										className={`text-white ${
											activeLink === '/manage-inventory'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/manage-inventory"
											className={`${
												activeLink ===
												'/manage-inventory'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink(
													'/manage-inventory'
												)
											}
											onMouseLeave={() =>
												setActiveLink(
													'/manage-inventory'
												)
											}
										>
											Manage Inventory
										</Link>
									</li>

									<li
										className={`text-white ${
											activeLink === '/manage-customer'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/manage-customer"
											className={`${
												activeLink ===
												'/manage-customer'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink(
													'/manage-customer'
												)
											}
											onMouseLeave={() =>
												setActiveLink(
													'/manage-customer'
												)
											}
										>
											Manage Customers
										</Link>
									</li>

									<li
										className={`text-white ${
											activeLink === '/vendors'
												? 'font-medium border border-white rounded-md p-1'
												: ''
										}`}
									>
										<Link
											to="/manage-vendor"
											className={`${
												activeLink === '/vendors'
													? 'font-medium'
													: ''
											}`}
											onMouseEnter={() =>
												setActiveLink('/vendors')
											}
											onMouseLeave={() =>
												setActiveLink('/vendors')
											}
										>
											Manage Vendors
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoggedInNavbar;
