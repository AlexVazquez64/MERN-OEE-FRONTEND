import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setupAlertCriteriaDelete,
  setupAlertCriteriaOpenModal,
  setupAlertCriteriaSetActive,
} from '../../../actions/alertCriteriaAction';

import {
  alertCriteriaColumns,
  alertCriteriaDataModal
} from '../../../helpers/dataTables';

import Table from '../../../helpers/Table';
import AlertCriteriaModal from './AlertCriteriaModal';

import '../../../styles/components/setup/_setup.css';

const SetupAlertCriteria = () => {

  const dispatch = useDispatch();
  const {
    events,
    modalOpen,
    activeEvents
  } = useSelector( state => state.alertCriteria );

  const handleOpenModal = () => {
    dispatch( setupAlertCriteriaOpenModal() );
  }

  const handleOnSelectRow = ( e ) => {
    dispatch( setupAlertCriteriaSetActive( e ) );
    dispatch( setupAlertCriteriaOpenModal() );
  }

  const handleDelete = ( event ) => {
    dispatch( setupAlertCriteriaDelete( event ) );
  }

  return (
    <div className="container-fluid setup__vista">
      <h1 className="text-center setup__h1-mb">Alert Criteria</h1>

      <div className="text-end setup__mb">
        <button
          className="btn btn-primary"
          onClick={ handleOpenModal }
        >
          Create new Alert Criteria
        </button>
      </div>

      <Table
        columnas={ alertCriteriaColumns }
        filas={ events }
        handleDelete={ handleDelete }
        handleOnSelectRow={ handleOnSelectRow }
      />

      <AlertCriteriaModal
        activeEvents={ activeEvents }
        modalOpen={ modalOpen }
        initState={ alertCriteriaDataModal }
      />

    </div>
  )
}

export default SetupAlertCriteria
