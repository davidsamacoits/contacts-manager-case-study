/* eslint-disable import/no-extraneous-dependencies */

import diff from 'object-diff';
import casual from 'casual';

const randomState = {
  email: casual.email,
  firstname: casual.first_name,
  lastname: casual.last_name,
  password: casual.password,
};

function testReducer(reducer) {
  let prevState;
  let action = {};
  let isIsolated = false;
  let isSkipped = false;
  let isTestingInitialState = false;
  let msg;

  const expectDiff = (expectedDiff) => {
    const testRunner =
      (isIsolated && test.only) || (isSkipped && test.skip) || test;

    if (isTestingInitialState) {
      testRunner('INITIAL_STATE', () => {
        const nextState = reducer(undefined, {});
        expect(nextState).toEqual(expectedDiff);
      });
    } else if (prevState) {
      testRunner(`On ${action.type}${msg ? ` (${msg})` : ''}`, () => {
        const nextState = reducer(prevState, action);
        expect(diff(prevState || {}, nextState)).toEqual(expectedDiff);
      });
    }
  };

  return {
    msg(msgStr) {
      msg = msgStr;
      return this;
    },
    only() {
      isIsolated = true;
      return this;
    },
    skip() {
      isSkipped = true;
      return this;
    },
    initialState() {
      isTestingInitialState = true;
      return this;
    },
    withState(state) {
      prevState = Object.assign({}, randomState, state);
      return this;
    },
    withAnyState() {
      prevState = randomState;
      return this;
    },
    on(trigger) {
      action = trigger;
      return this;
    },
    expectDiff,
  };
}

export default testReducer;
