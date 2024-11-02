// import React, { useState } from "react";
// import Header from "../components/Header"; // Fixed path
// import { Link } from "react-router-dom";

// const OrganizerDashboard = () => {
//   const [activeTab, setActiveTab] = useState("postEvent");
//   const [imageFiles, setImageFiles] = useState([]);

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImageFiles((prev) => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setImageFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow">
//               <div className="p-4 border-b">
//                 <div className="flex items-center space-x-3">
//                   <img
//                     src="/api/placeholder/100/100"
//                     alt="Profile"
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h2 className="font-semibold">John's Art Gallery</h2>
//                     <p className="text-sm text-gray-600">Organizer</p>
//                   </div>
//                 </div>
//               </div>

//               <nav className="p-2">
//                 <button
//                   onClick={() => setActiveTab("postEvent")}
//                   className={`w-full text-left px-4 py-2 rounded ${
//                     activeTab === "postEvent"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   Post Event
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("manageEvents")}
//                   className={`w-full text-left px-4 py-2 rounded ${
//                     activeTab === "manageEvents"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   Manage Events
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("analytics")}
//                   className={`w-full text-left px-4 py-2 rounded ${
//                     activeTab === "analytics"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   Analytics
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("settings")}
//                   className={`w-full text-left px-4 py-2 rounded ${
//                     activeTab === "settings"
//                       ? "bg-blue-50 text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   Settings
//                 </button>
//                 <Link
//                   to="/logout"
//                   className="w-full block text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded"
//                 >
//                   Logout
//                 </Link>
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow p-6">
//               {activeTab === "postEvent" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Post New Event</h2>
//                   <form className="space-y-6">
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Title
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full p-2 border rounded"
//                         placeholder="Enter event title"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Description
//                       </label>
//                       <textarea
//                         className="w-full p-2 border rounded h-32"
//                         placeholder="Enter event description"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Date and Time
//                         </label>
//                         <input
//                           type="datetime-local"
//                           className="w-full p-2 border rounded"
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Location
//                         </label>
//                         <input
//                           type="text"
//                           className="w-full p-2 border rounded"
//                           placeholder="Enter event location"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Images
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                         <input
//                           type="file"
//                           multiple
//                           accept="image/*"
//                           onChange={handleImageUpload}
//                           className="hidden"
//                           id="image-upload"
//                         />
//                         <label
//                           htmlFor="image-upload"
//                           className="cursor-pointer text-blue-600 hover:text-blue-800"
//                         >
//                           Click to upload images
//                           <br />
//                           <span className="text-gray-500">
//                             or drag and drop them here
//                           </span>
//                         </label>
//                       </div>

//                       {imageFiles.length > 0 && (
//                         <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                           {imageFiles.map((file, index) => (
//                             <div key={index} className="relative">
//                               <img
//                                 src="/api/placeholder/200/200"
//                                 alt={`Preview ${index + 1}`}
//                                 className="w-full h-32 object-cover rounded"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeImage(index)}
//                                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
//                               >
//                                 ×
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                     >
//                       Post Event
//                     </button>
//                   </form>
//                 </div>
//               )}

//               {activeTab === "manageEvents" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Manage Events</h2>
//                   {/* Add manage events content */}
//                 </div>
//               )}

//               {activeTab === "analytics" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Analytics</h2>
//                   {/* Add analytics content */}
//                 </div>
//               )}

//               {activeTab === "settings" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Settings</h2>
//                   {/* Add settings content */}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrganizerDashboard;

// OrganizerDashboard.jsx
// src/pages/OrganizerDashboard.jsx
// import React, { useState } from "react";
// import Header from "../components/Header"; // Fixed path
// import { Link } from "react-router-dom";
// import { useEvents } from "../context/EventContext"; // Import the context

