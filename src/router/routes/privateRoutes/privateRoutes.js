import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../protectedRoute';

// Importing Screens

import Dashboard from '../../../screens/private/dashboard';

function PrivateRoutes() {
  return (
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default PrivateRoutes;
