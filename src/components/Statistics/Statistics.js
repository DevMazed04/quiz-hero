import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';
import Rechart2 from '../RechartTwo/RechartTwo';

const Statistics = () => {
   const topicsData = useLoaderData();
   const topics = topicsData.data;
   return (
      <div>
         <h2 className='mt-5'>Statistics</h2>
         <Rechart topics={topics}></Rechart>
         <Rechart2 topics={topics}></Rechart2>
      </div >
   );
};

export default Statistics;