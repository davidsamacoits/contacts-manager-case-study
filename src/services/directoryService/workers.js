import { put, select } from 'redux-saga/effects';

import { ORDER } from '../../constants';
import { sortDesc, sortAsc } from '../../utils/helpers';

import { contactsUpdated, contactsLoadRequest } from '../contactService/actions';

export function* watchChangeOrder(action) {
  const { contacts } = (yield select()).contactReducer;
  const contactsSorted = (action.order === ORDER.DESC)
    ? contacts.sort(sortDesc)
    : contacts.sort(sortAsc);
  yield put(contactsUpdated(contactsSorted));
}

export function* watchSearchContact() {
  const { order, search } = (yield select()).directoryReducer;
  // Could be optimized to avoid a netork call each time
  yield put(contactsLoadRequest(order, search));
}
