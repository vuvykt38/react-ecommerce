import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { UserContext } from "../context/user-context";



export const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleFacebookLogout = () => {
    window.FB.logout(function(response) {
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
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          )}
          <Link to="/cart" className="text-white hover:text-gray-300">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
