import React from 'react';
import Question from '../Question/Question';
import './TopicDetail.css';

const TopicDetail = ({ topicDetails }) => {
   // console.log('topicDetails.js:', topicDetails)
   const { name, questions } = topicDetails;
   // console.log('questions:', questions)

   return (
      <div>
         <h3 className='mt-5 mb-5'>Quiz of {name}</h3>

         <div className="row row-cols-1 row-cols-sm-1 g-5 question-div mx-auto">
            {
               questions.map((question, index) => <Question
                  key={question.id}
                  question={question}
                  index={index}>
               </Question>)
            }
         </div>
      </div>
   );
};

export default TopicDetail;