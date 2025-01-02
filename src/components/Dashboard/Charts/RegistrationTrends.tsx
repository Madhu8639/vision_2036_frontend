
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const trendData = [
  { month: 'Jan', players: 300 },
  { month: 'Feb', players: 400 },
  { month: 'Mar', players: 500 },
  { month: 'Apr', players: 650 },
];

const RegistrationTrends = () => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold mb-4">Registration Trends</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={trendData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12 }} 
        />
        <YAxis 
          tick={{ fontSize: 12 }} 
          label={{
            value: 'Players',
            angle: -90,
            position: 'insideLeft',
            dy: -10, // Adjust label distance
            style: { fontSize: 12, textAnchor: 'middle' },
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="players" stroke="#ffc658" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RegistrationTrends;
