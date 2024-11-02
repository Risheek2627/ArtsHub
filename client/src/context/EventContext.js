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

// crt crt code
// import React, { createContext, useContext, useState, useEffect } from "react";

// const EventContext = createContext();

// export const EventProvider = ({ children }) => {
//   const [events, setEvents] = useState(() => {
//     // Load events from local storage or initialize to an empty array
//     const savedEvents = localStorage.getItem("events");
//     return savedEvents ? JSON.parse(savedEvents) : [];
//   });

//   const addEvent = (event) => {
//     setEvents((prevEvents) => {
//       const updatedEvents = [...prevEvents, { ...event, id: Date.now() }];
//       localStorage.setItem("events", JSON.stringify(updatedEvents)); // Save to local storage
//       return updatedEvents;
//     });
//   };

//   const clearEvents = () => {
//     setEvents([]);
//     localStorage.removeItem("events"); // Clear local storage
//   };

//   return (
//     <EventContext.Provider value={{ events, addEvent, clearEvents }}>
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
// context/EventContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const EventContext = createContext();
export const useEvents = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  // Define fetchEvents outside of useEffect
  const fetchEvents = async () => {
    try {
      const response = await fetch(" http://localhost:5000/api/events"); // Adjust the URL accordingly
      const data = await response.json();
      console.log("Fetched events:", data); // Log the fetched data
      setEvents(data); // Assuming setEvents updates the events state
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Call fetchEvents inside useEffect
  }, []);

  const fetchRegisteredEvents = async (studentId) => {
    const response = await fetch(
      `http://localhost:5000/api/students/${studentId}/registeredEvents`
    );
    const data = await response.json();
    setRegisteredEvents(data);
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await fetch("http://localhost:5000/api/events/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        const savedEvent = await response.json();
        setEvents((prevEvents) => [...prevEvents, savedEvent]); // Update state with the new event
      } else {
        console.error("Failed to add event:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        registeredEvents,
        fetchEvents, // Now defined and can be used
        fetchRegisteredEvents,
        addEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
