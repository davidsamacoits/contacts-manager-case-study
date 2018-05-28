import * as actionTypes from './actionTypes';

export function contactDetailLoadRequest(id) {
  return {
    type: actionTypes.CONTACT_DETAIL_LOAD_REQUEST,
    id,
  };
}

export function contactDetailLoadSuccess(contact) {
  return {
    type: actionTypes.CONTACT_DETAIL_LOAD_SUCCESS,
    contact,
  };
}

export function contactDetailLoadFailure(error) {
  return {
    type: actionTypes.CONTACT_DETAIL_LOAD_FAILURE,
    error,
  };
}

export function contactDetailFormError(error) {
  return {
    type: actionTypes.CONTACT_DETAIL_ERROR_FORM,
    error,
  };
}

export function updateFieldContact(field, value) {
  return {
    type: actionTypes.CONTACT_DETAIL_UPDATE_FIELD,
    field,
    value,
  };
}

export function contactDetailReset() {
  return {
    type: actionTypes.CONTACT_DETAIL_RESET,
  };
}
