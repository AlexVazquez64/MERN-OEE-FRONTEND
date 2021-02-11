import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setupOverallInformationOpenModal,
  setupOverallInformationSetActive,
  setupOverallInformationDelete
} from '../../../actions/overallInformationAction';

import {
  overallInformationColumns,
  overallInformationDataModal
} from '../../../helpers/dataTables';

import OverallInformationModal from './OverallInformationModal';
import Table from '../../../helpers/Table';

import '../../../styles/components/setup/_setup.css';

const SetupOverallInformation = () => {

  const dispatch = useDispatch();
  const {
    events,
    modalOpen,
    activeEvents
  } = useSelector( state => state.overallInformation );

  const handleOpenModal = () => {
    dispatch( setupOverallInformationOpenModal() );
  }

  const handleOnSelectRow = ( e ) => {
    dispatch( setupOverallInformationSetActive( e ) );
    dispatch( setupOverallInformationOpenModal() );
  }

  const handleDelete = ( events ) => {
    dispatch( setupOverallInformationDelete( events ) );
  }

  return (
    <div className="container-fluid setup__vista">
        <h1 className="text-center">Overall Information</h1>
        <h2 className="text-center setup__h2-mb">(Line or Process)</h2>

        <div className="text-end setup__mb">
          <button
            className="btn btn-primary"
            onClick={ handleOpenModal }
          >
            Create New Process
          </button>
        </div>

        <Table
          columnas={ overallInformationColumns }
          filas={ events }
          handleDelete={ handleDelete }
          handleOnSelectRow={ handleOnSelectRow }
        />



      <OverallInformationModal
        activeEvents={ activeEvents }
        modalOpen={ modalOpen }
        initState={ overallInformationDataModal }
      />
      
    </div>
  )
}

export default SetupOverallInformation
