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

import React from "react";
import { useEvents } from "../context/EventContext";
import Header from "./Header";
import EventCard from "./EventCard";

const Events = () => {
  const { events } = useEvents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          All Events
        </h1>
        {events.length === 0 ? (
          <p className="text-center text-gray-600">
            No events available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard
                key={event.id} // Use event.id for unique keys
                image={
                  event.images && event.images[0]
                    ? URL.createObjectURL(event.images[0])
                    : "/api/placeholder/400/300" // Placeholder image
                }
                title={event.title}
                date={new Date(event.dateTime).toLocaleDateString()}
                location={event.location}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
