import React from 'react';
import Timer from './timer';

export default React.createClass({
  render() {
    return (
      <div className='react--main'>
      <h1>Hello Timer</h1>
        <Timer></Timer>
      </div>
    );
  }
});
