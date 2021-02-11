// Overall Information \--- *_* ---/

import { types } from "../types/types";

export const setupOverallInformationOpenModal = () => ({
  type: types.setupOverallInformationOpenModal
});

export const setupOverallInformationCloseModal = () => ({
  type: types.setupOverallInformationCloseModal
});

export const setupOverallInformationSetActive = ( Event ) => ({
  type: types.setupOverallInformationSetActive,
  payload: Event
});

export const setupOverallInformationClearActive = () => ({
  type: types.setupOverallInformationClearActive
});

export const setupOverallInformationAddNew = ( Event ) => ({
  type: types.setupOverallInformationAddNew,
  payload: Event
});

export const setupOverallInformationUpdate = ( Event ) => ({
  type: types.setupOverallInformationUpdate,
  payload: Event
});

export const setupOverallInformationDelete = ( Event ) => ({
  type: types.setupOverallInformationDelete,
  payload: Event
});

