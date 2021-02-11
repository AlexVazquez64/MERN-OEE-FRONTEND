import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { oeeReducer } from './oeeReducer';
import { uiReducer } from './uiReducer';

import { overallInformationReducer } from './setup/overallInformationReducer';
import { machineByProcessReducer } from './setup/machineByProcessReducer';
import { workingShiftsReducer } from './setup/workingShiftsReducer';
import { tsnuReducer } from './setup/tsnuReducer';
import { alertCriteriaReducer } from './setup/alertCriteriaReducer';


export const rootReducer = combineReducers({
  ui: uiReducer,
  oee: oeeReducer,
  auth: authReducer,

  overallInformation: overallInformationReducer,
  machineByProcess: machineByProcessReducer,
  workingShifts: workingShiftsReducer,
  tsnu: tsnuReducer,
  alertCriteria: alertCriteriaReducer,
  
  // TODO SETUP REDUCER
});