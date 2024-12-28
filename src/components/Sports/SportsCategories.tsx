import SportCard from './SportsCard';

const SportsCategories = () => {
  const sports = [
    {
      title: 'Cricket',
      description: 'Join our cricket programs and tournaments',
      link: '/sports/cricket',
      bgColor: 'bg-indigo-500'
    },
    {
      title: 'Basketball',
      description: 'Experience basketball at its finest',
      link: '/sports/basketball',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Table Tennis',
      description: 'Master the art of table tennis',
      link: '/sports/table-tennis',
      bgColor: 'bg-violet-500'
    },
    {
      title: 'Football',
      description: 'Be part of our football community',
      link: '/sports/football',
      bgColor: 'bg-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Sports Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sports.map((sport) => (
          <SportCard key={sport.title} {...sport} />
        ))}
      </div>
    </div>
  );
};

export default SportsCategories;