import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../helpers/paths';

import '../../styles/components/oee-sidebar.css';

import '../../styles/components/setup/_setup.css';

const SetupScreen = () => {

  const path = paths;

  return (
    <div className="container-fluid setup__vista-menu">

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupUsers}>
            <div
              className="bg-primary p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              <i className="fas fa-users me-3"></i>Users
            </div>
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupOverallinformation}>
            <div
              className="bg-success p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              Overall Information
            </div>
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupMachinebyprocess}>
            <div
              className="bg-danger p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              Machine By Process
            </div>
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupWorkingshifts}>
            <div
              className="bg-warning p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              Working Shifts
            </div>
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupTSNU}>
            <div
              className="bg-primary p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              TSNU
            </div>
          </Link>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <Link className="Oee__sidebar__links" to={path.setupAlertCriteria}>
            <div
              className="bg-success p-5 m-4 text-center text-white rounded-3"
              type="button"
            >
              Alert Criteria
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default SetupScreen
