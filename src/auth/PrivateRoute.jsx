import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';


const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading user data...</div>;

  return user ? children : navigate("/login");
};

export default PrivateRoute;