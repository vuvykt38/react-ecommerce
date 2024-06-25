import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./cart.css";

export const Cart = () => {
  const { getTotalCartAmount, cart } = useContext(ShopContext);
  const { user } = useContext(UserContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user.name) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="cart">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Cart Items</h1>
      </div>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem data={item} />
          ))
        ) : (''
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
