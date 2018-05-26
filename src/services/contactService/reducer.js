// import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contacts: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
