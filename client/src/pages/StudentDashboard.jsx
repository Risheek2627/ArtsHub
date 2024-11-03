// // todo studentDashboard.jsx

// // todo
// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import EventCard from "../components/EventCard";

// const StudentDashboard = () => {
//   const [studentInfo, setStudentInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);

//   useEffect(() => {
//     const fetchStudentInfo = async () => {
//       const studentData = localStorage.getItem("studentInfo");
//       if (studentData) {
//         setStudentInfo(JSON.parse(studentData));
//         setIsLoading(false);
//       } else {
//         console.error("No student data found.");
//         setIsLoading(false);
//       }
//     };

//     fetchStudentInfo();
//   }, []);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Fetch upcoming events
//         const eventsResponse = await fetch("http://localhost:5000/api/events");
//         const eventsData = await eventsResponse.json();
//         setUpcomingEvents(eventsData);

//         // Fetch registered events for this student
//         if (studentInfo) {
//           const registeredResponse = await fetch(
//             `http://localhost:5000/api/students/${studentInfo.id}/registeredEvents`
//           );
//           const registeredData = await registeredResponse.json();
//           setRegisteredEvents(registeredData);
//         }
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };

//     fetchEvents();
//   }, [studentInfo]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//         <div className="text-center space-y-4">
//           <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
//           <p className="text-lg text-white font-medium">
//             Loading your dashboard...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//       {/* Animated Background Shapes */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay animate-pulse" />
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-overlay animate-pulse delay-700" />
//         <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300/10 rounded-full mix-blend-overlay animate-pulse delay-500" />
//       </div>

//       <Header />
//       <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
//         {/* Welcome Card */}
//         <div className="w-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
//           <div className="p-8">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
//                 Welcome back, {studentInfo.fullName}!
//               </h1>
//               <div className="mt-4 space-y-3 text-white/90">
//                 <p className="text-lg">
//                   <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
//                     Institution:
//                   </span>
//                   {studentInfo.institution}
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
//                     Email:
//                   </span>
//                   {studentInfo.email}
//                 </p>
//               </div>
//               <div className="mt-6">
//                 <p className="font-semibold text-white mb-3 text-lg">
//                   Your Interests
//                 </p>
//                 <div className="flex flex-wrap gap-3 justify-center">
//                   {studentInfo.interests.map((interest) => (
//                     <span
//                       key={interest}
//                       className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors"
//                     >
//                       {interest}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Upcoming Events Section */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
//               <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
//                 {upcomingEvents.length} events available
//               </span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {upcomingEvents.map((event) => (
//                 <div
//                   key={event._id}
//                   className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   <EventCard event={event} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Registered Events Section */}
//           <div className="space-y-6">
//             <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Registered Events
//               </h3>
//               <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
//                 {registeredEvents.length} registered
//               </span>
//             </div>
//             <div className="grid grid-cols-1 gap-6">
//               {registeredEvents.map((event) => (
//                 <div
//                   key={event._id}
//                   className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   <EventCard event={event} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

// todo claude ai
// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import EventCard from "../components/EventCard";

// const StudentDashboard = () => {
//   const [studentInfo, setStudentInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [upcomingEvents, setUpcomingEvents] = useState([]);
//   const [registeredEvents, setRegisteredEvents] = useState([]);

//   useEffect(() => {
//     const fetchStudentInfo = async () => {
//       try {
//         const studentData = localStorage.getItem("studentInfo");
//         if (studentData) {
//           setStudentInfo(JSON.parse(studentData));
//         } else {
//           setError("No student data found.");
//         }
//       } catch (error) {
//         setError("Error loading student information");
//         console.error("Error loading student info:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchStudentInfo();
//   }, []);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Fetch upcoming events
//         const eventsResponse = await fetch("http://localhost:5000/api/events");
//         if (!eventsResponse.ok) {
//           throw new Error("Failed to fetch upcoming events");
//         }
//         const eventsData = await eventsResponse.json();
//         setUpcomingEvents(Array.isArray(eventsData) ? eventsData : []);

//         // Fetch registered events only if we have student info
//         if (studentInfo && studentInfo.id) {
//           const registeredResponse = await fetch(
//             `http://localhost:5000/api/students/${studentInfo.id}/registeredEvents`
//           );
//           if (!registeredResponse.ok) {
//             throw new Error("Failed to fetch registered events");
//           }
//           const registeredData = await registeredResponse.json();
//           setRegisteredEvents(
//             Array.isArray(registeredData) ? registeredData : []
//           );
//         }
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         setError(error.message);
//       }
//     };

