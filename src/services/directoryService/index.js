import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { watchChangeOrder } from './workers';

export default function* rootSaga() {
  yield takeLatest(
    actionTypes.DIRECTORY_CHANGE_ORDER,
    watchChangeOrder,
  );
}
