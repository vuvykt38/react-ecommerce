import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import ReactPixel from 'react-facebook-pixel';
import "./cart.css";

export const Cart = () => {
  const { getTotalCartAmount, cart } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  useEffect(() => {
    ReactPixel.track('ViewCart', {
      content_ids: cart.map(product => product.id),
      content_type: 'product',
      value: totalAmount,
      currency: 'USD'
    });
  }, [totalAmount]);

  return (
    <div className="cart">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Cart Items</h1>
      </div>
      <div className="cart">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} data={item} />
          ))
        ) : (''
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => navigate("/checkout")}
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
