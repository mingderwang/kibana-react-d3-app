import React from 'react';
import { connect } from 'react-redux'

const Timer = React.createClass({
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

const mapStateToProps = (...args) => { // can replace ...args with state
  console.log(args[0]); // state
  return {
    value: args[0].value
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
