import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';

const data = [
  { name: 'A', value: 10000 },
  { name: 'B', value: 2000 },
  { name: 'C', value: 3000 },
  { name: 'D', value: 4000 },
  { name: 'E', value: 5000 },
  { name: 'F', value: 6000 },
  { name: 'G', value: 7000 },
  { name: 'J', value: 8000 },
    { name: 'K', value: 9000 },
   { name: 'L', value: 8000 },
];
const COLORS = ['#ffad90','#fed057', '#ffd8d0', '#fd9498', '#c5baff', '#6e78e8', '#4a56e2', '#81e1ff', '#24cca7', '#00ad84',];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label value="Ваш Баланс" position="center" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
