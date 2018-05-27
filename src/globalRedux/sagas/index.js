import { fork } from 'redux-saga/effects';

import contactSaga from '../../services/contactService';
import directorySaga from '../../services/directoryService';
import contactDetailSaga from '../../services/contactDetailService';

export default function* root() {
  yield [
    contactSaga,
    directorySaga,
    contactDetailSaga,
  ].map(saga => fork(saga));
}
