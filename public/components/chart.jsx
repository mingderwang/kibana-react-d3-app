import React                from 'react';
import {connect}            from 'react-redux';
import * as actionCreators  from '../lib/action-creators';
import ScatterPlot          from './scatter-plot';
import { randomizeData } from '../state/actions';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30,
};

const Chart = (props) => {
  return <div>
    <h1>Playing With React and D3</h1>
    <ScatterPlot {...props} {...styles} />
    <div className="controls">
      <button className="btn randomize" onClick={() => props.randomizeData()}>
        Randomize Data
      </button>
    </div>
  </div>
};

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer
  };
};

export default connect(mapStateToProps, actionCreators)(Chart);
