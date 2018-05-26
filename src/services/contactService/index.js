import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import { watchConsoleLog } from './workers';

export default function* rootSaga() {
  // yield takeLatest(
  //   actionTypes.CONTACT_CONSOLE_LOG,
  //   watchConsoleLog,
  // );
}
