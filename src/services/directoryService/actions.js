import * as actionTypes from './actionTypes';

export function changeTypeCard(typeCard) {
  return {
    type: actionTypes.DIRECTORY_CHANGE_TYPE_CARD,
    typeCard,
  };
}