// const OrganizerDashboard = () => {
//   const { addEvent } = useEvents(); // Use the context
//   const [activeTab, setActiveTab] = useState("postEvent");
//   const [imageFiles, setImageFiles] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dateTime, setDateTime] = useState("");
//   const [location, setLocation] = useState("");

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImageFiles((prev) => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setImageFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh

//     const newEvent = {
//       title,
//       description,
//       dateTime,
//       location,
//       images: imageFiles,
//     };

//     addEvent(newEvent); // Add the new event to the context
//     resetForm(); // Reset form fields
//   };

//   const resetForm = () => {
//     setTitle("");
//     setDescription("");
//     setDateTime("");
//     setLocation("");
//     setImageFiles([]);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {/* Sidebar code remains unchanged */}
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow p-6">
//               {activeTab === "postEvent" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Post New Event</h2>
//                   <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Title
//                       </label>
//                       <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="w-full p-2 border rounded"
//                         placeholder="Enter event title"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Description
//                       </label>
//                       <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         className="w-full p-2 border rounded h-32"
//                         placeholder="Enter event description"
//                         required
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Date and Time
//                         </label>
//                         <input
//                           type="datetime-local"
//                           value={dateTime}
//                           onChange={(e) => setDateTime(e.target.value)}
//                           className="w-full p-2 border rounded"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Location
//                         </label>
//                         <input
//                           type="text"
//                           value={location}
//                           onChange={(e) => setLocation(e.target.value)}
//                           className="w-full p-2 border rounded"
//                           placeholder="Enter event location"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Images
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                         <input
//                           type="file"
//                           multiple
//                           accept="image/*"
//                           onChange={handleImageUpload}
//                           className="hidden"
//                           id="image-upload"
//                         />
//                         <label
//                           htmlFor="image-upload"
//                           className="cursor-pointer text-blue-600 hover:text-blue-800"
//                         >
//                           Click to upload images
//                           <br />
//                           <span className="text-gray-500">
//                             or drag and drop them here
//                           </span>
//                         </label>
//                       </div>

//                       {imageFiles.length > 0 && (
//                         <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                           {imageFiles.map((file, index) => (
//                             <div key={index} className="relative">
//                               <img
//                                 src={URL.createObjectURL(file)}
//                                 alt={`Event image ${index + 1}`} // Use a relevant alt text
//                                 className="w-full h-32 object-cover rounded"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeImage(index)}
//                                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
//                               >
//                                 ×
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                     >
//                       Post Event
//                     </button>
//                   </form>
//                 </div>
//               )}

//               {/* Manage Events, Analytics, and Settings tabs remain unchanged */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrganizerDashboard;

// todo    OrganizerDashboard.jsx
// import React, { useState } from "react";
// import Header from "../components/Header";
// import { useNavigate } from "react-router-dom";
// import { useEvents } from "../context/EventContext";

// const OrganizerDashboard = () => {
//   const { addEvent } = useEvents();
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState("postEvent"); // Active tab for toggling views
//   const [imageFiles, setImageFiles] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     dateTime: "",
//     location: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setImageFiles((prev) => [...prev, ...files]);
//   };

//   const removeImage = (index) => {
//     setImageFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return; // Prevent multiple submissions

//     setIsSubmitting(true); // Disable the submit button

//     const newEvent = {
//       ...formData,
//       images: imageFiles,
//       createdAt: new Date().toISOString(),
//     };

//     // Call the addEvent function to update context
//     addEvent(newEvent);

//     // Reset form
//     setFormData({ title: "", description: "", dateTime: "", location: "" });
//     setImageFiles([]);
//     navigate("/events");

//     setIsSubmitting(false); // Re-enable the submit button
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           <div className="lg:col-span-4">
//             <div className="bg-white rounded-lg shadow p-6">
//               {activeTab === "postEvent" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Post New Event</h2>
//                   <form className="space-y-6" onSubmit={handleSubmit}>
//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Title
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded"
//                         placeholder="Enter event title"
//                         required
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Description
//                       </label>
//                       <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="w-full p-2 border rounded h-32"
//                         placeholder="Enter event description"
//                         required
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Date and Time
//                         </label>
//                         <input
//                           type="datetime-local"
//                           name="dateTime"
//                           value={formData.dateTime}
//                           onChange={handleChange}
//                           className="w-full p-2 border rounded"
//                           required
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-gray-700 mb-2">
//                           Location
//                         </label>
//                         <input
//                           type="text"
//                           name="location"
//                           value={formData.location}
//                           onChange={handleChange}
//                           className="w-full p-2 border rounded"
//                           placeholder="Enter event location"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-gray-700 mb-2">
//                         Event Images
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                         <input
//                           type="file"
//                           multiple
//                           accept="image/*"
//                           onChange={handleImageUpload}
//                           className="hidden"
//                           id="image-upload"
//                         />
//                         <label
//                           htmlFor="image-upload"
//                           className="cursor-pointer text-blue-600 hover:text-blue-800"
//                         >
//                           Click to upload images
//                           <br />
//                           <span className="text-gray-500">
//                             or drag and drop them here
//                           </span>
//                         </label>
//                       </div>

//                       {imageFiles.length > 0 && (
//                         <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                           {imageFiles.map((file, index) => (
//                             <div key={index} className="relative">
//                               <img
//                                 src={URL.createObjectURL(file)}
//                                 alt={`Event image ${index + 1}`}
//                                 className="w-full h-32 object-cover rounded"
//                               />
//                               <button
//                                 type="button"
//                                 onClick={() => removeImage(index)}
//                                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
//                               >
//                                 ×
//                               </button>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                     >
//                       Post Event
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrganizerDashboard;

// todo extra stylings
import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { Calendar, MapPin, Image as ImageIcon, X } from "lucide-react";

const OrganizerDashboard = () => {
  const { addEvent } = useEvents();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("postEvent");
  const [imageFiles, setImageFiles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateTime: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const newEvent = {
      ...formData,
      images: imageFiles,
      createdAt: new Date().toISOString(),
    };

    addEvent(newEvent);
    setFormData({ title: "", description: "", dateTime: "", location: "" });
    setImageFiles([]);
    navigate("/events");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-purple-900 mb-8">
                Create New Event
              </h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block">
                      Event Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="Enter an engaging title for your event"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block">
                      Event Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-purple-200 rounded-lg h-40 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                      placeholder="Describe your event in detail"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="text-sm font-medium text-purple-900 mb-2 block">
                        Date and Time
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
                        <input
                          type="datetime-local"
                          name="dateTime"
                          value={formData.dateTime}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-sm font-medium text-purple-900 mb-2 block">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full pl-10 p-3 bg-white border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                          placeholder="Event venue or address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-purple-900 mb-2 block">
                      Event Images
                    </label>
                    <div className="border-2 border-dashed border-purple-200 bg-white rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <ImageIcon className="mx-auto h-12 w-12 text-purple-400 mb-4" />
                        <span className="text-purple-600 font-medium">
                          Click to upload images
                        </span>
                        <span className="text-purple-500 block mt-1">
                          or drag and drop them here
                        </span>
                      </label>
                    </div>

                    {imageFiles.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {imageFiles.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Event image ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-2 right-2 bg-purple-900 bg-opacity-50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? "Publishing..." : "Publish Event"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
