import * as ActionType from '../actions/actionsType';

export default (state = {}, payload) => {
  switch (payload.type) {
    case ActionType.DEMO_TYPE2:
      return {
        ...state,
        testDemo: 'TestDemo',
      };
    default:
      return state;
  }
};
