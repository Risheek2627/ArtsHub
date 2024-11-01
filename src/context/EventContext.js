// import React, { createContext, useContext, useState } from "react";

// const EventContext = createContext();

// export const EventProvider = ({ children }) => {
//   const [events, setEvents] = useState([]);

//   const addEvent = (event) => {
//     setEvents((prevEvents) => [...prevEvents, { ...event, id: Date.now() }]);
//   };

//   // Add additional functions as needed
//   const getAllEvents = () => events;

//   const getEventById = (id) => events.find((event) => event.id === id);

//   return (
//     <EventContext.Provider
//       value={{
//         events,
//         addEvent,
//         getAllEvents,
//         getEventById,
//       }}
//     >
//       {children}
//     </EventContext.Provider>
//   );
// };

// export const useEvents = () => {
//   const context = useContext(EventContext);
//   if (!context) {
//     throw new Error("useEvents must be used within an EventProvider");
//   }
//   return context;
// };

// todo crt code
// import React, { createContext, useContext, useState } from "react";

// const EventContext = createContext();

// export const EventProvider = ({ children }) => {
//   const [events, setEvents] = useState([]);

//   const addEvent = (event) => {
//     // Append the new event to the existing events array
//     setEvents((prevEvents) => [...prevEvents, { ...event, id: Date.now() }]);
//   };

//   return (
//     <EventContext.Provider
//       value={{
//         events,
//         addEvent,
//       }}
//     >
//       {children}
//     </EventContext.Provider>
//   );
// };

// export const useEvents = () => {
//   const context = useContext(EventContext);
//   if (!context) {
//     throw new Error("useEvents must be used within an EventProvider");
//   }
//   return context;
// };

import React, { createContext, useContext, useState, useEffect } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    // Load events from local storage or initialize to an empty array
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, { ...event, id: Date.now() }];
      localStorage.setItem("events", JSON.stringify(updatedEvents)); // Save to local storage
      return updatedEvents;
    });
  };

  const clearEvents = () => {
    setEvents([]);
    localStorage.removeItem("events"); // Clear local storage
  };

  return (
    <EventContext.Provider value={{ events, addEvent, clearEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventProvider");
  }
  return context;
};
