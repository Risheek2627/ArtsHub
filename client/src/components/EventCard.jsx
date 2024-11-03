// import React from "react";

// const EventCard = ({ image, title, date, location }) => {
//   return (
//     <div className="event-card bg-white rounded-lg shadow-md overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="event-image w-full h-48 object-cover"
//       />
//       <div className="event-details p-4">
//         <h3 className="event-title text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-600 mb-1">Date: {date}</p>
//         <p className="text-gray-600">Location: {location}</p>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// import React from "react";
// import { Link } from "react-router-dom";

// const EventCard = ({ id, image, title, date, location }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//         <div className="space-y-2">
//           <p className="text-gray-600">
//             <span className="inline-block w-5 mr-2">📅</span>
//             {date}
//           </p>
//           <p className="text-gray-600">
//             <span className="inline-block w-5 mr-2">📍</span>
//             {location}
//           </p>
//         </div>
//         <Link
//           to={`/event/${id}`}
//           className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
//         >
//           Learn More →
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

// import React, { useState } from "react";
// import RegistrationModal from "./RegistrationModal"; // Import your modal component

// const EventCard = ({ image, title, date, location, eventId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegisterClick = () => {
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <img src={image} alt={title} className="w-full h-32 object-cover" />
//       <div className="p-4">
//         <h2 className="font-bold text-lg">{title}</h2>
//         <p className="text-gray-600">{date}</p>
//         <p className="text-gray-600">{location}</p>
//         <button
//           onClick={handleRegisterClick}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Register
//         </button>
//       </div>
//       {isModalOpen && (
//         <RegistrationModal
//           eventId={eventId}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default EventCard;

// // todo after claude ai edited by chatpgt not this file given by claude ai but from chatpgt
// // EventCard.jsx
// import React, { useState } from "react";
// import RegistrationModal from "./RegistrationModal"; // Import your modal component

// const EventCard = ({ image, title, date, location, eventId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegisterClick = () => {
//     const token = localStorage.getItem("token"); // Check for token in local storage
//     if (!token) {
//       alert("Please log in to register for events"); // Alert the user if not logged in
//     } else {
//       setIsModalOpen(true); // Open modal if logged in
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <img src={image} alt={title} className="w-full h-32 object-cover" />
//       <div className="p-4">
//         <h2 className="font-bold text-lg">{title}</h2>
//         <p className="text-gray-600">{date}</p>
//         <p className="text-gray-600">{location}</p>
//         <button
//           onClick={handleRegisterClick}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Register
//         </button>
//       </div>
//       {isModalOpen && (
//         <RegistrationModal
//           eventId={eventId}
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default EventCard;

// todo let be thier this code
// import React, { useState } from "react";
// import RegistrationModal from "./RegistrationModal"; // Import your modal component

// const EventCard = ({ event }) => {
//   const { imageUrl, title, date, location, _id } = event; // Destructure the event object
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleRegisterClick = () => {
//     const token = localStorage.getItem("token"); // Check for token in local storage
//     if (!token) {
//       alert("Please log in to register for events"); // Alert the user if not logged in
//     } else {
//       setIsModalOpen(true); // Open modal if logged in
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />{" "}
//       {/* Adjusted for image property */}
//       <div className="p-4">
//         <h2 className="font-bold text-lg">{title}</h2>
//         <p className="text-gray-600">
//           {new Date(date).toLocaleDateString()}
//         </p>{" "}
//         {/* Format the date */}
//         <p className="text-gray-600">{location}</p>
//         <button
//           onClick={handleRegisterClick}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Register
//         </button>
//       </div>
//       {isModalOpen && (
//         <RegistrationModal
//           eventId={_id} // Pass the event ID to the modal
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default EventCard;

// todo
import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal"; // Import your modal component

const EventCard = ({ event }) => {
  const { imageUrl, title, date, location, _id } = event; // Destructure the event object
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = () => {
    const token = localStorage.getItem("token"); // Check for token in local storage
    if (!token) {
      alert("Please log in to register for events"); // Alert the user if not logged in
    } else {
      setIsModalOpen(true); // Open modal if logged in
    }
  };

  // Helper function to format the date
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    if (isNaN(dateObj)) {
      return "Invalid Date"; // Return a default message if the date is invalid
    }
    return dateObj.toLocaleDateString(); // Format date
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />{" "}
      {/* Adjusted for image property */}
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-600">{formatDate(date)}</p>{" "}
        {/* Use formatDate function */}
        <p className="text-gray-600">{location}</p>
        <button
          onClick={handleRegisterClick}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>
      {isModalOpen && (
        <RegistrationModal
          eventId={_id} // Pass the event ID to the modal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default EventCard;
