import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-modal';
import TimePicker from 'react-time-picker';

import validator from 'validator';
import Swal from "sweetalert2";

import { useForm } from '../../../hooks/useForm';
import {
  setupWorkingShiftsAddNew,
  setupWorkingShiftsClearActive,
  setupWorkingShiftsCloseModal,
  setupWorkingShiftsUpdate,

} from '../../../actions/workingShiftsAction';

import { customStyles } from '../../../helpers/center-modal-styles';
import '../../../styles/components/setup/_modal.css';
import '../../../styles/components/setup/_react-time-picker.css';

const WorkingShiftsModal = ( props ) => {

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
    shiftName,
    startTime,
    endTime,
    workDays,
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
  }, [ activeEvents, setValues ]);

  const handleStartTimeChange = ( e ) => {
    // setStartValueDate( e );
    setValues({
      ...formValues,
      startTime: e
    });
  }

  const handleEndTimeChange = ( e ) => {
    // setStartValueDate( e );
    setValues({
      ...formValues,
      endTime: e
    });
  }

  const handleCloseModal = () => {
    reset();
    dispatch( setupWorkingShiftsCloseModal() );
    dispatch( setupWorkingShiftsClearActive() );
  }

  const handleSubmitForm = ( e ) => {
    e.preventDefault();

    console.log('Submited');

    if ( !validator.isInt( workDays.toString() ) ) {
      console.log('WorkDays no es un número');

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Work Days debe ser un número',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
      });
      return false;
    } else if ( workDays <= 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Work Days debe ser mayor o igual a 1',
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
      });
      return false;
    }

      if ( activeEvents ) {
        dispatch( setupWorkingShiftsUpdate({
          ...formValues,
          machineByProcess: {
            ...rest.machineByProcess,
            machineName
          }
        }) );
      } else {
        dispatch( setupWorkingShiftsAddNew({
          id: new Date().getTime(),
          ...formValues,
          machineByProcess: {
            _id: 'prensa2',
            machineName: 'Prensa 2'
          },
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
          <h3 className="auth__title">{ ( activeEvents ) ? `Edit Working Shift`  : `New Working Shift` }</h3>
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
              <label htmlFor="shiftName">Shift Name</label>
              <input
                className="form-control"
                name="shiftName"
                required
                onChange={ handleInputChange }
                placeholder="Shift Name"
                type="text"
                value={ shiftName }
              />
            </div>

            <div className="row mb-2">
              <div className="col-md-6">
                <label htmlFor="startTime">Start Time</label>
                <TimePicker
                  className="form-control"
                  format="HH:mm"
                  name="startTime"
                  onChange={ handleStartTimeChange }
                  value={ startTime }
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="endTime">End time</label>
                <TimePicker
                  className="form-control"
                  format="HH:mm"
                  name="endTime"
                  onChange={ handleEndTimeChange }
                  value={ endTime }
                />
              </div>

              <div className="col-md-6 mt-2">
                <label htmlFor="workDays">Work Days</label>
                <input
                  className="form-control"
                  min="1"
                  name="workDays"
                  onChange={ handleInputChange }
                  placeholder="Work Days"
                  type="number"
                  value={ workDays }
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

export default WorkingShiftsModal
