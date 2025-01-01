import React from 'react';
import { Link } from 'react-router-dom';

interface NavLink {
  to: string;
  label: string;
}

interface NavDropdownProps {
  title: string;
  links: NavLink[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, links }) => (
  <div className="group relative z-10">
    <button className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">
      {title} ▾
    </button>
    <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-1 right-0">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors mt-0"
        >
          {label}
        </Link>
      ))}
    </div>
  </div>
);

export default NavDropdown;