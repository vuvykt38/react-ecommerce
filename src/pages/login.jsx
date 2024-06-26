import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user-context";
import { ShopContext } from '../context/shop-context';


export const Login = () => {
  const { setUser } = useContext(UserContext);
  const { cart } = useContext(ShopContext)
  const navigate = useNavigate();
  
  const navigateBasedOnCart = () => {
    navigate(cart.length > 0 ? '/checkout' : '/');
  };

  const loginWithServer = async (accessToken) => {
    try {
      const response = await axios.get("https://graph.facebook.com/v20.0/me", {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          fields: 'name,email',
          access_token: accessToken
        }
      });
      setUser(response.data)
      console.log('User data set:', response.data);
      navigateBasedOnCart();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const statusChangeCallback = (response) => {
    console.log('statusChangeCallback called with response:', response);
    if (response.status === 'connected') {
      setTimeout(() => {
        loginWithServer(response.authResponse.accessToken);
      }, 1000); // Delay of 1000 milliseconds (1 second)
    } else {
      console.log('please login');
    }
  };

  const checkLoginState = () => {
    console.log('checkLoginState called');
    window.FB.getLoginStatus((response) => {
      statusChangeCallback(response);
    });
    console.log('checkLoginState done');
  };

  const handleFBLogin = () => {
    window.FB.login(checkLoginState, { scope: 'public_profile,email' });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 items-center justify-center">
            <div className='flex flex-col items-center justify-center gap-6'>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className='flex items-center'>
                <button onClick={handleFBLogin} className="bg-[#1a77f2] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg inline-flex items-center">
                  <svg className="w-6 h-6 mr-3 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.345v21.31C0 23.4.6 24 1.325 24H12.82V14.692h-3.418v-3.631h3.418V8.41c0-3.377 2.063-5.214 5.078-5.214 1.446 0 2.691.106 3.053.155v3.545l-2.095.001c-1.642 0-1.961.781-1.961 1.925v2.521h3.918l-.511 3.631h-3.407V24h6.693C23.4 24 24 23.4 24 22.655V1.345C24 .6 23.4 0 22.675 0z" />
                  </svg>
                  Login With Facebook
                </button>
              </div>
            </div>
            <div className="h-5 border-b-2 border-grey text-center text-gray-900">
              <span className="bg-white px-5">OR</span>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
