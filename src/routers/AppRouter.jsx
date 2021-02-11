import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import AuthRouter from './AuthRouter';
import OeeScreen from '../components/oee/OeeScreen';

import { paths } from '../helpers/paths';

// import { startChecking } from '../actions/auth';

const AppRouter = () => {

  const uid = true;
  const path = paths;

  return (
    <Router>
      <div>

        <Switch>
          <PublicRoute
            path="/auth"
            component={ AuthRouter }
            isAuthenticated={ !!uid }
          />

          <PrivateRoute
            exact
            path={ path.main }
            component={ OeeScreen }
            isAuthenticated={ !!uid }
          />

          <PrivateRoute
            path={ path.linemonitoring }
            component={ OeeScreen }
            isAuthenticated={ !!uid }
          />

          <PrivateRoute
            path={ path.setup }
            component={ OeeScreen }
            isAuthenticated={ !!uid }
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
