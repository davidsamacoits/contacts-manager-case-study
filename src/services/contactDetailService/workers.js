import { put, call } from 'redux-saga/effects';
import isError from 'lodash/isError';

import { fetchUrl } from '../../utils/network';

import { CONFIG } from '../../config';
import { HTTP_METHODS } from '../../constants';

import { contactDetailLoadSuccess } from './actions';
import { openPanel } from '../directoryService/actions';

export function* watchContactDetailLoadRequest(action) {
  console.log('>>>>>>>> action', action);
  // Building headers and url
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('cache-control', 'no-cache');
  const params = {
    method: HTTP_METHODS.GET,
    headers,
  };
  const url = `${CONFIG.API.CONTACTS}${action.id}`;
  const contactDetail = yield call(
    fetchUrl,
    url,
    params,
  );
  console.log('>>>>>>>> contactDetail', contactDetail);
  // Dispatch error if needed
  if (isError(contactDetail)) {
    // yield put(contactDetailLoadFailure(contactDetail));

  }
  // Open panel for edition / detail
  yield put(openPanel());
  // Dispatch success and new contacts
  yield put(contactDetailLoadSuccess(contactDetail));
}
