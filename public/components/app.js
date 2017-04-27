import React from 'react';
import Chart from './chart';

let comments = [
    {id: 1, author: "Cory Brown", text: "My 2 scents"},
    {id: 2, author: "Jared Anderson", text: "Let me put it this way. You've heard of Socrates? Aristotle? Plato? Morons!"},
    {id: 3, author: "Matt Poulson", text: "It's just a function!"},
    {id: 4, author: "Bruce Campbell", text: "Fish in a tree? How can that be?"}
];

const CommentList = (props) => (
    <div className="commentList">
        { props.comments.map(comment => (
            <Comment author={ comment.author } key={comment.id} >
                { comment.text }
            </Comment>
        )) }
    </div>
);

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
      <CommentList comments={ comments } />
      </div>
    );
  }
});
