import { put, call, select } from 'redux-saga/effects';
import isError from 'lodash/isError';

import { fetchUrl } from '../../utils/network';

import { CONFIG } from '../../config';
import { HTTP_METHODS } from '../../constants';

import {
  contactsLoadSuccess,
  contactsLoadFailure,
  contactDeleteSuccess,
  contactDeleteFailure,
  contatsLoadRequest,
} from './actions';

export function* watchContactsLoadRequest(action) {
  // Building headers and url
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('cache-control', 'no-cache');
  const params = {
    method: HTTP_METHODS.GET,
    headers,
  };
  const url = `${CONFIG.API.CONTACTS}?_sort=lastName&_order=${action.order}&lastName_like=${action.search}`;
  const contacts = yield call(
    fetchUrl,
    url,
    params,
  );
  // Dispatch error if needed
  if (isError(contacts)) {
    yield put(contactsLoadFailure(contacts));
    return;
  }
  // Dispatch success and new contacts
  yield put(contactsLoadSuccess(contacts));
}

export function* watchContactDeleteRequest(action) {
  // Building headers and url
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const params = {
    method: HTTP_METHODS.DELETE,
    headers,
  };
  const url = `${CONFIG.API.CONTACTS}${action.id}`;
  const response = yield call(
    fetchUrl,
    url,
    params,
  );
  // Dispatch error if needed
  if (isError(response)) {
    yield put(contactDeleteFailure(response));
    return;
  }
  // Dispatch success and fetch contacts to ensure sync w/ backend
  const { order, search } = (yield select()).directoryReducer;
  yield put(contactDeleteSuccess());
  yield put(contatsLoadRequest(order, search));
}
