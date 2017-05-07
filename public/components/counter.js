import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { oneUp, twoUp } from 'plugins/kibana-react-d3-app/state/actions';

class Counter extends Component { // ES6
// const Adder = React.createClass({ // ES5

  render() {
    const { counter, addOne, addTwo } = this.props
    return (
      <div className="jumbotron">
        <h1>Counter <strong>{counter}</strong></h1>
        <p>
          Clicking a button below will increase the counter. Adding one works be dispatching a simple object.
          Adding two works by dispatching a function, which dispatches two of the same objects as addings one.
          You can sort out how the store works by looking in <code>public/state</code>. Have fun, the rest is
          up to you.
        </p>
        <p>
          <button className="btn-success" onClick={addOne}>+1</button>&nbsp;
          <button className="btn-warning" onClick={addTwo}>+2</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => {
      dispatch(oneUp())
    },
    addTwo: () => {
      dispatch(twoUp())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
