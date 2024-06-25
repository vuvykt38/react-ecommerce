import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../context/user-context";
import { ShopContext } from "../context/shop-context";



export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(ShopContext);

  const handleFacebookLogout = () => {
    window.FB.logout(function (response) {
      setUser({});
    });
  };
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">
            Shop
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          {user && user.name ? (
            <div className="text-white flex items-center space-x-4 text-sm font-semibold">
              <p>Welcome, {user.name}</p>
              <a href="/" onClick={handleFacebookLogout} className="hover:text-gray-300">
                Logout
              </a>
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-300 text-sm font-semibold">
              Login
            </Link>
          )}
          <Link to="/cart" className="text-white hover:text-gray-300">
            <div class="relative py-1">
              <div class="t-0 absolute left-3">
                <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2  text-xs text-white">{cart.length}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-2 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
