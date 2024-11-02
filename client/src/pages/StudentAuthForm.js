import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    institution: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/"); // Redirect to home
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";
    console.log("Making request to:", url);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          institution: formData.institution,
          interests: formData.interests
            .split(",")
            .map((interest) => interest.trim()),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get the error response as text
        console.error("Error:", errorText);
        throw new Error(errorText); // Throw an error with the response text
      }

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (isLogin) {
          // Store the token and user data if needed
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              role: "student", // Set the role as 'student' after login
              ...data.student,
            })
          );
          navigate("/student-dashboard");
        } else {
          // Redirect to login after registration
          setIsLogin(true);
        }
      } else {
        setIsLogin(true);
        resetFormData();
      }
    } catch (error) {
      console.error("Registration failed", error.message);
      alert("An error occurred: " + error.message);
    }
  };

  const resetFormData = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      institution: "",
      interests: "",
    });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevMode) => !prevMode); // Toggle between login and register
    resetFormData(); // Reset form fields when switching
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-gray-700"
                  htmlFor="institution"
                >
                  Institution
                </label>
                <input
                  type="text"
                  name="institution"
                  id="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2 text-gray-700"
                  htmlFor="interests"
                >
                  Interests (comma separated)
                </label>
                <input
                  type="text"
                  name="interests"
                  id="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={switchAuthModeHandler}
              className="text-blue-500 ml-1 underline"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
