import React from "react";
import { Link } from "react-router-dom";
import { OrganizerDashboard } from "../pages/OrganizerDashboard";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <Link to="/" className="logo">
        <img src="/ArtsHub.png" alt="Artshub Logo" className="h-8" />
      </Link>

      <nav className="nav-menu">
        <ul className="flex space-x-6">
          <li>
            <Link to="/events" className="text-gray-700 hover:text-gray-900">
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/OrganizerDashboard"
              className="text-gray-700 hover:text-gray-900"
            >
              Organizers
            </Link>
          </li>
          <li>
            <Link to="/students" className="text-gray-700 hover:text-gray-900">
              Students
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
