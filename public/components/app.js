import React from 'react';
import Chart from './chart';

const Comment = (props) => (
   <div className="comment">
       <h2 className="commentAuthor">
           { props.author }
       </h2>
       { props.children }
   </div>
 );

export default React.createClass({
  render() {
    return (
      <div className='react--main'>
      <Comment author="Cory">
      So, what do you think so far?
  </Comment>
      </div>
    );
  }
});
