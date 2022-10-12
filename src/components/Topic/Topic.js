import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ topic }) => {
  // console.log('topic.js props:', topic);
  const { id, name, logo } = topic;

  return (
    <div className="col">
      <div className="card rounded-2 border-0">
        <img src={logo} className="card-img-top  bg-dark rounded-2" alt="topic-img" />
        <div className="card-body d-flex justify-content-between align-items-center px-0 pb-0">
          <h5 className="card-title m-0 name">{name}</h5>

          <Link to={`/quiz/${id}`}>
            <button className='btn btn-sm btn-outline-primary btn-width'>
              <span className='d-flex justify-content-between'>
                <div>Start Quiz</div>
                <ChevronDoubleRightIcon className="icon-width" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;