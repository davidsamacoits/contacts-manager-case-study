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
    default:
      return state;
  }
};
