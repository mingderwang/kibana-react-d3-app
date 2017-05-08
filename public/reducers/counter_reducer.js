import expect from 'expect'
import { INCREMENT, DECREMENT, increment, decrement } from '../actions/counter_action'

export const initialState = 7

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
        return state - 1
    default:
      return state;
  }
}

export default counterReducer;

expect(
  counterReducer(0, increment())
).toEqual(1);

expect(
  counterReducer(1, decrement())
).toEqual(0);

console.log('counterReducer - Tests Passed!')
