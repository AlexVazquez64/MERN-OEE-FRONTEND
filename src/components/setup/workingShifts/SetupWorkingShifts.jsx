import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setupWorkingShiftsDelete,
  setupWorkingShiftsOpenModal,
  setupWorkingShiftsSetActive
} from '../../../actions/workingShiftsAction';

import {
  workingShiftsColumns,
  workingShiftsDataModal
} from '../../../helpers/dataTables';

import Table from '../../../helpers/Table';
import WorkingShiftsModal from './WorkingShiftsModal';

import '../../../styles/components/setup/_setup.css';

const SetupWorkingShifts = () => {

  const dispatch = useDispatch();
  const {
    events,
    modalOpen,
    activeEvents
  } = useSelector(state => state.workingShifts);

  const handleOpenModal = () => {
    dispatch( setupWorkingShiftsOpenModal() );
  }

  const handleOnSelectRow = ( e ) => {
    dispatch( setupWorkingShiftsSetActive( e ) );
    dispatch( setupWorkingShiftsOpenModal() );
  }

  const handleDelete = ( events ) => {
    dispatch( setupWorkingShiftsDelete( events ) );
  }

  return (
    <section className="container-fluid setup__vista">
      <header >
        <h1 className="text-center setup__h1-mb">
          Working Shifts
        </h1>
      </header>

      <article className="text-end setup__mb">
        <button
          className="btn btn-primary"
          onClick={ handleOpenModal }
        >
          Create new working shift
        </button>
      </article>

      <Table
        columnas={ workingShiftsColumns }
        filas={ events }
        handleDelete={ handleDelete }
        handleOnSelectRow={ handleOnSelectRow }
      />

      <WorkingShiftsModal
        activeEvents={ activeEvents }
        modalOpen={ modalOpen }
        initState={ workingShiftsDataModal }
      />
    </section>
  )
}

export default SetupWorkingShifts
