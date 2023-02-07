import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/diulogo_white.png';

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '/price' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Example() {
    return (
        <header className="bg-indigo-600">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                    <div className="flex items-center">
                        <span className="sr-only">InventoryGenie</span>
                        <Link to="/"><img className="h-10 w-auto" src={logo} alt="" /></Link>
                        <div className="ml-10 hidden space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link to={link.href} key={link.name} className="text-base font-medium text-white hover:text-indigo-50">{link.name} </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">

                        <Link to="/signin" className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">Sign in</Link>
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
