import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Pricing from './Pricing';
import SignIn from './SignIn';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
            <About />
        ),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      }
    ],
  },
]);

export default appRouter;