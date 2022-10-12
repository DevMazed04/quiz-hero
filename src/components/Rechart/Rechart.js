import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

// const Rechart = ({ topic }) => {
const Rechart = (props) => {
   console.log('props:', props)
   const { total } = props.topic;
   console.log('total:', total)
   return (
      <div>
         <LineChart width={600} height={300} data={props.topics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey={total} stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
         </LineChart>
      </div>
   );
};

export default Rechart;