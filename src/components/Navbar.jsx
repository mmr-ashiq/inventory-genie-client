import React from "react";
import { Link } from "react-router-dom";
import { logoutApi } from "../apis/auth.apis";
import { useQueryClient } from "@tanstack/react-query";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

const navigation = [
  { name: "products", href: "/products" },
  { name: "cart", href: "/cart" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Example() {
  const queryClient = useQueryClient();

  const { data } = useIsLoggedIn();

  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <span className="sr-only">InventoryGenie</span>
            <Link to="/">
              <h2 className="text-2xl text-amber-300">Logo</h2>
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  to={link.href}
                  key={link.name}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}{" "}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {data?.isLoggedIn ? (
              <>
                <button
                  className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                  onClick={async () => {
                    await logoutApi();

                    // queryClient.invalidateQueries({ queryKey: ["isLoggedIn"] });
                    // queryClient.removeQueries("isLoggedIn");
                    queryClient.resetQueries({
                      queryKey: "isLoggedIn",
                      exact: true,
                    });
                  }}
                >
                  Logout
                </button>

                <span>{data.userData?.fullName}</span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
