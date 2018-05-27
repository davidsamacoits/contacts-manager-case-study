import * as actionTypes from './actionTypes';

export function contactsUpdated(contacts) {
  return {
    type: actionTypes.CONTACT_UPDATED,
    contacts,
  };
}

export function contactDeleteRequest(id) {
  return {
    type: actionTypes.CONTACT_DELETE_REQUEST,
    id,
  };
}

export function contactDeleteSuccess() {
  return {
    type: actionTypes.CONTACT_DELETE_SUCCESS,
  };
}

export function contactDeleteFailure(error) {
  return {
    type: actionTypes.CONTACT_DELETE_FAILURE,
    error,
  };
}

export function contactsLoadRequest(order, search) {
  return {
    type: actionTypes.CONTACT_LOAD_REQUEST,
    order,
    search,
  };
}

export function contactsLoadSuccess(contacts) {
  return {
    type: actionTypes.CONTACT_LOAD_SUCCESS,
    contacts,
  };
}

export function contactsLoadFailure(error) {
  return {
    type: actionTypes.CONTACT_LOAD_FAILURE,
    error,
  };
}
