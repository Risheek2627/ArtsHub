import React, { useState } from "react";

const RegistrationForm = ({ eventId, onClose, studentId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/events/${eventId}/register`, // Correctly includes eventId
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, name, email }),
        }
      );

      const data = await response.json(); // Get the response data

      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }

      alert(data.message); // Notify user of successful registration
      onClose(); // Close the form after successful registration
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Register for Event</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
