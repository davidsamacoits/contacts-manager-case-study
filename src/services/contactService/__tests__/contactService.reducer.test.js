import contactDetailServiceReducer, { initialState } from '../reducer';
import testReducer from '../../../utils/testReducer';

import {
  contactsUpdated,
  contactDeleteRequest,
  contactDeleteSuccess,
  contactDeleteFailure,
  contactsLoadRequest,
  contactsLoadSuccess,
  contactsLoadFailure,
} from '../actions';

testReducer(contactDetailServiceReducer)
  .initialState()
  .expectDiff({
    contacts: [],
    isLoading: false,
    error: '',
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactsUpdated([
    { id: '1' },
    { id: '2' },
  ]))
  .expectDiff({
    contacts: [
      { id: '1' },
      { id: '2' },
    ],
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDeleteRequest('1'))
  .expectDiff({
    isLoading: true,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDeleteSuccess())
  .expectDiff({
    isLoading: false,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDeleteFailure('error'))
  .expectDiff({
    isLoading: false,
    error: 'error',
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactsLoadRequest())
  .expectDiff({
    isLoading: true,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactsLoadSuccess([
    { id: '1' },
    { id: '2' },
  ]))
  .expectDiff({
    contacts: [
      { id: '1' },
      { id: '2' },
    ],
    isLoading: false,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactsLoadFailure('error'))
  .expectDiff({
    isLoading: false,
    error: 'error',
  });
