import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contact: {},
  isLoading: false,
  error: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.CONTACT_DETAIL_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case actionTypes.CONTACT_DETAIL_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        contact: action.contact,
      };
    case actionTypes.CONTACT_DETAIL_LOAD_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.CONTACT_DETAIL_UPDATE_FIELD:
      return {
        ...state,
        contact: { ...state.contact, [action.field]: action.value },
      };
    case actionTypes.CONTACT_DETAIL_ERROR_FORM:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.CONTACT_DETAIL_RESET:
      return initialState();
    default:
      return state;
  }
};
