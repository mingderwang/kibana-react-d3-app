const initialState = { value: 0 }

function timerReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADDONE':
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
