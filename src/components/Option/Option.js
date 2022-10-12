import React from 'react';
import './Option.css';
import CheckAnswer from '../CheckAnswer/CheckAnswer';

const Option = ({ option, correctAnswer, handleAnswer }) => {

  return (
    <div className="col">
      <div className="card p-0 rounded-4 option">
        <div className="card-body">
          {/* <div className="input-group">
            <input className="form-check-input mt-0" type="radio" value="" />
          </div> */}

          {/* <p className="card-text pe-5" onClick={() => handleAnswer(option, correctAnswer)}>{option}</p> */}

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