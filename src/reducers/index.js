import { combineReducers } from 'redux';
import demo from './demo';
import test from './test';

const rootReducer = combineReducers({ demo, test });

export default rootReducer;
