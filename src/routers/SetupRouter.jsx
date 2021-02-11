import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import SetupOverallInformation from '../components/setup/SetupOverallInformation';
import SetupScreen from '../components/setup/SetupScreen';
import SetupUsers from '../components/setup/SetupUsers';

const SetupRouter = ({ location }) => {

  console.log(location);
  return (
    <Switch>

      <Route
        exact
        path="/setup"
        component={SetupScreen}
      />

      <Route

        path="./users"
        component={SetupUsers}
      />

      <Route

        path="./overallinformation"
        component={SetupOverallInformation}
      />

      <Redirect to="/" />
    </Switch>
  )
}

export default SetupRouter
