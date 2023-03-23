import { Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import Cart from '../src/components/Cart';
import CheckOut from '../src/components/CheckOut';
import Dashboard from '../src/components/Dashboard';
import OrderHistory from '../src/components/OrderHistory';
import Products from '../src/components/Products';
import { EditProduct } from './components/EditProduct';
import Footer from './components/Footer';
import { HomePage } from './components/home';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductOverview from './components/ProductOverview';
import SignIn from './components/SignIn';
import NotFound from './components/NotFound';
// import { useIsLoggedIn } from './hooks/useIsLoggedIn';
import { CartProvider } from './context/products.context';

export default function App() {
	// const {} = useIsLoggedIn();

	return (
		<>
			<CartProvider>
				<MantineProvider withGlobalStyles withNormalizeCSS>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<SignIn />} />
						<Route path="/productDetails" element={<ProductDetails />} />
						<Route path="/orderHistory" element={<OrderHistory />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route path="/products" element={<Products />} />
						<Route path="/productOverview" element={<ProductOverview />} />
						<Route path="/edit-product/:id" element={<EditProduct />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Footer />
				</MantineProvider>
			</CartProvider>
		</>
	);
}
