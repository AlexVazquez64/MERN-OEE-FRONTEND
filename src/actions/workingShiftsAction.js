// Working Shifts \--- *_* ---/

import { types } from "../types/types";

export const setupWorkingShiftsOpenModal = () => ({
  type: types.setupWorkingShiftsOpenModal
});

export const setupWorkingShiftsCloseModal = () => ({
  type: types.setupWorkingShiftsCloseModal
});

export const setupWorkingShiftsSetActive = ( Event ) => ({
  type: types.setupWorkingShiftsSetActive,
  payload: Event
});

export const setupWorkingShiftsClearActive = () => ({
  type: types.setupWorkingShiftsClearActive
});

export const setupWorkingShiftsAddNew = ( Event ) => ({
  type: types.setupWorkingShiftsAddNew,
  payload: Event
});

export const setupWorkingShiftsUpdate = ( Event ) => ({
  type: types.setupWorkingShiftsUpdate,
  payload: Event
});

export const setupWorkingShiftsDelete = ( Event ) => ({
  type: types.setupWorkingShiftsDelete,
  payload: Event
});

