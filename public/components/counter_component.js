import React, { Component } from 'react'
import PropTypes from 'prop-types'

const counter_component = class Counter extends Component { // ES6
// const Adder = React.createClass({ // ES5

  render() {
    const { counter_state, add, sub } = this.props
    return (
      <div className="counter">
        <h1>Counter <strong>{counter_state}</strong></h1>
        <p>
          Clicking a button below will increase the counter. Adding one works be dispatching a simple object.
          Adding two works by dispatching a function, which dispatches two of the same objects as addings one.
          You can sort out how the store works by looking in <code>public/state</code>. Have fun, the rest is
          up to you.
        </p>
        <p>
          <button className="btn-success" onClick={add}>+1</button>&nbsp;
          <button className="btn-warning" onClick={sub}>-1</button>
        </p>
      </div>
    );
  }
}

counter_component.propTypes = {
  counter_state: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  sub: PropTypes.func.isRequired
}

export default counter_component;
