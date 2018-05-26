import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { watchLoadContacts, watchChangeOrder } from './workers';

export default function* rootSaga() {
  yield takeLatest(
    actionTypes.DIRECTORY_LOAD_CONTACTS,
    watchLoadContacts,
  );
  yield takeLatest(
    actionTypes.DIRECTORY_CHANGE_ORDER,
    watchChangeOrder,
  );
}
