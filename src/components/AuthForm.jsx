import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ type }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    institution: "",
    interests: [],
    organizationName: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="auth-container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="auth-header text-center mb-8">
        <h2 className="text-2xl font-bold">
          {type === "student" ? "Student Portal" : "Organizer Portal"}
        </h2>
        <p className="text-gray-600">
          {type === "student"
            ? "Discover and participate in events"
            : "Create and manage your events"}
        </p>
      </div>

      <div className="tab-buttons flex mb-6">
        <button
          className={`flex-1 py-2 ${
            isLogin
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`flex-1 py-2 ${
            !isLogin
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {!isLogin && type === "student" && (
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>
        )}

        {!isLogin && type === "organizer" && (
          <div className="form-group mb-4">
            <label className="block text-gray-700 mb-2">
              Organization Name
            </label>
            <input
              type="text"
              name="organizationName"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        {!isLogin && (
          <>
            {type === "student" && (
              <div className="form-group mb-4">
                <label className="block text-gray-700 mb-2">Institution</label>
                <input
                  type="text"
                  name="institution"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
            )}

            {type === "organizer" && (
              <div className="form-group mb-4">
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
            )}
          </>
        )}

        {isLogin && (
          <div className="forgot-password text-right mb-4">
            <Link to="/forgot-password" className="text-blue-600 text-sm">
              Forgot Password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
