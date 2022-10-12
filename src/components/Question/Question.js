import React from 'react';
import Option from '../Option/Option';
import ViewAnswer from '../ViewAnswer/ViewAnswer';
import './Question.css';

const Question = (props) => {
  let { question, options, correctAnswer } = props.question;
  question = question.replaceAll("<p>", "");
  question = question.replaceAll("</p>", " ");

  const showAnswer = (correctAnswer) => {
    // console.log(correctAnswer);
  }

  const handleAnswer = (option, correctAnswer) => {
    console.log('option:', option);
    console.log('correctAnswer:', correctAnswer);

    if (option === correctAnswer) {
      console.log('correct');
      alert('correct');
    }
    else {
      console.log('wrong');
      alert('wrong');
    }
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

          <div className="row row-cols-1 row-cols-md-2 g-3 mt-3">
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