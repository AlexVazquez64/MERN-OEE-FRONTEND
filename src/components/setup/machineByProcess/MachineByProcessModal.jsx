import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import validator from 'validator';
import Swal from "sweetalert2";

import { useForm } from '../../../hooks/useForm';
import {
  setupMachineByProcessAddNew,
  setupMachineByProcessClearActive,
  setupMachineByProcessCloseModal,
  setupMachineByProcessUpdate,
} from '../../../actions/machineByProcessAction';

import { customStyles } from '../../../helpers/center-modal-styles';
import '../../../styles/components/setup/_modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const MachineByProcessModal = ( props ) => {

  const dispatch = useDispatch();

  const {
    modalOpen,
    activeEvents,
    initState
  } = props;
  
  const [
    formValues,
    handleInputChange,
    reset,
    setValues
  ] = useForm( initState );

  const {
    machineName,
    tacTime,
    sensorCode,
    ...rest
  } = formValues;

  const [
    formValuesProcessName,
    handleInputChangeProcessName,
  ] = useForm( initState );

  const {
    processName
  } = formValuesProcessName;

  useEffect(() => {
    if ( activeEvents ) {
      setValues( activeEvents );
    }
  }, [ activeEvents, setValues ])

  const handleCloseModal = () => {
    reset();
    dispatch( setupMachineByProcessCloseModal() );
    dispatch( setupMachineByProcessClearActive() );
  }

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    if ( validator.isInt( tacTime.toString() ) ) {
      if ( activeEvents ) {
        dispatch( setupMachineByProcessUpdate({
          ...formValues,
          overallInformation: {
            ...rest.overallInformation,
            processName
          }
        }) );
      } else {
        dispatch( setupMachineByProcessAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: new Date().getUTCDay().toString(),
            name: 'Alex'
          },
          overallInformation: {
            _id: new Date().getTime(),
            processName
          },
        }) );
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El Tac Time es incorrecto, debe ser un número',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
      });
    }

    handleCloseModal();
  }

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
      isOpen={ modalOpen }
      onRequestClose={ handleCloseModal }
      shouldCloseOnOverlayClick={ true }
      style={ customStyles }
    >
      <div className="row">
        <div className="col-md-12">
          <h3 className="auth__title">{ ( activeEvents ) ? `Edit Machine by Process`  : `New Machine by Process` }</h3>
          <hr/>
          <form
            onSubmit={ handleSubmitForm }
            className="animate__animated animate__fadeIn animate__faster"
          >

            <div className="mb-2">
              <label htmlFor="processName">Process Name</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={ handleInputChangeProcessName }
                name="processName"
              >
                <option defaultValue style={{ display: 'none' }}>{ ( activeEvents ) ? `${ activeEvents.overallInformation.processName }`  : `Select Process Name` }</option>
                <option value="XYZ">XYZ</option>
                <option value="abc">abc</option>
                <option value="gde">gde</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="machineName">Name</label>
              <input
                className="form-control"
                name="machineName"
                required
                onChange={ handleInputChange }
                placeholder="Machine Name"
                type="text"
                value={ machineName }
              />
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="tacTime">Tac Time</label>
                <input
                  className="form-control"
                  min="1"
                  name="tacTime"
                  required
                  onChange={ handleInputChange }
                  placeholder="Tac Time"
                  type="number"
                  value={ tacTime }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="sensorCode">Sensor Code</label>
                <input
                  className="form-control"
                  name="sensorCode"
                  required
                  onChange={ handleInputChange }
                  placeholder="Sensor Code"
                  type="text"
                  value={ sensorCode }
                />
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <input
                type="submit"
                className="btn btn-block btn-outline-primary"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default MachineByProcessModal
