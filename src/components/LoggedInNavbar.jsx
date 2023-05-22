import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import { toast } from 'react-toastify';
import { logoutApi } from '../apis/auth.apis';
import { useIsLoggedIn } from '../hooks/useIsLoggedIn';

const LoggedInNavbar = () => {
	const queryClient = useQueryClient();
	const [isOpen, setIsOpen] = useState(false);
	const { data } = useIsLoggedIn();
	const sidebarRef = useRef(null);

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

	return (
		<div className="flex items-center justify-between h-12 px-4 bg-gradient-to-r from-teal-500 via-blue-200 to-blue-400">
			<div
				className="flex flex-col justify-between w-10 h-6 cursor-pointer"
				onClick={() => setIsOpen(true)}
			>
				<GiHamburgerMenu className="h-10 ml-auto text-3xl text-white " />
			</div>

			<div>
				<div className="flex items-center">
					<VscAccount className="h-10 ml-auto text-2xl text-white" />
					<span className="ml-2 text-white">{data.userData?.name}</span>
					<button
						className="flex items-center p-2 ml-8 bg-blue-300 border border-transparent rounded-lg text-slate-600 hover:bg-opacity-75"
						onClick={async () => {
							logOutToast();
							await logoutApi();

							await queryClient.invalidateQueries({
								queryKey: 'isLoggedIn',
							});
						}}
					>
						<FiLogOut className="mr-2 text-2xl text-white" />
						<span className='text-slate-600'>Log out</span>
					</button>
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
						<p className="mr-3">Manger Portal</p>
					) : (
						<p className="mr-3 font-medium text-slate-700">Admin Portal</p>
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
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
						<li className="text-white">Dashboard</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LoggedInNavbar;
