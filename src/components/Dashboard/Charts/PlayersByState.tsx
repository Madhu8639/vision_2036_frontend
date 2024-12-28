import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const institutionData = [
  { state: 'Maharashtra', value: 30 },
  { state: 'Karnataka', value: 25 },
  { state: 'Delhi', value: 20 },
  { state: 'Tamil Nadu', value: 15 },
];

const PlayersByState = () => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold mb-4">Institution Distribution</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={institutionData}
          dataKey="value"
          nameKey="state"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          fill="#3B82F6"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PlayersByState;
