import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell size={32} />
            <span className="text-2xl font-bold">Sports S3</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <div className="group relative">
              <button className="py-2">Institutions ▾</button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-1">
                <Link to="/institutions/register" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Register</Link>
                <Link to="/institutions/signin" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Sign In</Link>
              </div>
            </div>
            
            <div className="group relative">
              <button className="py-2">Students ▾</button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-1">
                <Link to="/students/register" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Register</Link>
                <Link to="/students/signin" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">Sign In</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;