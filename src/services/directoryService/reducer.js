import * as actionTypes from './actionTypes';

import { CARD_TYPES } from '../../components/cards/ContactCard/constants';
import { ORDER, PANEL_STATUS } from '../../constants';

export const initialState = () => ({
  typeCard: CARD_TYPES.BIG,
  order: ORDER.ASC,
  search: '',
  error: '',
  panelStatus: PANEL_STATUS.CLOSE,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.DIRECTORY_CHANGE_TYPE_CARD:
      return {
        ...state,
        typeCard: action.typeCard,
      };
    case actionTypes.DIRECTORY_CHANGE_ORDER:
      return {
        ...state,
        order: action.order,
      };
    case actionTypes.DIRECTORY_TOOGLE_PANEL:
      return {
        ...state,
        panelStatus: state.panelStatus === PANEL_STATUS.OPEN ? PANEL_STATUS.CLOSE : PANEL_STATUS.OPEN,
      };
    default:
      return state;
  }
};
