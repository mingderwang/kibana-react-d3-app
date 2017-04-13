import React from 'react';
import { Redux , createStore } from 'redux';
import { connect } from 'react-redux'
import { createAction } from 'redux-actions';

const oneUp = createAction('INCREMENT');
const twoUp = createAction('ADDTWO');

const Counter = React.createClass({
  render() {
    return (
  <div>
    <h1>結果 = {this.props.value}</h1>
    <button onClick={this.props.onIncrement}> +1 </button>
    <button onClick={this.props.onDecrement}> +2 </button>
  </div>
    );
  }
});

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

const mapStateToProps = (...args) => {
  console.log(args[0]); // state
  return {
    value: args[0].value
  };
};

const Timer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default Timer
