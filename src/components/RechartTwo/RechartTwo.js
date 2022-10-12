import React from 'react';
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
      <BarChart
         width={400}
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
   );
};

export default X;