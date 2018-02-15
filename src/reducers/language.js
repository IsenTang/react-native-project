import * as ActionType from '../actions/actionsType';

export default (state = {}, payload) => {
  switch (payload.type) {
    case ActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };
    default:
      return state;
  }
};
