import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';
import styles from './chart-diagram.module.scss';

const PieChartComponent = ({ data = [], totalSum = '' }) => {
  
  return (
    <ResponsiveContainer width={288} height={288} >
      <PieChart >
        <Pie  data={data}  cx={140} cy={140} innerRadius={100} outerRadius={143} fill="#8884d8" dataKey="value">
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
          <Label className={styles.label} fill="#000000"  value={Number(totalSum).toFixed(2)} position="center" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
)
};

export default PieChartComponent;
