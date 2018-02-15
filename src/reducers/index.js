import { combineReducers } from 'redux';
import demo from './demo';
import demo2 from './demo2';

const rootReducer = combineReducers({ demo, demo2 });

export default rootReducer;
