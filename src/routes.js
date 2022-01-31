import React from 'react';
import CreateApplication from './pages/CreateApplication/CreateApplication';
import SuccessfulApplication from './pages/SuccessfulApplication/SuccessfulApplication';
import ShowApplication from './pages/ShowApplication/ShowApplication';
import Error404 from './components/Error404/Error404';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Auth() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateApplication} />
        <Route exact path="/successfulapplication" component={SuccessfulApplication} />
        <Route exact path="/showapplication" component={ShowApplication} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default Auth;
