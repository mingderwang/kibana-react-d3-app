import timerReducer from './timer_reducer';
import counterReducer from './counter_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  timerReducer,
  counterReducer
});
