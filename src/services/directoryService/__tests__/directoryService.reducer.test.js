import contactDetailServiceReducer, { initialState } from '../reducer';
import testReducer from '../../../utils/testReducer';

import { CARD_TYPES } from '../../../components/cards/ContactCard/constants';
import { ORDER, PANEL_STATUS } from '../../../constants';

import {
  changeTypeCard,
  changeOrder,
  tooglePanel,
  closePanel,
  openPanel,
  searchContact,
} from '../actions';

testReducer(contactDetailServiceReducer)
  .initialState()
  .expectDiff({
    typeCard: CARD_TYPES.BIG,
    order: ORDER.ASC,
    search: '',
    error: '',
    panelStatus: PANEL_STATUS.CLOSE,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(changeTypeCard(CARD_TYPES.BIG))
  .expectDiff({
    typeCard: CARD_TYPES.BIG,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(changeOrder(ORDER.ASC))
  .expectDiff({
    order: ORDER.ASC,
  });

testReducer(contactDetailServiceReducer)
  .withState({
    panelStatus: PANEL_STATUS.CLOSE,
  })
  .on(tooglePanel())
  .expectDiff({
    panelStatus: PANEL_STATUS.OPEN,
  });

testReducer(contactDetailServiceReducer)
  .withState({
    panelStatus: PANEL_STATUS.OPEN,
  })
  .on(tooglePanel())
  .expectDiff({
    panelStatus: PANEL_STATUS.CLOSE,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(closePanel())
  .expectDiff({
    panelStatus: PANEL_STATUS.CLOSE,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(openPanel())
  .expectDiff({
    panelStatus: PANEL_STATUS.OPEN,
  });

testReducer(contactDetailServiceReducer)
  .withAnyState()
  .on(searchContact('search'))
  .expectDiff({
    search: 'search',
  });
