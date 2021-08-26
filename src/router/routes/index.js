import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PublicRoutes from './publicRoutes/publicRoutes';
import PrivateRoutes from './privateRoutes/privateRoutes';

const Navigations = React.memo(() => (
  <Router>
    {/* Public Routes */}
    <PublicRoutes />
    {/* Private Routes */}
    <PrivateRoutes />
  </Router>
));

export default Navigations;
