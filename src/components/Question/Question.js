import React from 'react';
import './Question.css';
import Option from '../Option/Option';
import ViewAnswer from '../ViewAnswer/ViewAnswer';

const Question = (props) => {
  let { question, options, correctAnswer } = props.question;
  question = question.replaceAll("<p>", "");
  question = question.replaceAll("</p>", " ");

  const showAnswer = () => {
  }

  const handleAnswer = () => {
  }

  return (
    <div className="col">
      <div className="card border-0 rounded-4">
        <div className="card-body">
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className="card-title question mx-auto">Quiz-{props.index + 1}: {question}
            </h5>
            <ViewAnswer
              correctAnswer={correctAnswer}
              showAnswer={showAnswer}>
            </ViewAnswer>
          </div>

          <div className="row row-cols-1 row-cols-sm-1 g-0 mt-3">
            {
              options.map((option, index) => <Option
                key={index}
                option={option}
                correctAnswer={correctAnswer}
                handleAnswer={handleAnswer}>
              </Option>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;