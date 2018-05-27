import * as actionTypes from './actionTypes';

import { CARD_TYPES } from '../../components/cards/ContactCard/constants';
import { ORDER } from '../../constants';

export const initialState = () => ({
  typeCard: CARD_TYPES.BIG,
  order: ORDER.ASC,
  search: '',
  error: '',
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
    default:
      return state;
  }
};
