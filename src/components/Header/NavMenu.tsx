import React, { useState } from 'react';
import { Menu, X, ChevronDown, Building2, Users } from 'lucide-react';
import NavDropdown from './NavDropdown';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = {
    institutions: [
      { to: '/institutions/register', label: 'Register' },
      { to: '/institutions/signin', label: 'Sign In' },
    ],
    students: [
      { to: '/students/register', label: 'Register' },
      { to: '/students/signin', label: 'Sign In' },
    ],
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const DropdownMenu: React.FC<{ title: string; icon: React.ReactNode; links: { to: string; label: string }[] }> = ({
    title,
    icon,
    links,
  }) => {
    const isActive = activeDropdown === title;

    return (
      <div className="w-full">
        <button
          onClick={() => toggleDropdown(title)}
          className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isActive ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {isActive && (
          <div className="pl-4 py-2 bg-gray-50">
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="block w-full text-left px-8 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div>
        <nav className="hidden md:flex space-x-6">
          {Object.entries(navItems).map(([category, links]) => (
            <NavDropdown
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              links={links}
            />
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="relative md:hidden z-50">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
            <DropdownMenu
              title="Institutions"
              icon={<Building2 className="w-4 h-4" />}
              links={navItems.institutions}
            />
            <DropdownMenu
              title="Students"
              icon={<Users className="w-4 h-4" />}
              links={navItems.students}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default NavMenu;
