import React from 'react';
import { selectorCategoriesSummary, selectorPeriodTotal } from 'redux/summary/summary-selectors';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';
import { useSelector } from 'react-redux';

const COLORS = [
  '#ffad90',
  '#fed057',
  '#ffd8d0',
  '#fd9498',
  '#c5baff',
  '#6e78e8',
  '#4a56e2',
  '#81e1ff',
  '#24cca7',
  '#00ad84',
];

const PieChartComponent = () => {
  const categoriesSummary = useSelector(selectorCategoriesSummary);
  const periodTotal = useSelector(selectorPeriodTotal);

  const filteredCategoriesSummary = categoriesSummary.filter(item => item.type !== 'INCOME');
  const data = filteredCategoriesSummary.map(item => ({ name: item.name, value: item.total * -1 }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label value={periodTotal} position="center" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
