import { fork } from 'redux-saga/effects';

import contactSaga from '../../services/contactService';

export default function* root() {
  yield [
    contactSaga,
  ].map(saga => fork(saga));
}
