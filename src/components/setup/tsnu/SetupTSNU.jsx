import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setupTSNUDelete,
  setupTSNUOpenModal,
  setupTSNUSetActive
} from '../../../actions/tsnuActions';

import {
  tsnuColumns,
  tsnuDataModal
} from '../../../helpers/dataTables';

import Table from '../../../helpers/Table';
import TSNUModal from './TSNUModal';

import '../../../styles/components/setup/_setup.css';

const SetupTSNU = () => {

  const dispatch = useDispatch();
  const {
    events,
    modalOpen,
    activeEvents
  } = useSelector( state => state.tsnu );

  const handleOpenModal = () => {
    dispatch( setupTSNUOpenModal() );
  }

  const handleOnSelectRow = ( e ) => {
    dispatch( setupTSNUSetActive( e ) );
    dispatch( setupTSNUOpenModal() );
  }

  const handleDelete = ( event ) => {
    dispatch( setupTSNUDelete( event ) );
  }

  return (
    <div className="container-fluid setup__vista">
      <h1 className="text-center setup__h1-mb">TSNU</h1>

      <div className="text-end setup__mb">
        <button
          className="btn btn-primary"
          onClick={ handleOpenModal }
        >
          Create new TSNU
        </button>
      </div>

      <Table
        columnas={ tsnuColumns }
        filas={ events }
        handleDelete={ handleDelete }
        handleOnSelectRow={ handleOnSelectRow }
      />

      <TSNUModal
        activeEvents={ activeEvents }
        modalOpen={ modalOpen }
        initState={ tsnuDataModal }
      />

    </div>
  )
}

export default SetupTSNU
