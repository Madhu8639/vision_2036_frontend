import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, color }) => (
  <div className={`bg-white rounded-xl shadow-md overflow-hidden`}>
    <div className={`h-2 ${color}`} />
    <div className="p-4">
      <h3 className="text-2xl font-bold text-center mb-1">{value}</h3>
      <p className="text-gray-600 text-sm text-center">{title}</p>
    </div>
  </div>
);

export default StatCard;