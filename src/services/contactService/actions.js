import * as actionTypes from './actionTypes';

export function consoleLog() {
  return {
    type: actionTypes.CONTACT_CONSOLE_LOG,
    hello: 'TEST',
  };
}
