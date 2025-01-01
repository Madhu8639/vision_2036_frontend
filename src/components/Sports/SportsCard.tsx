import React from 'react';
import { Link } from 'react-router-dom';

interface SportCardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
}

const SportCard: React.FC<SportCardProps> = ({ title, description, link, bgColor }) => {
  return (
    <a href={`https://en.wikipedia.org/wiki/${title}`} className="block transform transition-all hover:scale-105">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
        <div className={`h-2 ${bgColor}`} />
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default SportCard;