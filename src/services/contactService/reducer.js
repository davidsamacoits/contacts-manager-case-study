import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contacts: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.CONTACT_UPDATED:
      return {
        ...state,
        contacts: action.contacts,
      };
    default:
      return state;
  }
};
