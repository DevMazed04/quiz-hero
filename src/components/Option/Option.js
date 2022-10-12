import React from 'react';
import './Option.css';
import CheckAnswer from '../CheckAnswer/CheckAnswer';

const Option = ({ option, correctAnswer, handleAnswer }) => {

  return (
    <div className="col">
      <div className="card border-0">
        <div className="card-body">
          {/* <div className="input-group">
            <input className="form-check-input mt-0" type="radio" value="" />
          </div> */}

          <CheckAnswer
            option={option}
            correctAnswer={correctAnswer}
            handleAnswer={handleAnswer}>
          </CheckAnswer>
        </div>
      </div>
    </div>
  );
};

export default Option;