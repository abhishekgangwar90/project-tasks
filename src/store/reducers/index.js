import { combineReducers } from 'redux';

import authReducer from './auth';
import filterReducer from './filter';
import taskReducer from './task';

export default combineReducers({
  auth: authReducer,
  task: taskReducer,
  filter: filterReducer,
});
