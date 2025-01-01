import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface InstitutionData {
  name: string;
  value: number;
}

const PlayersByState = () => {
  const [institutionData, setInstitutionData] = useState<InstitutionData[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vision-2036-backend.onrender.com/api/institutions'); // Replace with your API URL
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
  console.log(institutionData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Institution Distribution</h3>
      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            data={institutionData}
            dataKey="value"
            nameKey="name"
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
};

export default PlayersByState;
