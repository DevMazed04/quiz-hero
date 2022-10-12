import React from 'react';
import './RechartTwo.css';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend
} from "recharts";

const X = (props) => {
   return (
      <div className='rechart-two'>
         <BarChart
            width={360}
            height={300}
            data={props.topics}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
         </BarChart>
      </div>
   );
};

export default X;