import React from 'react';
import Question from '../Question/Question';

const TopicDetail = ({ topicDetails }) => {
   // console.log('topicDetails.js:', topicDetails)
   const { name, questions } = topicDetails;

   return (
      <div>
         <h3 className='mt-5 mb-5'>Quiz of {name}</h3>
         <h4> {
            questions.map(question => <Question
               key={question.id}
               question={question}
            >
            </Question>)
         }</h4>
      </div>
   );
};

export default TopicDetail;