//     if (studentInfo) {
//       fetchEvents();
//     }
//   }, [studentInfo]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//         <div className="text-center space-y-4">
//           <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
//           <p className="text-lg text-white font-medium">
//             Loading your dashboard...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//         <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-white text-center">
//           <p className="text-xl font-medium">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-4 px-6 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!studentInfo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//         <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl text-white text-center">
//           <p className="text-xl font-medium">
//             Please log in to view your dashboard
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay animate-pulse" />
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-overlay animate-pulse delay-700" />
//         <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300/10 rounded-full mix-blend-overlay animate-pulse delay-500" />
//       </div>

//       <Header />
//       <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
//         {/* Welcome Card */}
//         <div className="w-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
//           <div className="p-8">
//             <div className="text-center">
//               <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
//                 Welcome back, {studentInfo.fullName}!
//               </h1>
//               <div className="mt-4 space-y-3 text-white/90">
//                 <p className="text-lg">
//                   <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
//                     Institution:
//                   </span>
//                   {studentInfo.institution}
//                 </p>
//                 <p className="text-lg">
//                   <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
//                     Email:
//                   </span>
//                   {studentInfo.email}
//                 </p>
//               </div>
//               <div className="mt-6">
//                 <p className="font-semibold text-white mb-3 text-lg">
//                   Your Interests
//                 </p>
//                 <div className="flex flex-wrap gap-3 justify-center">
//                   {(studentInfo.interests || []).map((interest, index) => (
//                     <span
//                       key={index}
//                       className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors"
//                     >
//                       {interest}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Upcoming Events Section */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
//               <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
//                 {upcomingEvents.length} events available
//               </span>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {upcomingEvents.map((event) => (
//                 <div
//                   key={event._id}
//                   className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   <EventCard event={event} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Registered Events Section */}
//           <div className="space-y-6">
//             <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <h3 className="text-2xl font-bold text-white">
//                 Registered Events
//               </h3>
//               <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
//                 {registeredEvents.length} registered
//               </span>
//             </div>
//             <div className="grid grid-cols-1 gap-6">
//               {registeredEvents.map((event) => (
//                 <div
//                   key={event._id}
//                   className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//                 >
//                   <EventCard event={event} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      const studentData = localStorage.getItem("studentInfo");
      if (studentData) {
        setStudentInfo(JSON.parse(studentData));
        setIsLoading(false);
      } else {
        console.error("No student data found.");
        setIsLoading(false);
      }
    };

    fetchStudentInfo();
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch upcoming events
        const eventsResponse = await fetch("http://localhost:5000/api/events");
        const eventsData = await eventsResponse.json();
        setUpcomingEvents(eventsData);

        // Fetch registered events for this student
        if (studentInfo) {
          const registeredResponse = await fetch(
            `http://localhost:5000/api/students/${studentInfo.id}/registeredEvents`
          );
          const registeredData = await registeredResponse.json();
          setRegisteredEvents(
            Array.isArray(registeredData) ? registeredData : []
          ); // Ensure registeredEvents is an array
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [studentInfo]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-lg text-white font-medium">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full mix-blend-overlay animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300/10 rounded-full mix-blend-overlay animate-pulse delay-500" />
      </div>

      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8 relative z-10">
        {/* Welcome Card */}
        <div className="w-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
          <div className="p-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                Welcome back, {studentInfo.fullName}!
              </h1>
              <div className="mt-4 space-y-3 text-white/90">
                <p className="text-lg">
                  <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
                    Institution:
                  </span>
                  {studentInfo.institution}
                </p>
                <p className="text-lg">
                  <span className="font-semibold bg-white/20 px-3 py-1 rounded-lg mr-2">
                    Email:
                  </span>
                  {studentInfo.email}
                </p>
              </div>
              <div className="mt-6">
                <p className="font-semibold text-white mb-3 text-lg">
                  Your Interests
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {studentInfo.interests && studentInfo.interests.length > 0 ? (
                    studentInfo.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        {interest}
                      </span>
                    ))
                  ) : (
                    <p className="text-white">No interests listed.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Events Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
              <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
                {upcomingEvents.length} events available
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event._id}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>

          {/* Registered Events Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h3 className="text-2xl font-bold text-white">
                Registered Events
              </h3>
              <span className="text-sm text-white font-medium px-4 py-2 bg-white/20 rounded-full">
                {registeredEvents.length} registered
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {registeredEvents.length > 0 ? (
                registeredEvents.map((event) => (
                  <div
                    key={event._id}
                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <EventCard event={event} />
                  </div>
                ))
              ) : (
                <p className="text-white">No registered events found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
