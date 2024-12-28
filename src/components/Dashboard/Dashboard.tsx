import StatCard from './StatCard';
import PlayersBySport from './Charts/PlayersBySport';
import PlayersByState from './Charts/PlayersByState';
import RegistrationTrends from './Charts/RegistrationTrends';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Active Players" value="550" color="bg-indigo-500" />
        <StatCard title="Institutions" value="90" color="bg-blue-500" />
        <StatCard title="Registered Players" value="850" color="bg-violet-500" />
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