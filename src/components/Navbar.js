import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/library" className="hover:text-gray-300">Library</Link></li>
          <li><Link to="/search" className="hover:text-gray-300">Search</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
