import React from "react";

const EventCard = ({ image, title, date, location }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="event-image w-full h-48 object-cover"
      />
      <div className="event-details p-4">
        <h3 className="event-title text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">Date: {date}</p>
        <p className="text-gray-600">Location: {location}</p>
      </div>
    </div>
  );
};

export default EventCard;
