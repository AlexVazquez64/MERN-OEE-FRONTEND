// Machine By Process \--- *_* ---/

import { types } from "../types/types";

export const setupMachineByProcessOpenModal = () => ({
  type: types.setupMachineByProcessOpenModal
});

export const setupMachineByProcessCloseModal = () => ({
  type: types.setupMachineByProcessCloseModal
});

export const setupMachineByProcessSetActive = ( Event ) => ({
  type: types.setupMachineByProcessSetActive,
  payload: Event
});

export const setupMachineByProcessClearActive = () => ({
  type: types.setupMachineByProcessClearActive
});

export const setupMachineByProcessAddNew = ( Event ) => ({
  type: types.setupMachineByProcessAddNew,
  payload: Event
});

export const setupMachineByProcessUpdate = ( Event ) => ({
  type: types.setupMachineByProcessUpdate,
  payload: Event
});

export const setupMachineByProcessDelete = ( Event ) => ({
  type: types.setupMachineByProcessDelete,
  payload: Event
});
