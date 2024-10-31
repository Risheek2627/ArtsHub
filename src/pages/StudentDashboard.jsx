import React, { useState } from "react";
import Header from "../components/Header"; // Fixed path
import EventCard from "../components/EventCard"; // Fixed path

const StudentDashboard = () => {
  const [studentInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    institution: "Art University",
    interests: ["Photography", "Painting"],
  });

  const [isEditing, setIsEditing] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Photography Workshop",
      date: "May 15, 2024",
      location: "Digital Studio",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Art Exhibition",
      date: "May 20, 2024",
      location: "City Gallery",
    },
  ];

  const registeredEvents = [
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Digital Art Masterclass",
      date: "May 10, 2024",
      location: "Online",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <img
                  src="/api/placeholder/100/100"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-bold">{studentInfo.name}</h2>
                <p className="text-gray-600">{studentInfo.institution}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {studentInfo.interests.map((interest) => (
                      <span
                        key={interest}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Registered Events */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">My Registered Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {registeredEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </section>

            {/* Recommended Events */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Recommended Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={studentInfo.name}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Institution</label>
                <input
                  type="text"
                  defaultValue={studentInfo.institution}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue={studentInfo.email}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;