import { types } from '../../types/types';
import moment from 'moment';

const initialState = {
  modalOpen: false,
  events: [
    {
      id: new Date().getTime(),
      shiftName: 'Primero',
      startTime: moment().format('HH:mm'),
      endTime: new moment().add( 2, 'hours' ).format('HH:mm'),
      workDays: 5,
      machineByProcess: {
        _id: new Date().getTime(),
        machineName: 'Prensa 1'
      },
      user: {
        _id: new Date().getTime(),
        name: 'Alex'
      },
    }
  ],
  activeEvents: null
}

export const workingShiftsReducer = ( state = initialState, action ) => {

  switch ( action.type  ) {
    case types.setupWorkingShiftsOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.setupWorkingShiftsCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.setupWorkingShiftsSetActive:
      return {
        ...state,
        activeEvents: action.payload
      }

    case types.setupWorkingShiftsClearActive:
      return {
        ...state,
        activeEvents: null
      }

    case types.setupWorkingShiftsAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.setupWorkingShiftsUpdate:
      return {
        ...state,
        events: state.events.map(
          p => ( p.id === action.payload.id ) ? action.payload : p
        )
      }

    case types.setupWorkingShiftsDelete:
      return {
        ...state,
        events: state.events.filter(
          p => ( p.id !== action.payload.id )
        )
      }
      
    default:
      return state;
  }
}