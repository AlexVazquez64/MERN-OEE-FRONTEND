import { types } from '../../types/types';

const initialState = {
  modalOpen: false,
  events: [
    {
      id: new Date().getTime(),
      trafficLightColor: 'Verde',
      oeeMin: 90,
      oeeMax: 100,
      timeOut: 300,
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

export const alertCriteriaReducer = ( state = initialState, action ) => {

  switch ( action.type  ) {
    case types.setupAlertCriteriaOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.setupAlertCriteriaCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.setupAlertCriteriaSetActive:
      return {
        ...state,
        activeEvents: action.payload
      }

    case types.setupAlertCriteriaClearActive:
      return {
        ...state,
        activeEvents: null
      }

    case types.setupAlertCriteriaAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.setupAlertCriteriaUpdate:
      return {
        ...state,
        events: state.events.map(
          p => ( p.id === action.payload.id ) ? action.payload : p
        )
      }

    case types.setupAlertCriteriaDelete:
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