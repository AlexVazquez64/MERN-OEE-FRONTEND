import { types } from '../../types/types';

const initialState = {
  modalOpen: false,
  events: [
    {
      id: new Date().getTime(),
      processName: 'XYZ',
      processCustomer: 'GM',
      processProgramName: 'PruebaProgramName',
      noOfMachinesPerProcess: 5,
      tacTime: 60,
      user: {
        _id: new Date().getTime(),
        name: 'Alex'
      }
    }
  ],
  activeEvents: null
}

export const overallInformationReducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case types.setupOverallInformationOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.setupOverallInformationCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.setupOverallInformationSetActive:
      return {
        ...state,
        activeEvents: action.payload
      }

    case types.setupOverallInformationClearActive:
      return {
        ...state,
        activeEvents: null
      }

    case types.setupOverallInformationAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.setupOverallInformationUpdate:
      return {
        ...state,
        events: state.events.map(
          p => ( p.id === action.payload.id ) ? action.payload : p
        )
      }

    case types.setupOverallInformationDelete:
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