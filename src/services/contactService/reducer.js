// import * as actionTypes from './actionTypes';

export const initialState = () => ({
  contacts: { hello: 'TEST' },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
