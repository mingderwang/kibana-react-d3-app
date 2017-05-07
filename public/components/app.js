import React from 'react';
import Chart from './chart';
import Timer from './timer';
import Counter from './counter';

const App = () => {
  return (
      <div className='react--main'>
        <Chart/>
        <Counter/>
      </div>
  );
};

export default App;
