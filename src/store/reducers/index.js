import { combineReducers } from 'redux';

import authReducer from './auth';
import CustomReducer from './custom';
import taskReducer from './task';

export default combineReducers({
  auth: authReducer,
  task: taskReducer,
  custom: CustomReducer,
});
