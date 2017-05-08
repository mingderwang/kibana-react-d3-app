import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter_action'
import Counter from './counter_component'

const mapStateToProps = (state) => {
  return {
    counter_state: state.counter_state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      dispatch(increment())
    },
    sub: () => {
      dispatch(decrement())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
