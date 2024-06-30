import React, { useEffect } from 'react';
import { PRODUCTS } from "../../products";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import ReactPixel from 'react-facebook-pixel';
import "./shop.css";


const ProductPage = () => {
    let { productId } = useParams();
    productId = parseInt(productId);
    const product = PRODUCTS.find(product => product.id === productId);
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemCount = cartItems[productId];

    const addToCartFb = () => {
        ReactPixel.track('AddToCart', {
            content_ids: [product.id],
            content_name: product.productName,
            content_type: 'product',
            value: product.price,
            currency: 'USD'
        });
    }

    useEffect(() => {
        ReactPixel.track('ViewContent', {
            content_ids: [product.id],
            content_name: product.productName,
            content_type: 'product',
            value: product.price,
            currency: 'USD'
        });
    }, []);

    return (
        <div className="container mx-auto mt-40 flex justify-center items-start h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex h-3/6 p-10">
                <div className="md:flex-shrink-0">
                    <img className="h-64 w-full object-cover md:w-64" src={product.productImage} alt={product.productName} />
                </div>
                <div className="p-4 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ex eveniet maxime architecto unde iste dolorum quae nemo temporibus ipsam sapiente, illum ipsa asperiores vero, corrupti earum. Iusto, voluptatibus nihil?</p>
                    <button className="addToCartBttn" onClick={() => {
                        addToCart(productId);
                        addToCartFb();
                    }}>
                        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
