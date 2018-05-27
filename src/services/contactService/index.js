import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { watchContactsLoadRequest, watchContactDeleteRequest } from './workers';

export default function* rootSaga() {
  yield takeLatest(
    actionTypes.CONTACT_LOAD_REQUEST,
    watchContactsLoadRequest,
  );
  yield takeLatest(
    actionTypes.CONTACT_DELETE_REQUEST,
    watchContactDeleteRequest,
  );
}
