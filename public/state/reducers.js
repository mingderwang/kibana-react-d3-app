import value from '../reducers/timer_reducer';
import counter_state from '../reducers/counter_reducer';
import reducer from '../lib/reducer';
import { combineReducers } from 'redux';

// reducer name is the name in store.getStore()
export default combineReducers({
  value,
  counter_state,
  reducer
});
