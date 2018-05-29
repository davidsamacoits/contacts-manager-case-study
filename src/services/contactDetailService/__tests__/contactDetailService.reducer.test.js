import contactDetailServiceReducer, { initialState } from '../reducer';
import testReducer from '../../../utils/testReducer';

import {
  contactDetailLoadRequest,
  contactDetailLoadSuccess,
  contactDetailLoadFailure,
  contactDetailFormError,
  updateFieldContact,
  contactDetailReset,
} from '../actions';

testReducer(contactDetailServiceReducer)
  .initialState()
  .expectDiff({
    contact: {},
    isLoading: false,
    error: '',
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDetailLoadRequest('1234567890'))
  .expectDiff({
    isLoading: true,
    error: '',
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDetailLoadSuccess({ id: '1234567890' }))
  .expectDiff({
    isLoading: false,
    contact: { id: '1234567890' },
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDetailLoadFailure('error'))
  .expectDiff({
    error: 'error',
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDetailFormError('error'))
  .expectDiff({
    error: 'error',
  });

testReducer(contactDetailServiceReducer)
  .withState({
    contact: {
      id: 'oldId',
    },
  })
  .on(updateFieldContact('id', 'newId'))
  .expectDiff({
    contact: {
      id: 'newId',
    },
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(contactDetailReset())
  .expectDiff(initialState());
