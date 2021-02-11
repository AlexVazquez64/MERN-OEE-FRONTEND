import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { startLogout } from '../../actions/auth';
// import { startNewNote } from '../../actions/notes';

// import JournalEntries from './JournalEntries';

import '../../styles/components/oee-sidebar.css'

const Sidebar = () => {

  // const dispatch = useDispatch();
  // const { name } = useSelector( state => state.auth );

  return (
    <aside className="Oee__sidebar">
      <div className="Oee__sidebar-navbar">
        <h3 className="">
          <i className="fas fa-user-circle mx-3"></i>
          <span className="">Alex</span>
        </h3>
      </div>

      <hr />

      <div
        className="Oee__sidebar__main-content"
      >
        <Link
          to={'/'}
          className="Oee__sidebar__links"
        >
          <i className="fas fa-chart-line me-3"></i> Dashboard
        </Link>
      </div>

      <hr />

      <div
        className="Oee__sidebar__main-content"
      >
        <Link
          to={'/linemonitoring'}
          className="Oee__sidebar__links"
        >
          <i className="fas fa-chart-bar me-3"></i>Line Monitoring
        </Link>
      </div>

      <hr />

      <div
        className="Oee__sidebar__main-content"
      >
        <Link
          to={"/setup"}
          className="Oee__sidebar__links"
        >
          <i className="fas fa-cogs me-3"></i>Setup
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
