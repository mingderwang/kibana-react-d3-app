import React from 'react'
import Chart from './chart'
import Timer from './timer'
import Counter from './counter_mapping'
import Item from './test'

const App = () => {
  return (
      <div className='react--main'>
      <Item/>
      <Counter/>
      <Timer/>
      <Chart/>
      </div>
  );
};

export default App;
