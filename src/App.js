import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../src/components/Cart';
import CheckOut from '../src/components/CheckOut';
import Dashboard from '../src/components/Dashboard';
import OrderHistory from '../src/components/OrderHistory';
import Products from '../src/components/Products';
import About from '../src/modules/core/About';
import Contact from '../src/modules/core/Contact';
import Pricing from '../src/modules/core/Pricing';
import { EditProduct } from './components/EditProduct';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import MyNavbar from './components/MyNavbar';
import NotFound from './components/NotFound';
import Profile from './modules/core/Profile';
import ProductDetails from './components/ProductDetails';
import ProductOverview from './components/ProductOverview';
import { CartProvider } from './context/products.context';
import SignIn from './modules/core/SignIn';
import SignUp from './modules/core/SignUp';
import Footer from './modules/core/Footer';
import Solutions from './modules/core/Solutions';

export default function App() {
	return (
		<>
			<CartProvider>
				<MantineProvider withGlobalStyles withNormalizeCSS>
					<Navbar />
					{/* <MyNavbar /> */}
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<About />} />
						<Route path="/price" element={<Pricing />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/productDetails" element={<ProductDetails />} />
						<Route path="/orderHistory" element={<OrderHistory />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/MyNavbar" elemnet={<MyNavbar />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route path="/products" element={<Products />} />
						<Route path="/productOverview" element={<ProductOverview />} />
						<Route path="/edit-product/:id" element={<EditProduct />} />
						<Route path="/solutions" element={<Solutions />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</MantineProvider>
			</CartProvider>
			<ToastContainer />
		</>
	);
}
