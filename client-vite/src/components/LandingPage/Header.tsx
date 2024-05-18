// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Brand</a>
        </div>
        <nav className="flex space-x-6 text-gray-600">
          <a
            href="#"
            className="bg-red-100 py-2 px-1 hover:bg-red-500 hover:text-white "
          >
            Home
          </a>
          <a
            href="#"
            className="bg-red-100 py-2 px-1 hover:bg-red-500 hover:text-white "
          >
            About
          </a>
          <a
            href="#"
            className="bg-red-100 py-2 px-1 hover:bg-red-500 hover:text-white "
          >
            Services
          </a>
          <a
            href="#"
            className="bg-red-100 py-2 px-1 hover:bg-red-500 hover:text-white "
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            Join
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
