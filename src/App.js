/* eslint-disable react/jsx-no-duplicate-props */
import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from '../src/components/Cart';
import CheckOut from '../src/components/CheckOut';
import OrderHistory from '../src/components/OrderHistory';
import Profile from '../src/components/Profile/Profile';
import About from '../src/modules/core/About';
import Contact from '../src/modules/core/Contact';
import Pricing from '../src/modules/core/Pricing';
import Dashboard from './components/Dashboard/Dashboard';
import ProductOverview from './components/ProductOverview';
import { CartProvider } from './context/products.context';
import { useIsLoggedIn } from './hooks/useIsLoggedIn';
import ManageCustomer from './modules/admin/ManageCustomer';
import ManageInventory from './modules/admin/ManageInventory';
import ManageVendor from './modules/admin/ManageVendor';
import Footer from './modules/core/Footer';
import HomePage from './modules/core/HomePage';
import LoggedInFooter from './modules/core/LoggedInFooter';
import LoggedInNavbar from './modules/core/LoggedInNavbar';
import Navbar from './modules/core/Navbar';
import NotFound from './modules/core/NotFound';
import SignIn from './modules/core/SignIn';
import SignUp from './modules/core/SignUp';
import Solutions from './modules/core/Solutions';
import ManageAdmin from './modules/manager/ManageAdmin';
import { EditProduct } from './modules/product/EditProduct';
import Products from './modules/product/Products';

export default function App() {
	const { data } = useIsLoggedIn();
	// const navigate = useNavigate();

	const isAdmin = data?.userData?.role === 'admin';
	// const isManager = data?.userData?.role === 'manager';

	return (
		<>
			<CartProvider>
				<MantineProvider withGlobalStyles withNormalizeCSS>
					{data?.isLoggedIn ? <LoggedInNavbar /> : <Navbar />}
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<About />} />
						<Route path="/price" element={<Pricing />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/dashboard" element=<Dashboard /> />
						<Route path="/manage-admin" element={<ManageAdmin />} />
						{isAdmin && (
							<Route
								path="/manage-inventory"
								element={<ManageInventory />}
							/>
						)}
						{isAdmin && (
							<Route
								path="/manage-vendor"
								element={<ManageVendor />}
							/>
						)}
						{isAdmin && (
							<Route path="/products" element={<Products />} />
						)}
						{isAdmin && (
							<Route
								path="/manage-customer"
								element={<ManageCustomer />}
							/>
						)}
						<Route
							path="/orderHistory"
							element={<OrderHistory />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route
							path="/productOverview"
							element={<ProductOverview />}
						/>
						<Route
							path="/edit-product/:id"
							element={<EditProduct />}
						/>
						<Route path="/solutions" element={<Solutions />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					{data?.isLoggedIn ? <LoggedInFooter /> : <Footer />}
				</MantineProvider>
			</CartProvider>
			<ToastContainer />
		</>
	);
}
