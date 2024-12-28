import React from 'react';
import { Cricket, Basketball, Table as TableTennisIcon, Football } from 'lucide-react';
import SportCard from './SportsCard';

const SportsCategories = () => {
  const sports = [
    {
      title: 'Cricket',
      icon: <Cricket size={48} />,
      description: 'Join our cricket programs and tournaments',
      link: '/sports/cricket'
    },
    {
      title: 'Basketball',
      icon: <Basketball size={48} />,
      description: 'Experience basketball at its finest',
      link: '/sports/basketball'
    },
    {
      title: 'Table Tennis',
      icon: <TableTennisIcon size={48} />,
      description: 'Master the art of table tennis',
      link: '/sports/table-tennis'
    },
    {
      title: 'Football',
      icon: <Football size={48} />,
      description: 'Be part of our football community',
      link: '/sports/football'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sports Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <SportCard key={sport.title} {...sport} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsCategories;