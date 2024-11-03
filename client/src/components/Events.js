// import React from "react";
// import { useEvents } from "../context/EventContext";
// import Header from "./Header";
// import EventCard from "./EventCard";

// const Events = () => {
//   const { events } = useEvents(); // Get events from context

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <Header />

//       <div className="container mx-auto py-16 px-4">
//         <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           All Events
//         </h1>

//         {events.length === 0 ? (
//           <div className="text-center text-gray-600">
//             <p>No events available at the moment.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {events.map((event, index) => (
//               <EventCard
//                 key={index}
//                 id={index}
//                 image={
//                   event.images?.length > 0
// ? URL.createObjectURL(event.images[0])
//                     : "/api/placeholder/400/300"
//                 }
//                 title={event.title}
//                 date={new Date(event.dateTime).toLocaleDateString()}
//                 location={event.location}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;

// import React from "react";
// import { useEvents } from "../context/EventContext";
// import Header from "./Header";
// import EventCard from "./EventCard";

// const Events = () => {
//   const { events } = useEvents();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <Header />
//       <div className="container mx-auto py-16 px-4">
//         <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
//           All Events
//         </h1>
//         {events.length === 0 ? (
//           <p className="text-center text-gray-600">
//             No events available at the moment.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {events.map((event) => (
//               <EventCard
//                 key={event.id} // Use event.id for unique keys
//                 image={
//                   event.images && event.images[0]
//                     ? URL.createObjectURL(event.images[0])
//                     : "/api/placeholder/400/300" // Placeholder image
//                 }
//                 title={event.title}
//                 date={new Date(event.dateTime).toLocaleDateString()}
//                 location={event.location}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Events;

// components/Events.js
// import React, { useEffect, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import RegistrationForm from "./RegistrationForm";

// const Events = ({ studentId }) => {
//   const { events, fetchEvents } = useEvents();
//   const [selectedEventId, setSelectedEventId] = useState(null);
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   const handleRegister = (eventId) => {
//     setSelectedEventId(eventId);
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//     setSelectedEventId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
//         Upcoming Events
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event) => (
//           <div
//             key={event._id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//           >
//             <img
//               src={
//                 event.images && event.images[0]
//                   ? URL.createObjectURL(event.images[0])
//                   : "https://via.placeholder.com/300"
//               }
//               alt="Event"
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {event.title}
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 {new Date(event.dateTime).toLocaleDateString()}
//               </p>
//               <p className="text-gray-600 mt-1">{event.location}</p>
//               <button
//                 onClick={() => handleRegister(event._id)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isFormOpen && (
//         <RegistrationForm
//           eventId={selectedEventId}
//           onClose={closeForm}
//           studentId={studentId}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;

// todo cluade ai
// import React, { useEffect, useState } from "react";
// import { useEvents } from "../context/EventContext";
// import RegistrationForm from "./RegistrationForm";

// const Events = () => {
//   const { events, fetchEvents } = useEvents();
//   const [selectedEventId, setSelectedEventId] = useState(null);
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [authError, setAuthError] = useState("");

//   // Get the student ID from localStorage or your auth context
//   const studentId = localStorage.getItem("studentId"); // Or use your auth context

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   const handleRegister = (eventId) => {
//     if (!studentId) {
//       setAuthError("Please log in to register for events");
//       return;
//     }
//     setAuthError("");
//     setSelectedEventId(eventId);
//     setIsFormOpen(true);
//   };

//   const closeForm = () => {
//     setIsFormOpen(false);
//     setSelectedEventId(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
//         Upcoming Events
//       </h2>

//       {/* Show auth error if exists */}
//       {authError && (
//         <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md text-center">
//           {authError}
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event) => (
//           <div
//             key={event._id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//           >
//             <img
//               src={event.images?.[0] || "/api/placeholder/400/300"}
//               alt={event.title}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {event.title}
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 {new Date(event.dateTime).toLocaleDateString()}
//               </p>
//               <p className="text-gray-600 mt-1">{event.location}</p>
//               <button
//                 onClick={() => handleRegister(event._id)}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {isFormOpen && studentId && (
//         <RegistrationForm
//           eventId={selectedEventId}
//           onClose={closeForm}
//           studentId={studentId}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;

// todo after claude ai edited by chatpgt n
// Events.jsx
import React, { useEffect, useState } from "react";
import { useEvents } from "../context/EventContext";
import RegistrationForm from "./RegistrationForm";

const Events = () => {
  const { events, fetchEvents } = useEvents();
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleRegister = (eventId) => {
    const studentId = localStorage.getItem("studentId"); // Get the student ID from localStorage
    console.log("Retrieved studentId : ", studentId); // debug line
    if (!studentId) {
      setAuthError("Please log in to register for events");
      return;
    }
    setAuthError("");
    setSelectedEventId(eventId);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedEventId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Upcoming Events
      </h2>

      {/* Show auth error if exists */}
      {authError && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md text-center">
          {authError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={event.images?.[0] || "/api/placeholder/400/300"}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-1">
                {new Date(event.dateTime).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mt-1">{event.location}</p>
              <button
                onClick={() => handleRegister(event._id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <RegistrationForm
          eventId={selectedEventId}
          onClose={closeForm}
          studentId={localStorage.getItem("studentId")}
        />
      )}
    </div>
  );
};

export default Events;
