import React from 'react';
import { Link } from 'react-router-dom';

interface SportCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

const SportCard: React.FC<SportCardProps> = ({ title, icon, description, link }) => {
  return (
    <Link to={link} className="transform transition-all hover:scale-105">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-center mb-4 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
          <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SportCard;