import StatCard from './StatCard';
import PlayersBySport from './Charts/PlayersBySport';
import PlayersByState from './Charts/PlayersByState';
import RegistrationTrends from './Charts/RegistrationTrends';
import { useEffect, useState } from 'react';
import axios from 'axios';



const Dashboard = () => {
  
  const [ institutionsNumber, setInstitutionsNumber] = useState(Number);
  const [ playersNumber, setPlayersNumber] = useState(Number);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3000/api/students'); // Replace with your API URL
        const response2 = await axios.get('http://localhost:3000/api/institutions'); // Replace with your API URL 
        setInstitutionsNumber(response2.data.length)
        setPlayersNumber(response1.data.length)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[])

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Active Players" value={playersNumber} color="bg-indigo-500" />
        <StatCard title="Institutions" value={institutionsNumber} color="bg-blue-500" />
        <StatCard title="Registered Players" value={playersNumber} color="bg-violet-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <PlayersBySport />
        <PlayersByState />
        <RegistrationTrends />
      </div>
    </div>
  );
};

export default Dashboard;