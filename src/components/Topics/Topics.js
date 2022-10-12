import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
   const topicsData = useLoaderData();
   const topics = topicsData.data;
   console.log('topics.js:', topics);

   return (
      <div>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mx-auto mt-5 mb-5 topics">
            {
               topics.map(topic => <Topic
                  key={topic.id}
                  topic={topic}>
               </Topic>)
            }
         </div>
      </div>
   );
};

export default Topics;