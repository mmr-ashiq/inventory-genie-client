import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cart from '../src/components/Cart';
import CheckOut from '../src/components/CheckOut';
import Dashboard from '../src/components/Dashboard';
import OrderHistory from '../src/components/OrderHistory';
import About from '../src/modules/core/About';
import Contact from '../src/modules/core/Contact';
import Pricing from '../src/modules/core/Pricing';
import NotFound from './modules/core/NotFound';
import ProductDetails from './components/ProductDetails';
import ProductOverview from './components/ProductOverview';
import { CartProvider } from './context/products.context';
import { useIsLoggedIn } from './hooks/useIsLoggedIn';
import ManageCustomer from './modules/admin/ManageCustomer';
import ManageInventory from './modules/admin/ManageInventory';
import ManageVendor from './modules/admin/ManageVendor';
import Footer from './modules/core/Footer';
import { Home } from './modules/core/Home';
import HomePage from './modules/core/HomePage';
import LoggedInFooter from './modules/core/LoggedInFooter';
import LoggedInNavbar from './modules/core/LoggedInNavbar';
import Navbar from './modules/core/Navbar';
import Profile from './modules/core/Profile';
import SignIn from './modules/core/SignIn';
import SignUp from './modules/core/SignUp';
import Solutions from './modules/core/Solutions';
import UserProfile from './modules/core/UserProfile';
import ManageAdmin from './modules/manager/ManageAdmin';
import { EditProduct } from './modules/product/EditProduct';
import Products from './modules/product/Products';

export default function App() {
	const { data } = useIsLoggedIn();
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
						<Route
							path="/productDetails"
							element={<ProductDetails />}
						/>
						<Route
							path="/orderHistory"
							element={<OrderHistory />}
						/>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route
							path="/manage-inventory"
							element={<ManageInventory />}
						/>
						<Route
							path="/manage-customer"
							element={<ManageCustomer />}
						/>
						<Route path="/manage-admin" element={<ManageAdmin />} />
						<Route
							path="/manage-vendor"
							element={<ManageVendor />}
						/>
						<Route path="/products" element={<Products />} />
						<Route path="/home" element={<Home />} />
						<Route
							path="/user-profile/"
							element={<UserProfile />}
						/>
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
