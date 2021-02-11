// TSNU \--- *_* ---/

import { types } from "../types/types";

export const setupTSNUOpenModal = () => ({
  type: types.setupTSNUOpenModal
});

export const setupTSNUCloseModal = () => ({
  type: types.setupTSNUCloseModal
});

export const setupTSNUSetActive = ( Event ) => ({
  type: types.setupTSNUSetActive,
  payload: Event
});

export const setupTSNUClearActive = () => ({
  type: types.setupTSNUClearActive
});

export const setupTSNUAddNew = ( Event ) => ({
  type: types.setupTSNUAddNew,
  payload: Event
});

export const setupTSNUUpdate = ( Event ) => ({
  type: types.setupTSNUUpdate,
  payload: Event
});

export const setupTSNUDelete = ( Event ) => ({
  type: types.setupTSNUDelete,
  payload: Event
});