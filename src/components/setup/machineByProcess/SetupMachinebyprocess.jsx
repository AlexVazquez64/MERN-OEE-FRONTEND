import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setupMachineByProcessDelete,
  setupMachineByProcessOpenModal,
  setupMachineByProcessSetActive
} from '../../../actions/machineByProcessAction';

import {
  machineByProcessColumns,
  machineByProcessDataModal
} from '../../../helpers/dataTables';

import Table from '../../../helpers/Table';
import MachineByProcessModal from './MachineByProcessModal';

const SetupMachinebyprocess = () => {

  const dispatch = useDispatch();
  const {
    events,
    modalOpen,
    activeEvents
  } = useSelector( state => state.machineByProcess );

  const handleOpenModal = () => {
    dispatch( setupMachineByProcessOpenModal() );
  }

  const handleOnSelectRow = ( e ) => {
    dispatch( setupMachineByProcessSetActive( e ) );
    dispatch( setupMachineByProcessOpenModal() );
  }

  const handleDelete = ( events ) => {
    dispatch( setupMachineByProcessDelete( events ) );
  }
  
  return (
    <div className="container-fluid setup__vista">
      <h1 className="text-center setup__h1-mb">Machine by Process</h1>

      <div className="text-end setup__mb">
          <button
            className="btn btn-primary"
            onClick={ handleOpenModal }
          >
            Create new
          </button>
        </div>

        <Table
          columnas={ machineByProcessColumns }
          filas={ events }
          handleDelete={ handleDelete }
          handleOnSelectRow={ handleOnSelectRow }
        />

        <MachineByProcessModal
          activeEvents={ activeEvents }
          modalOpen={ modalOpen }
          initState={ machineByProcessDataModal }
        />

    </div>
  )
}

export default SetupMachinebyprocess
