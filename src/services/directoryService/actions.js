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

export function tooglePanel() {
  return {
    type: actionTypes.DIRECTORY_TOOGLE_PANEL,
  };
}

export function closePanel() {
  return {
    type: actionTypes.DIRECTORY_CLOSE_PANEL,
  };
}

export function openPanel() {
  return {
    type: actionTypes.DIRECTORY_OPEN_PANEL,
  };
}

export function searchContact(search) {
  return {
    type: actionTypes.DIRECTORY_SEARCH,
    search,
  };
}

export function notify(notification) {
  return {
    type: actionTypes.DIRECTORY_NOTIFY,
    notification,
  };
}

export function resetNotification() {
  return {
    type: actionTypes.DIRECTORY_RESET_NOTIFICATION,
  };
}

