import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Rechart.css';

const Rechart = (props) => {
   return (
      <div className='mt-5 mb-5 rechart'>
         <LineChart width={330} height={300} data={props.topics} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
         </LineChart>
      </div>
   );
};

export default Rechart;