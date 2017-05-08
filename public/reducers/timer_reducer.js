function timerReducer(state = {}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, {
        value: state.value + 1
      });
    case 'ADDTWO':
        return Object.assign({}, state, {
          value: state.value + 2
        });
    default:
      return state;
  }
}

export default timerReducer;
