import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user-context';

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserContext);
  return user.id ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
