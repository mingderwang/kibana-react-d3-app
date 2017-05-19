import value from '../reducers/timer_reducer'
import counter_state from '../reducers/counter_reducer'
import reducer from '../lib/reducer'
import { combineReducers } from 'redux'
import page2 from '../reducers/page2_reducer'

// reducer name is the name in store.getStore()
export default combineReducers({
  counter_state,
  value,
  reducer
});
