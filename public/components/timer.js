import React from 'react';
import { Redux , createStore } from 'redux';
import { connect } from 'react-redux'
import { createAction } from 'redux-actions';

const oneUp = createAction('INCREMENT');
const twoUp = createAction('ADDTWO');

const Counter = React.createClass({
  addOne() {
    const { dispatch } = this.props;
    dispatch(oneUp());
  },
  addTwo() {
    const { dispatch } = this.props;
    dispatch(twoUp());
  },
  render() {
    return (
  <div>
    <h1>結果 = {this.props.value}</h1>
    <button onClick={this.addOne}> +1 </button>
    <button onClick={this.addTwo}> +2 </button>
  </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const Timer = connect(
  mapStateToProps
)(Counter);

export default Timer
