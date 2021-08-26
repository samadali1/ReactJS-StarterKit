import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute(props) {
  const user = useSelector((state) => state.user.user);
  const Component = props.component;
  const isAuthenticated = user;

  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/login' }} />;
}

export default ProtectedRoute;
