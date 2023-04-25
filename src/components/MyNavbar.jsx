import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import {
	AiOutlineHome,
	AiOutlineLogout,
	AiOutlineUsergroupAdd,
	AiOutlineCloseCircle,
} from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineInventory, MdOutlinePrivacyTip } from 'react-icons/md';

const navigation = [
	{ name: 'Dashboard', href: '/', icon: AiOutlineHome, current: true },
	{
		name: 'Manage Product',
		href: '/products',
		icon: MdOutlineInventory,
		current: false,
	},
	{
		name: 'About',
		href: '/about',
		icon: AiOutlineUsergroupAdd,
		current: false,
	},
];
const secondaryNavigation = [
	{ name: 'Log out', href: '#', icon: AiOutlineLogout },
	{ name: 'Help', href: '#', icon: FiHelpCircle },
	{ name: 'Privacy', href: '#', icon: MdOutlinePrivacyTip },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
			<div className="min-h-full">
				<Transition.Root show={sidebarOpen} as={Fragment}>
					<Dialog
						as="div"
						className="relative z-40 lg:hidden"
						onClose={setSidebarOpen}
					>
						<Transition.Child
							as={Fragment}
							enter="transition-opacity ease-linear duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
						</Transition.Child>

						<div className="fixed inset-0 z-40 flex">
							<Transition.Child
								as={Fragment}
								enter="transition ease-in-out duration-300 transform"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transition ease-in-out duration-300 transform"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-cyan-700">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-300"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-300"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute top-0 right-0 pt-2 -mr-12">
											<button
												type="button"
												className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
												onClick={() => setSidebarOpen(false)}
											>
												<span className="sr-only">Close sidebar</span>
												<AiOutlineCloseCircle
													className="w-6 h-6 text-white"
													aria-hidden="true"
												/>
											</button>
										</div>
									</Transition.Child>
									<div className="flex items-center flex-shrink-0 px-4">
										<GiHamburgerMenu className="w-auto h-8" />
									</div>
									<nav
										className="flex-shrink-0 h-full mt-5 overflow-y-auto divide-y divide-cyan-800"
										aria-label="Sidebar"
									>
										<div className="px-2 space-y-1">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className={classNames(
														item.current
															? 'bg-cyan-800 text-white'
															: 'text-cyan-100 hover:text-white hover:bg-cyan-600',
														'group flex items-center px-2 py-2 text-base font-medium rounded-md'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													<item.icon
														className="flex-shrink-0 w-6 h-6 mr-4 text-cyan-200"
														aria-hidden="true"
													/>
													{item.name}
												</a>
											))}
										</div>
										<div className="pt-6 mt-6">
											<div className="px-2 space-y-1 ">
												{secondaryNavigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="flex items-center px-2 py-2 text-base font-medium rounded-md group text-cyan-100 hover:bg-cyan-600 hover:text-white"
													>
														<item.icon
															className="w-6 h-6 mr-4 text-cyan-200"
															aria-hidden="true"
														/>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</nav>
								</Dialog.Panel>
							</Transition.Child>
							<div className="flex-shrink-0 w-14" aria-hidden="true">
								{/* Dummy element to force sidebar to shrink to fit close icon */}
							</div>
						</div>
					</Dialog>
				</Transition.Root>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-cyan-700">
						<div className="flex items-center flex-shrink-0 px-4">
							<GiHamburgerMenu className="w-auto h-8" />
						</div>
						<nav
							className="flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-cyan-800"
							aria-label="Sidebar"
						>
							<div className="px-2 space-y-1">
								{navigation.map((item) => (
									<Link
										to={item.href}
										key={item.name}
										className={classNames(
											item.current
												? 'bg-cyan-800 text-white'
												: 'text-cyan-100 hover:text-white hover:bg-cyan-600',
											'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										<item.icon
											className="flex-shrink-0 w-6 h-6 mr-4 text-cyan-200"
											aria-hidden="true"
										/>
										{item.name}
									</Link>
								))}
							</div>
							<div className="pt-6 mt-6">
								<div className="px-2 space-y-1">
									{secondaryNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md group text-cyan-100 hover:bg-cyan-600 hover:text-white"
										>
											<item.icon
												className="w-6 h-6 mr-4 text-cyan-200"
												aria-hidden="true"
											/>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
