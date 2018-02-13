import * as ActionType from './actionsType';

export function demoAction() {
  return async (dispatch) => {
    dispatch({ type: ActionType.DEMO_TYPE1 });
    dispatch({ type: ActionType.DEMO_TYPE2 });
  };
}

export function demoAction2() {
  return async (dispatch) => {
    dispatch({ type: ActionType.DEMO_TYPE1 });
    dispatch({ type: ActionType.DEMO_TYPE2 });
  };
}
