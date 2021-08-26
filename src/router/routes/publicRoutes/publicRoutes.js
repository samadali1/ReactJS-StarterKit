import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing Screens
import Landing from '../../../screens/public/landing';
import Login from '../../../screens/public/auth/login';
import Register from '../../../screens/public/auth/signup';

function PublicRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}

export default PublicRoutes;
