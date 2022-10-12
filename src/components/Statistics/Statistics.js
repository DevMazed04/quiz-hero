import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rechart from '../Rechart/Rechart';
import Rechart2 from '../RechartTwo/RechartTwo';
import './Statistics.css'

const Statistics = () => {
   const topicsData = useLoaderData();
   const topics = topicsData.data;
   return (
      <div className='mt-5'>
         <div className="row row-cols-1 row-cols-md-2 g-2 mx-auto w-75 rechart d-flex flex-column-reverse justify-content-center align-items-center">
            <Rechart topics={topics}></Rechart>
            <Rechart2 topics={topics}></Rechart2>
         </div>
      </div>
   );
};

export default Statistics;