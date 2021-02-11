import { types } from '../../types/types';

const initialState = {
  modalOpen: false,
  events: [
    {
      id: new Date().getTime(),
      machineNo: 1,
      timeMin: 15,
      description: 'Limpieza',
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

export const tsnuReducer = ( state = initialState, action ) => {

  switch ( action.type  ) {
    case types.setupTSNUOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.setupTSNUCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.setupTSNUSetActive:
      return {
        ...state,
        activeEvents: action.payload
      }

    case types.setupTSNUClearActive:
      return {
        ...state,
        activeEvents: null
      }

    case types.setupTSNUAddNew:
      return {
        ...state,
        events: [
          ...state.events,
          action.payload
        ]
      }

    case types.setupTSNUUpdate:
      return {
        ...state,
        events: state.events.map(
          p => ( p.id === action.payload.id ) ? action.payload : p
        )
      }

    case types.setupTSNUDelete:
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