import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const { cartItems, setCart } = useContext(ShopContext);
  const fetchCart = () => {
    const newCart = PRODUCTS.filter((product) => cartItems[product.id] !== 0)
      .map((product) => ({
        ...product,
        quantity: cartItems[product.id]
      }));
    setCart(newCart);
  };

  useEffect(() => {
    fetchCart();
  }, [cartItems]);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
