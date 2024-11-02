// import React, { useState } from "react";
// import Header from "../components/Header"; // Fixed path
// import EventCard from "../components/EventCard"; // Fixed path

// const StudentDashboard = () => {
//   const [studentInfo] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     institution: "Art University",
//     interests: ["Photography", "Painting"],
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const upcomingEvents = [
//     {
//       id: 1,
//       image: "/api/placeholder/400/300",
//       title: "Photography Workshop",
//       date: "May 15, 2024",
//       location: "Digital Studio",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/400/300",
//       title: "Art Exhibition",
//       date: "May 20, 2024",
//       location: "City Gallery",
//     },
//   ];

//   const registeredEvents = [
//     {
//       id: 3,
//       image: "/api/placeholder/400/300",
//       title: "Digital Art Masterclass",
//       date: "May 10, 2024",
//       location: "Online",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="text-center mb-6">
//                 <img
//                   src="/api/placeholder/100/100"
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full mx-auto mb-4"
//                 />
//                 <h2 className="text-xl font-bold">{studentInfo.name}</h2>
//                 <p className="text-gray-600">{studentInfo.institution}</p>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold mb-2">Interests</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {studentInfo.interests.map((interest) => (
//                       <span
//                         key={interest}
//                         className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//                 >
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Registered Events */}
//             <section className="mb-8">
//               <h2 className="text-2xl font-bold mb-4">My Registered Events</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {registeredEvents.map((event) => (
//                   <EventCard key={event.id} {...event} />
//                 ))}
//               </div>
//             </section>

//             {/* Recommended Events */}
//             <section>
//               <h2 className="text-2xl font-bold mb-4">Recommended Events</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {upcomingEvents.map((event) => (
//                   <EventCard key={event.id} {...event} />
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Modal */}
//       {isEditing && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   defaultValue={studentInfo.name}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Institution</label>
//                 <input
//                   type="text"
//                   defaultValue={studentInfo.institution}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   defaultValue={studentInfo.email}
//                   className="w-full p-2 border rounded"
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;

// todo frontend
// import React, { useState } from "react";
// import Header from "../components/Header";
// import EventCard from "../components/EventCard";

// const StudentDashboard = () => {
//   const [studentInfo] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     institution: "Art University",
//     interests: ["Photography", "Painting"],
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const upcomingEvents = [
//     {
//       id: 1,
//       image: "/api/placeholder/400/300",
//       title: "Photography Workshop",
//       date: "May 15, 2024",
//       location: "Digital Studio",
//     },
//     {
//       id: 2,
//       image: "/api/placeholder/400/300",
//       title: "Art Exhibition",
//       date: "May 20, 2024",
//       location: "City Gallery",
//     },
//   ];

//   const registeredEvents = [
//     {
//       id: 3,
//       image: "/api/placeholder/400/300",
//       title: "Digital Art Masterclass",
//       date: "May 10, 2024",
//       location: "Online",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//       <Header />

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-xl p-8 text-white">
//               <div className="text-center mb-6">
//                 <img
//                   src="/api/placeholder/100/100"
//                   alt="Profile"
//                   className="w-24 h-24 rounded-full mx-auto border-4 border-white mb-4 shadow-lg"
//                 />
//                 <h2 className="text-2xl font-bold">{studentInfo.name}</h2>
//                 <p className="text-indigo-200">{studentInfo.institution}</p>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold text-lg">Interests</h3>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {studentInfo.interests.map((interest) => (
//                       <span
//                         key={interest}
//                         className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm"
//                       >
//                         {interest}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//                 >
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-12">
//             {/* Registered Events */}
//             <section>
//               <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//                 My Registered Events
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {registeredEvents.map((event) => (
//                   <EventCard key={event.id} {...event} />
//                 ))}
//               </div>
//             </section>

//             {/* Recommended Events */}
//             <section>
//               <h2 className="text-3xl font-bold text-indigo-700 mb-6">
//                 Recommended Events
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {upcomingEvents.map((event) => (
//                   <EventCard key={event.id} {...event} />
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* Edit Profile Modal */}
//       {isEditing && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl relative">
//             <button
//               onClick={() => setIsEditing(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
//             <form className="space-y-6">
//               <div>
//                 <label className="block text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   defaultValue={studentInfo.name}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Institution</label>
//                 <input
//                   type="text"
//                   defaultValue={studentInfo.institution}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   defaultValue={studentInfo.email}
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setIsEditing(false)}
//                   className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default StudentDashboard;

// todo studentDashboard.jsx

// todo
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
        const eventsResponse = await fetch("/api/events");
        const eventsData = await eventsResponse.json();
        setUpcomingEvents(eventsData);

        if (studentInfo) {
          const registeredResponse = await fetch(
            `/api/students/${studentInfo.id}/registeredEvents`
          );
          const registeredData = await registeredResponse.json();
          setRegisteredEvents(registeredData);
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
                  {studentInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
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
              {registeredEvents.map((event) => (
                <div
                  key={event._id}
                  className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
