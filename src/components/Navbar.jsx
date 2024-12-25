import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              AI Vision Hub 
            </span>
          </Link>
          
          <div className="flex space-x-4">
            <NavLink to="/" active={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/object-detection" active={location.pathname === "/object-detection"}>
              Object Detection
            </NavLink>
            <NavLink to="/face-detection" active={location.pathname === "/face-detection"}>
              Face Detection
            </NavLink>
            <NavLink to="/image-classification" active={location.pathname === "/image-classification"}>
              Classification
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${active 
          ? 'bg-gray-800 text-white' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
    >
      {children}
    </Link>
  );
}

export default Navbar;