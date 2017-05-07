import React, { Component } from 'react';
import { connect } from 'react-redux'

class Timer extends Component { // ES6
// const Adder = React.createClass({ // ES5

render () {
  const { value, onIncrement, onDecrement } = this.props
  return
  <div>
    <h1>結果 = {value}</h1>
    <button onClick={onIncrement}> +1 </button>
    <button onClick={onDecrement}> +2 </button>
  </div>
 }
// }); // ES5
} // ES6
/*
 * 對應 props 到 dispatch 哪個 action
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'INCREMENT'
      })
    },
    onDecrement: () => {
      dispatch({
        type: 'ADDTWO'
      })
    }
  };
};

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
