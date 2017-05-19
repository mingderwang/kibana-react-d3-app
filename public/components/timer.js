import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Timer extends Component { // ES6
// const Adder = React.createClass({ // ES5

render () {
  const { value, onIncrement, onDecrement } = this.props
  return (
  <div>
    <h1>結果 = {value.value}</h1>
    <button onClick={onIncrement}> +1 </button>
    <button onClick={onDecrement}> +2 </button>
  </div>
  )
 }
// }); // ES5
} // ES6

Timer.propTypes = {
  value: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}


/*
 * 對應 props 到 dispatch 哪個 action
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch({
        type: 'ADDONE'
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
