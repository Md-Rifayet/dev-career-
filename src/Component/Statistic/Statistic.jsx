import React from 'react';
import './Statistic.css';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const total = data.reduce((acc, entry) => acc + entry.markes, 0);
  const percentValue = (data[index].markes / total) * 100;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${percentValue.toFixed(0)}%`}
    </text>
  );
};

const data = [
  { name: "Assignment-1", markes: 60 },
  { name: "Assignment-2", markes: 60 },
  { name: "Assignment-3", markes: 60 },
  { name: "Assignment-4", markes: 30 },
  { name: "Assignment-5", markes: 30 },
  { name: "Assignment-6", markes: 30 },
  { name: "Assignment-7", markes: 28 },
  { name: "Assignment-8", markes: 30 }
];

const Statistic = () => {
  return (
    <div className='chartParentDiv'>
  
      <div className='chartContainer'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="markes"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      
      <div className='chartContainer'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="markes"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={160}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistic;
