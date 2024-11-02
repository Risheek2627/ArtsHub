import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? `http://localhost:5000/api/auth/login`
      : `http://localhost:5000/api/auth/register`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
        throw new Error(errorText);
      }

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ role: "organizer", ...data.organizer })
          );
          navigate("/organizer-dashboard");
        } else {
          setIsLogin(true); // Switch to login after successful registration
        }
      } else {
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Operation failed", error.message);
      alert("An error occurred: " + error.message);
    }
  };

  const resetFormData = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevMode) => !prevMode);
    resetFormData();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">
        {isLogin ? "Organizer Login" : "Organizer Register"}
      </h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
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
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md"
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
  );
};

export default AuthForm;
