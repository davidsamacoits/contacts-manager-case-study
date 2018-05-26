import * as actionTypes from './actionTypes';

export function changeTypeCard(typeCard) {
  return {
    type: actionTypes.DIRECTORY_CHANGE_TYPE_CARD,
    typeCard,
  };
}

export function changeOrder(order) {
  return {
    type: actionTypes.DIRECTORY_CHANGE_ORDER,
    order,
  };
}

export function loadContacts(order, search) {
  return {
    type: actionTypes.DIRECTORY_LOAD_CONTACTS,
    order,
    search,
  };
}

export function loadContactsSuccess() {
  return {
    type: actionTypes.DIRECTORY_LOAD_CONTACTS_SUCCESS,
  };
}

export function loadContactsFailure(error) {
  return {
    type: actionTypes.DIRECTORY_LOAD_CONTACTS_FAILURE,
    error,
  };
}
