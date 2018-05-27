import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contacts: [],
  isLoading: false,
  error: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.CONTACT_UPDATED:
      return {
        ...state,
        contacts: action.contacts,
      };
    case actionTypes.CONTACT_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CONTACT_LOAD_SUCCESS:
      return {
        ...state,
        contacts: action.contacts,
        isLoading: false,
      };
    case actionTypes.CONTACT_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionTypes.CONTACT_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CONTACT_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.CONTACT_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
