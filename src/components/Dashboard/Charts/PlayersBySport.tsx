import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface StudentData {
  sport: string;
  players: number;
}

const PlayersBySport = () => {
  const [studentData, setStudentData] = useState<StudentData[]>([]);

  // Define a palette of colors
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57', '#a4de6c', '#8dd1e1'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://vision-2036-backend.onrender.com/api/students'); // Replace with your API URL

        // Iterate through players and count based on sportsCategory
        const playerData: { [key: string]: number } = {};
        response.data.forEach((player: any) => {
          const sport = player.sportsCategory;
          if (playerData[sport]) {
            playerData[sport] += 1;
          } else {
            playerData[sport] = 1;
          }
        });

        const formattedData = Object.keys(playerData).map(sport => ({
          sport,
          players: playerData[sport]
        }));
        setStudentData(formattedData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">Players per Sport</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={studentData} margin={{ top: 20, right: 20, left: 10, bottom: 40 }}>
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
          <Bar dataKey="players">
            {studentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlayersBySport;
