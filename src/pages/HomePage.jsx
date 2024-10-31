import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // Fixed path
import EventCard from "../components/EventCard";

const HomePage = () => {
  const featuredEvents = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Art Exhibition 2024",
      date: "April 15, 2024",
      location: "Art Gallery, Downtown",
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Music Festival",
      date: "April 20, 2024",
      location: "Central Park",
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Dance Workshop",
      date: "April 25, 2024",
      location: "Dance Studio",
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Photography Contest",
      date: "May 1, 2024",
      location: "Convention Center",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="hero bg-blue-900 text-white py-20">
        <div className="hero-content container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Unleash Your Creativity</h1>
          <p className="text-xl mb-8">
            Explore, Participate, and Showcase Your Talent
          </p>

          <div className="cta-buttons flex justify-center gap-4">
            <Link
              to="/organizer-login"
              className="cta-button primary-button bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Organizer Login
            </Link>
            <Link
              to="/student-login"
              className="cta-button secondary-button bg-white text-blue-900 px-6 py-3 rounded-lg"
            >
              Student Login
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-events container mx-auto py-16">
        <h2 className="section-title text-3xl font-bold text-center mb-12">
          Featured Events
        </h2>

        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/events"
            className="view-more inline-block text-blue-600 hover:text-blue-800"
          >
            View More Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
