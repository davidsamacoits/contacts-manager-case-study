import * as actionTypes from './actionTypes';

import { CARD_TYPES } from '../../components/cards/ContactCard/constants';
import { ORDER } from '../../constants';

export const initialState = () => ({
  typeCard: CARD_TYPES.BIG,
  order: ORDER.ASC,
  search: '',
  isLoading: false,
  error: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.DIRECTORY_CHANGE_TYPE_CARD:
      return {
        ...state,
        typeCard: action.typeCard,
      };
    case actionTypes.DIRECTORY_LOAD_CONTACTS:
      return {
        ...state,
        isLoading: true,
        order: action.order ? action.order : state.order,
        search: action.search ? action.search : state.search,
      };
    case actionTypes.DIRECTORY_LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.DIRECTORY_LOAD_CONTACTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
