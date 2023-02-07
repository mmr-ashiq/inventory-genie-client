import React from 'react';
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from './About.component';
import Contact from './Contact.component';
import Error from './Error.component';
import Footer from './Footer.component';
import Home from './Home.component';
import Navbar from './Navbar.component';
import Pricing from './Pricing.component';
import SignIn from './SignIn.component';

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