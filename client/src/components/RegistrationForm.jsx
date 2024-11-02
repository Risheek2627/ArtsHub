// import React, { useState } from "react";

// const RegistrationForm = ({ eventId, onClose, studentId }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
//   //   setError("");

//   //second code
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/events/${eventId}/register`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             studentId,
//             name,
//             email,
//             eventId,
//           }),
//         }
//       );

//       // Handle the response only once
//       const data = await response.json(); // Read the response once

//       if (!response.ok) {
//         // If the response is not OK, throw an error with the data
//         throw new Error(
//           data.message || "An error occurred during registration"
//         );
//       }

//       // Handle success
//       console.log("Registration successful:", data);
//     } catch (error) {
//       console.error("Registration failed:", error);
//       setError(error.message); // Update the error state
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg p-6 shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Register for Event</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Registering..." : "Register"}
//           </button>
//         </form>
//         <button
//           onClick={onClose}
//           className="mt-4 text-gray-600 hover:underline"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// todo cluade ai
// import React, { useState } from "react";

// const RegistrationForm = ({ eventId, onClose, studentId }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     if (!studentId) {
//       setError("Student ID is required. Please log in.");
//       return false;
//     }
//     if (!formData.name.trim()) {
//       setError("Name is required");
//       return false;
//     }
//     if (!formData.email.trim()) {
//       setError("Email is required");
//       return false;
//     }
//     if (!eventId) {
//       setError("Event ID is missing");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError("");
//     setSuccessMessage("");

//     if (!validateForm()) {
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/events/${eventId}/register`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             studentId,
//             name: formData.name,
//             email: formData.email,
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Registration failed");
//       }

//       setSuccessMessage(data.message || "Successfully registered!");
//       setTimeout(() => {
//         onClose();
//       }, 2000);
//     } catch (err) {
//       console.error("Registration error:", err);
//       setError(err.message || "Failed to register. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full m-4">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">
//           Register for Event
//         </h2>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
//             {error}
//           </div>
//         )}

//         {successMessage && (
//           <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
//             {successMessage}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center">
//                   <svg
//                     className="animate-spin h-5 w-5 mr-3"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       fill="none"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                     />
//                   </svg>
//                   Registering...
//                 </span>
//               ) : (
//                 "Register"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;

// todo after claude ai changes made by chatgpt
// RegistrationForm.jsx
import React, { useState } from "react";

const RegistrationForm = ({ eventId, onClose, studentId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!studentId) {
      setError("Student ID is required. Please log in.");
      return false;
    }
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!eventId) {
      setError("Event ID is missing");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccessMessage("");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${eventId}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            studentId,
            name: formData.name,
            email: formData.email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccessMessage(data.message || "Successfully registered!");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-xl max-w-md w-full m-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Register for Event
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
