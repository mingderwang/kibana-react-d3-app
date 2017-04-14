function counterReducer(state = {}, action) {
  switch (action.type) {
    case 'ONE_ADD':
      return Object.assign({}, state, {
        counter: state.counter + 1
      });
    case 'TWO_ADD':
        return Object.assign({}, state, {
          counter: state.counter + 2
        });
    default:
      return state;
  }
}

export default counterReducer;
