import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import {
  setupAlertCriteriaAddNew,
  setupAlertCriteriaClearActive,
  setupAlertCriteriaCloseModal,
  setupAlertCriteriaUpdate,
} from '../../../actions/alertCriteriaAction';

import { customStyles } from '../../../helpers/center-modal-styles';
import { useForm } from '../../../hooks/useForm';

import '../../../styles/components/setup/_modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const AlertCriteriaModal = ( props ) => {

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
    trafficLightColor,
    oeeMin,
    oeeMax,
    timeOut,
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
    dispatch( setupAlertCriteriaCloseModal() );
    dispatch( setupAlertCriteriaClearActive() );
  }

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    
      if ( activeEvents ) {
        dispatch( setupAlertCriteriaUpdate({
          ...formValues,
          machineByProcess: {
            ...rest.machineByProcess,
            machineName
          }
        }) );
      } else {
        dispatch( setupAlertCriteriaAddNew({
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
          <h3 className="auth__title">{ ( activeEvents ) ? `Edit AlertCriteria`  : `New AlertCriteria` }</h3>
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
              <label htmlFor="trafficLightColor">Traffic Light Color</label>
                <input
                  className="form-control"
                  min="1"
                  name="trafficLightColor"
                  required
                  onChange={ handleInputChange }
                  placeholder="Traffic Light Color"
                  type="text"
                  value={ trafficLightColor }
                />
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="oeeMin">OEE Min</label>
                <input
                  className="form-control"
                  min="1"
                  max="100"
                  name="oeeMin"
                  required
                  onChange={ handleInputChange }
                  placeholder="OEE Min"
                  type="number"
                  value={ oeeMin }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="oeeMax">OEE Max</label>
                <input
                  className="form-control"
                  min="1"
                  max="100"
                  name="oeeMax"
                  required
                  onChange={ handleInputChange }
                  placeholder="OEE Max"
                  type="number"
                  value={ oeeMax }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="timeOut">Time-Out</label>
                <input
                  className="form-control"
                  min="1"
                  name="timeOut"
                  required
                  onChange={ handleInputChange }
                  placeholder="Time-Out"
                  type="number"
                  value={ timeOut }
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

export default AlertCriteriaModal
