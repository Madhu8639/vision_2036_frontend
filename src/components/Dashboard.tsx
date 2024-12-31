import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, LineChart, Line } from 'recharts';
import { Users, Building2, UserCheck } from 'lucide-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface PlayerData {
  sport: string;
  players: number;
}

interface TrendData {
  month: string;
  players: number;
}

interface InstitutionData {
  name: string;
  value: number;
}

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
}

const playerData: PlayerData[] = [
  { sport: 'Cricket', players: 150 },
  { sport: 'Basketball', players: 120 },
  { sport: 'Table Tennis', players: 80 },
  { sport: 'Football', players: 200 },
];

const trendData: TrendData[] = [
  { month: 'Jan', players: 300 },
  { month: 'Feb', players: 400 },
  { month: 'Mar', players: 500 },
  { month: 'Apr', players: 650 },
];

const StatCard = ({ icon: Icon, title, value }: StatCardProps) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <p className="text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [institutionData, setInstitutionData] = useState<InstitutionData[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/institutions'); // Replace with your API URL
        const temp = response.data.reduce((acc: Record<string, number>, curr: { location: string }) => {
          const { location } = curr;
          acc[location] = acc[location] ? acc[location] + 1 : 1;
          return acc;
        }, {});
        const formattedData: InstitutionData[] = Object.entries(temp).map(([key, value]) => ({
          name: key,
          value: value as number,
        }));
        setInstitutionData(formattedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || 'Something went wrong');
        } else {
          setError('Something went wrong');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Users} title="Active Players" value="550" />
        <StatCard icon={Building2} title="Institutions" value="90" />
        <StatCard icon={UserCheck} title="Registered Players" value="850" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Players per Sport</h3>
          <BarChart width={300} height={300} data={playerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sport" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="players" fill="#3B82F6" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Institution Distribution</h3>
          {institutionData.length > 0 ? (
            <PieChart width={270} height={270}>
              <Pie
                data={institutionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#3B82F6"
                label
              />
              <Tooltip />
            </PieChart>
          ) : (
            <p>No data available</p>
          )}
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Registration Trends</h3>
          <LineChart width={300} height={300} data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="players" stroke="#3B82F6" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
