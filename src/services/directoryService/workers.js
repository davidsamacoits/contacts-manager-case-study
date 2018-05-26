import { put, call, select } from 'redux-saga/effects';
import isError from 'lodash/isError';

import { fetchUrl } from '../../utils/network';

import { CONFIG } from '../../config';
import { HTTP_METHODS, ORDER } from '../../constants';
import { sortDesc, sortAsc } from '../../utils/helpers';

import { loadContactsSuccess, loadContactsFailure } from './actions';
import { contactsUpdated } from '../contactService/actions';

export function* watchLoadContacts() {
  const { order, search } = (yield select()).directoryReducer;

  // Building headers and url
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const params = {
    method: HTTP_METHODS.GET,
    headers,
  };
  const url = `${CONFIG.API.CONTACTS}?_sort=lastName&_order=${order}&lastName_like=${search}`;

  const contacts = yield call(
    fetchUrl,
    url,
    params,
  );

  if (isError(contacts)) {
    yield put(loadContactsFailure(contacts));
    return;
  }

  // Dispatch success and new contacts
  yield put(loadContactsSuccess());
  yield put(contactsUpdated(contacts));
}

export function* watchChangeOrder(action) {
  const { contacts } = (yield select()).contactReducer;
  const contactsSorted = (action.order === ORDER.DESC)
    ? contacts.sort(sortDesc)
    : contacts.sort(sortAsc);
  yield put(contactsUpdated(contactsSorted));
}
