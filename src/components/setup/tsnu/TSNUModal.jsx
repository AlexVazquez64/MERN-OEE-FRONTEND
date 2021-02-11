import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import validator from 'validator';
import Swal from "sweetalert2";

import { useForm } from '../../../hooks/useForm';
import {
  setupTSNUAddNew,
  setupTSNUClearActive,
  setupTSNUCloseModal,
  setupTSNUUpdate,
} from '../../../actions/tsnuActions';

import { customStyles } from '../../../helpers/center-modal-styles';
import '../../../styles/components/setup/_modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const TSNUModal = ( props ) => {

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
    machineNo,
    timeMin,
    description,
    ...rest
  } = formValues;

  const [
    formValuesMachineName,
    handleInputChangeMachineName,
  ] = useForm( initState );

  const {
    machineName
  } = formValuesMachineName;

  useEffect(() => {
    if ( activeEvents ) {
      setValues( activeEvents );
    }
  }, [ activeEvents, setValues ])

  const handleCloseModal = () => {
    reset();
    dispatch( setupTSNUCloseModal() );
    dispatch( setupTSNUClearActive() );
  }

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    if ( validator.isInt( machineNo.toString() ) ) {
      console.log('correct');
    
      if ( activeEvents ) {
        dispatch( setupTSNUUpdate({
          ...formValues,
          machineByProcess: {
            ...rest.machineByProcess,
            machineName
          }
        }) );
      } else {
        dispatch( setupTSNUAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: new Date().getUTCDay().toString(),
            name: 'Alex'
          },
          machineByProcess: {
            _id: new Date().getTime(),
            machineName: 'Prensa 1'
          }
        }) );
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El machine No. es incorrecto, debe ser un número',
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
          <h3 className="auth__title">{ ( activeEvents ) ? `Edit TSNU`  : `New TSNU` }</h3>
          <hr/>
          <form
            onSubmit={ handleSubmitForm }
            className="animate__animated animate__fadeIn animate__faster"
          >

            <div className="mb-2">
              <label htmlFor="machineName">Machine Name</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={ handleInputChangeMachineName }
                name="machineName"
              >
                <option defaultValue style={{ display: 'none' }}>{ ( activeEvents ) ? `${ activeEvents.machineByProcess.machineName }`  : `Select Machine Name` }</option>
                <option value="Prensa 1">Prensa 1</option>
                <option value="Prensa 2">Prensa 2</option>
                <option value="Prensa 3">Prensa 3</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="machineNo">Machine No</label>
                <input
                  className="form-control"
                  min="1"
                  name="machineNo"
                  required
                  onChange={ handleInputChange }
                  placeholder="Machine No"
                  type="number"
                  value={ machineNo }
                />
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="timeMin">Time (Min)</label>
                <input
                  className="form-control"
                  min="1"
                  name="timeMin"
                  required
                  onChange={ handleInputChange }
                  placeholder="Time (Min)"
                  type="number"
                  value={ timeMin }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  className="form-control"
                  name="description"
                  required
                  onChange={ handleInputChange }
                  placeholder="Description"
                  type="text"
                  value={ description }
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

export default TSNUModal
