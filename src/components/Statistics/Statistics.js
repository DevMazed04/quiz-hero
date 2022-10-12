import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
   const topicsData = useLoaderData();
   const topics = topicsData.data;
   // const { total } = topics;
   // console.log('total:', total)
   // console.log('Statopics:', topics)
   return (
      <div>
         <h2 className='mt-5'>Statistics</h2>
         {
            topics.map(topic => <Rechart
               key={topic.id}
               topic={topic}
               topics={topics}>
            </Rechart>)
         }
      </div >
   );
};

export default Statistics;