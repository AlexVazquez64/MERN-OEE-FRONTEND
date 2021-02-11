import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';

import { useForm } from '../../../hooks/useForm';
import {
  setupOverallInformationAddNew,
  setupOverallInformationClearActive,
  setupOverallInformationCloseModal,
  setupOverallInformationUpdate,
} from '../../../actions/overallInformationAction';

import { customStyles } from '../../../helpers/center-modal-styles';
import '../../../styles/components/setup/_modal.css';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const OverallInformationModal = ( props ) => {

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
    processName,
    processCustomer,
    processProgramName,
    noOfMachinesPerProcess,
    tacTime
  } = formValues;

  useEffect(() => {
    if ( activeEvents ) {
      setValues( activeEvents );
    }
  }, [ activeEvents, setValues ])

  const handleCloseModal = () => {
    reset();
    dispatch( setupOverallInformationCloseModal() );
    dispatch( setupOverallInformationClearActive() );
  }

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    if ( activeEvents ) {
      dispatch( setupOverallInformationUpdate( formValues ) );
    } else {
      dispatch( setupOverallInformationAddNew({
        ...formValues,
        id: new Date().getTime(),
        user: {
          _id: new Date().getUTCDay().toString(),
          name: 'Alex'
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
          <h3 className="auth__title">{ ( activeEvents ) ? `Edit Process`  : `New Process` }</h3>
          <hr/>
          <form
            onSubmit={ handleSubmitForm }
            className="animate__animated animate__fadeIn animate__faster"
          >
            <div className="mb-2">
              <label htmlFor="processName">Name</label>
              <input
                className="form-control"
                name="processName"
                required
                onChange={ handleInputChange }
                placeholder="Name"
                type="text"
                value={ processName }
              />
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="processCustomer">Customer</label>
                <input
                  className="form-control"
                  name="processCustomer"
                  required
                  onChange={ handleInputChange }
                  placeholder="Customer"
                  type="text"
                  value={ processCustomer }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="processProgramName">Program Name</label>
                <input
                  className="form-control"
                  name="processProgramName"
                  required
                  onChange={ handleInputChange }
                  placeholder="Program Name"
                  type="text"
                  value={ processProgramName }
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="noOfMachinesPerProcess"># Of Machines</label>
                <input
                  className="form-control"
                  min="1"
                  name="noOfMachinesPerProcess"
                  required
                  onChange={ handleInputChange }
                  placeholder="# Of Machines"
                  type="number"
                  value={ noOfMachinesPerProcess }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="tacTime">tacTime</label>
                <input
                  className="form-control"
                  min="1"
                  name="tacTime"
                  required
                  onChange={ handleInputChange }
                  placeholder="tacTime"
                  type="number"
                  value={ tacTime }
                />
              </div>
            </div>

            <div className="d-grid gap-2">
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

export default OverallInformationModal
