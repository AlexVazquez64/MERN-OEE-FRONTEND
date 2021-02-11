import { types } from '../../types/types';

const initialState = {
  modalOpen: false,
  events: [
    {
      id: new Date().getTime(),
      machineName: 'Prensa 1',
      tacTime: 60,
      sensorCode: 'o3kn3ln&10#',
      overallInformation: {
        _id: new Date().getTime(),
        processName: 'XYZ'
      },
      user: {
        _id: new Date().getTime(),
        name: 'Alex'
      },
    }
  ],
  activeEvents: null
}

export const machineByProcessReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.setupMachineByProcessOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.setupMachineByProcessCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.setupMachineByProcessSetActive:
      return {
        ...state,
        activeEvents: action.payload
      }

    case types.setupMachineByProcessClearActive:
      return {
        ...state,
        activeEvents: null
      }

    case types.setupMachineByProcessAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.setupMachineByProcessUpdate:
      return {
        ...state,
        events: state.events.map(
          p => ( p.id === action.payload.id ) ? action.payload : p
        )
      }

    case types.setupMachineByProcessDelete:
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