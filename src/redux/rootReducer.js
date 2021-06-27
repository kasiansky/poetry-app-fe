import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import notificationReducer from './notification/notificationReducer';
import recoverReducer from './auth/recoverReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notification: notificationReducer,
  recover: recoverReducer,
});

export default rootReducer;
