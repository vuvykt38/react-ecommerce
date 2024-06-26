import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { UserContext } from '../../context/user-context';

const Order = () => {
    const { cart } = useContext(ShopContext);
    const { user } = useContext(UserContext)

    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">Your order <a href="#" className="font-medium text-gray-900 dark:text-white hover:underline">#{Date.now()}</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
                <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{new Date().toLocaleDateString()}</dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">Payment on delivery</dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{user.name}</dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Email</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{user.email}</dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{user.address}</dd>
                    </dl>
                    <dl className="sm:flex items-center justify-between gap-4">
                        <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
                        <dd className="font-medium text-gray-900 dark:text-white sm:text-end">+1 {user.phone}</dd>
                    </dl>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Return to shopping</a>
                </div>
            </div>
        </section>

    )
}

export default Order