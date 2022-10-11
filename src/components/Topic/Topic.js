import React from 'react';
import './Topic.css';

const Topic = (props) => {
  const { name, logo } = props.children[1];
  // console.log(props.children[1]);

  return (
    <div className="col">
      <div className="card rounded-2 border-0">
        <img src={logo} className="card-img-top  bg-dark rounded-2" alt="topic-img" width="" />
        <div className="card-body d-flex justify-content-between align-items-center px-0 pb-0">
          <h5 className="card-title m-0 name">{name}</h5>
          <button className='btn btn-sm btn-outline-primary'>Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Topic;