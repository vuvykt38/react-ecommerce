import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { UserContext } from '../context/user-context';

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(ShopContext)
  return user.id ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
