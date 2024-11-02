import React, { useState } from "react";

const RegistrationModal = ({ eventId, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    // Logic to save registration data (e.g., send to backend)
    console.log({ name, email, eventId });
    // Close the modal after registering
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Register for Event</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
        <button onClick={onClose} className="ml-2 text-gray-600">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RegistrationModal;
