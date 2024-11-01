// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-sm">
//       <Link to="/" className="logo">
//         <img src="/ArtsHub.png" alt="Artshub Logo" className="h-8" />
//       </Link>

//       <nav className="nav-menu">
//         <ul className="flex space-x-6">
//           <li>
//             <Link to="/events" className="text-gray-700 hover:text-gray-900">
//               Events
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/organizer-login"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Organizers
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/student-login"
//               className="text-gray-700 hover:text-gray-900"
//             >
//               Students
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-gray-700 hover:text-gray-900">
//               About
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg">
      <Link to="/" className="logo">
        <img src="/ArtsHub.png" alt="Artshub Logo" className="h-10" />
      </Link>

      <nav className="nav-menu">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/events"
              className="relative text-gray-700 py-2 px-3 rounded transition-all duration-300 hover:text-gray-800 hover:border hover:border-yellow-500"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/organizer-login"
              className="relative text-gray-700 py-2 px-3 rounded transition-all duration-300 hover:text-gray-800 hover:border hover:border-yellow-500"
            >
              Organizers
            </Link>
          </li>
          <li>
            <Link
              to="/student-login"
              className="relative text-gray-700 py-2 px-3 rounded transition-all duration-300 hover:text-gray-800 hover:border hover:border-yellow-500"
            >
              Students
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative text-gray-700 py-2 px-3 rounded transition-all duration-300 hover:text-gray-800 hover:border hover:border-yellow-500"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
