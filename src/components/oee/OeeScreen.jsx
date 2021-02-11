import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from '../ui/Navbar';
import Sidebar from './Sidebar';

import { routes } from '../../helpers/routes';

import '../../styles/components/oee-main.css';

const OeeScreen = ({ location }) => {

  const { pathname } = location;

  const pathRoute = routes.find(({ path }) => path === pathname);

  return (
    <div
      className="Oee__main-content"
    >
      
      <Sidebar />
      
      <main  >
        <Navbar />

        {
          ( pathname === pathRoute?.path ) ?
            (
              <Switch>
                <Route
                  exact
                  path={pathname}
                  component={pathRoute.component}
                />

                
              </Switch>
            ) :
            (<Redirect to="/" />)
        }
      </main>
    </div>
  )
}

export default OeeScreen
