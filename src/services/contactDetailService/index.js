import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { watchContactDetailLoadRequest } from './workers';

export default function* rootSaga() {
  yield takeLatest(
    actionTypes.CONTACT_DETAIL_LOAD_REQUEST,
    watchContactDetailLoadRequest,
  );
}
