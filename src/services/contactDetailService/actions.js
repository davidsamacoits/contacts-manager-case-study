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
