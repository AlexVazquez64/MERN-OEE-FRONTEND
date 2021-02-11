// Alert Criteria \--- *_* ---/

import { types } from "../types/types";

export const setupAlertCriteriaOpenModal = () => ({
  type: types.setupAlertCriteriaOpenModal
});

export const setupAlertCriteriaCloseModal = () => ({
  type: types.setupAlertCriteriaCloseModal
});

export const setupAlertCriteriaSetActive = ( Event ) => ({
  type: types.setupAlertCriteriaSetActive,
  payload: Event
});

export const setupAlertCriteriaClearActive = () => ({
  type: types.setupAlertCriteriaClearActive
});

export const setupAlertCriteriaAddNew = ( Event ) => ({
  type: types.setupAlertCriteriaAddNew,
  payload: Event
});

export const setupAlertCriteriaUpdate = ( Event ) => ({
  type: types.setupAlertCriteriaUpdate,
  payload: Event
});

export const setupAlertCriteriaDelete = ( Event ) => ({
  type: types.setupAlertCriteriaDelete,
  payload: Event
});

