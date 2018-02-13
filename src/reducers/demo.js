import _ from 'lodash';
import * as ActionType from '../actions/actionsType';

export default (state = {}, payload) => {
  switch (payload.type) {
    case ActionType.DEMO_TYPE1:
      return {
        ...state,
        demoTest: !_.isEmpty(state.demoTest) ? state.demoTest + 1 : 'test',
      };
    default:
      return state;
  }
};
