import { CARD_TYPES } from '../../components/cards/ContactCard/constants';
import * as actionTypes from './actionTypes';

export const initialState = () => ({
  typeCard: CARD_TYPES.BIG,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.DIRECTORY_CHANGE_TYPE_CARD:
      return {
        ...state,
        typeCard: action.typeCard,
      };
    default:
      return state;
  }
};
