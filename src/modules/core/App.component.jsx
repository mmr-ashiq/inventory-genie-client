import React from "react";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar.component";
import Footer from "./Footer.component";
import Home from "./Home.component";
import About from "./About.component";
import Contact from "./Contact.component";
import Pricing from "./Pricing.component";
import SignIn from "./SignIn.component";
import Error from "./Error.component";
import ManagerDashboard from "../manger/manager.dashboard";

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
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
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
            },
            {
                path: "/manager-dashboard",
                element: <ManagerDashboard />,
            },
        ],
    },
]);

export default appRouter;
