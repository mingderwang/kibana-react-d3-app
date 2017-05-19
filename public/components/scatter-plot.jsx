import React        from 'react';
import d3           from 'd3';
import DataCircles  from './data-circles';
import XYAxis       from './x-y-axis';

const xMax   = (data)  => d3.max(data, (d) => d[0]);
const yMax   = (data)  => d3.max(data, (d) => d[1]);

const xScale = (props) => {
  const { reducer, width, padding } = props
  return d3.scale.linear()
    .domain([0, xMax(reducer.data)])
    .range([padding, width - padding * 2]);
};
const yScale = (props) => {
  const { reducer, height, padding } = props
  return d3.scale.linear()
    .domain([0, yMax(reducer.data)])
    .range([height - padding, padding]);
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return Object.assign({}, props, scales);
};

export default (props) => {
  const d3Props = marshalProps(props);
  return <svg width={d3Props.width} height={d3Props.height}>
    <DataCircles {...d3Props}/>
    <XYAxis {...d3Props}/>
  </svg>
}
