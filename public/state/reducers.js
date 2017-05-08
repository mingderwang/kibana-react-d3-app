import timerReducer from '../reducers/timer_reducer';
import counter_state from '../reducers/counter_reducer';
import reducer from '../lib/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  timerReducer,
  counter_state,
  reducer
});
