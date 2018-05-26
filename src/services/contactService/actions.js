import * as actionTypes from './actionTypes';

export function contactsUpdated(contacts) {
  return {
    type: actionTypes.CONTACT_UPDATED,
    contacts,
  };
}
