import { put, call, select } from 'redux-saga/effects';
import isError from 'lodash/isError';

import { CONFIG } from '../../config';
import { HTTP_METHODS } from '../../constants';

import { loadContactsSuccess } from './actions';
import { contactsUpdated } from '../contactService/actions';

const fetchEndpoint = (url, params) => fetch(url, params)
  .then(res => res.json())
  .then((data) => {
    // put(loadContactsSuccess(data));
    console.log('>>>>>>>> data', data);
    return data;
  })
  .catch((err) => {
    console.log('>>>>>>>> err', err);
    return err;
  });

export function* watchLoadContacts(action) {
  const { order, search } = (yield select()).directoryReducer;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const params = {
    method: HTTP_METHODS.GET,
    headers,
  };
  const url = `${CONFIG.API.CONTACTS}?_sort=lastName&_order=${order}&lastName_like=${search}`;

  const contacts = yield call(
    fetchEndpoint,
    url,
    params,
  );

  if (isError(contacts)) {
    // yield put(signInFailure(transaction.message));
    return;
  }

  yield put(loadContactsSuccess());
  yield put(contactsUpdated(contacts));

  // console.log('>>>>>>>> contacts', contacts);

  // fetch(url, params)
  //   .then(res => res.json())
  //   .then((data) => {
  //     // put(loadContactsSuccess(data));
  //     console.log('>>>>>>>> data', data);
  //   })
  //   .catch((err) => {
  //     // console.log('>>>>>>>> err', err);
  //   });
}
