import * as ActionType from './actionsType';


export function changeLanguageAction(data) {
  return async (dispatch) => {
    dispatch({ type: ActionType.CHANGE_LANGUAGE, language: data });
  };
}

export function demoAction2() {
  return async (dispatch) => {
    dispatch({ type: ActionType.CHANGE_LANGUAGE_SUCCESS });
  };
}
