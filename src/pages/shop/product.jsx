import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const addToCartFb = () => {
    ReactPixel.track('AddToCart', {
      content_ids: [id],
      content_name: productName,
      content_type: 'product',
      value: price,
      currency: 'USD'
    });
  }

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
      </Link>
      <button className="addToCartBttn" onClick={() => {
        addToCart(id);
        addToCartFb();
      }}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
