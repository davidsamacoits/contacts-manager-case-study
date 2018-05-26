import { fork } from 'redux-saga/effects';

import contactSaga from '../../services/contactService';
import directorySaga from '../../services/directoryService';

export default function* root() {
  yield [
    contactSaga,
    directorySaga,
  ].map(saga => fork(saga));
}
