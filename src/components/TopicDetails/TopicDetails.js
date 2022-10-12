import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetail from '../TopicDetail/TopicDetail';

const TopicDetails = () => {
   const topicDetailsData = useLoaderData();
   const topicDetails = topicDetailsData.data;
   // console.log('topicDetails.js:', topicDetails);

   return (
      <div>
         <TopicDetail
            key={topicDetails.id}
            topicDetails={topicDetails}>
         </TopicDetail>
      </div>
   );
};

export default TopicDetails;