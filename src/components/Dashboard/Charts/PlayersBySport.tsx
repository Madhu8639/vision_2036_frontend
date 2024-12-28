import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const playerData = [
  { sport: 'Cricket', players: 150 },
  { sport: 'Basketball', players: 120 },
  { sport: 'Table Tennis', players: 80 },
  { sport: 'Football', players: 200 },
];

const PlayersBySport = () => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold mb-4">Players per Sport</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={playerData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="sport" 
          tick={{ fontSize: 10 }} 
          angle={-25} 
          textAnchor="end" 
        />
        <YAxis tick={{ fontSize: 10 }} />
        <Tooltip />
        <Legend />
        <Bar  dataKey="players" fill="#3B82F6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default PlayersBySport;
