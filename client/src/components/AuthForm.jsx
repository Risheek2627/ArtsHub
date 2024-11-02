// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AuthForm = ({ type }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//     institution: "",
//     interests: [],
//     organizationName: "",
//     phone: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="auth-container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <div className="auth-header text-center mb-8">
//         <h2 className="text-2xl font-bold">
//           {type === "student" ? "Student Portal" : "Organizer Portal"}
//         </h2>
//         <p className="text-gray-600">
//           {type === "student"
//             ? "Discover and participate in events"
//             : "Create and manage your events"}
//         </p>
//       </div>

//       <div className="tab-buttons flex mb-6">
//         <button
//           className={`flex-1 py-2 ${
//             isLogin
//               ? "text-blue-600 border-b-2 border-blue-600"
//               : "text-gray-500"
//           }`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </button>
//         <button
//           className={`flex-1 py-2 ${
//             !isLogin
//               ? "text-blue-600 border-b-2 border-blue-600"
//               : "text-gray-500"
//           }`}
//           onClick={() => setIsLogin(false)}
//         >
//           Register
//         </button>
//       </div>

//       <form onSubmit={handleSubmit}>
//         {!isLogin && type === "student" && (
//           <div className="form-group mb-4">
//             <label className="block text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               className="w-full p-2 border rounded"
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         {!isLogin && type === "organizer" && (
//           <div className="form-group mb-4">
//             <label className="block text-gray-700 mb-2">
//               Organization Name
//             </label>
//             <input
//               type="text"
//               name="organizationName"
//               className="w-full p-2 border rounded"
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         <div className="form-group mb-4">
//           <label className="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group mb-4">
//           <label className="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="w-full p-2 border rounded"
//             onChange={handleChange}
//           />
//         </div>

//         {!isLogin && (
//           <>
//             {type === "student" && (
//               <div className="form-group mb-4">
//                 <label className="block text-gray-700 mb-2">Institution</label>
//                 <input
//                   type="text"
//                   name="institution"
//                   className="w-full p-2 border rounded"
//                   onChange={handleChange}
//                 />
//               </div>
//             )}

//             {type === "organizer" && (
//               <div className="form-group mb-4">
//                 <label className="block text-gray-700 mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="w-full p-2 border rounded"
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {isLogin && (
//           <div className="forgot-password text-right mb-4">
//             <Link to="/forgot-password" className="text-blue-600 text-sm">
//               Forgot Password?
//             </Link>
//           </div>
//         )}

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

// todo frontend
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const AuthForm = ({ type }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     fullName: "",
//     institution: "",
//     interests: [],
//     organizationName: "",
//     phone: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="auth-container max-w-md mx-auto mt-10 p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl">
//       <div className="auth-header text-center mb-10">
//         <h2 className="text-3xl font-extrabold text-indigo-600">
//           {type === "student" ? "Student Portal" : "Organizer Portal"}
//         </h2>
//         <p className="text-gray-500 mt-2 text-sm">
//           {type === "student"
//             ? "Discover and participate in events"
//             : "Create and manage your events"}
//         </p>
//       </div>

//       <div className="tab-buttons flex mb-6 bg-gray-100 rounded-lg p-1">
//         <button
//           className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//             isLogin
//               ? "text-white bg-indigo-600 shadow-md"
//               : "text-gray-500 hover:bg-indigo-50"
//           }`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </button>
//         <button
//           className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
//             !isLogin
//               ? "text-white bg-indigo-600 shadow-md"
//               : "text-gray-500 hover:bg-indigo-50"
//           }`}
//           onClick={() => setIsLogin(false)}
//         >
//           Register
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {!isLogin && type === "student" && (
//           <div className="form-group">
//             <label className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         {!isLogin && type === "organizer" && (
//           <div className="form-group">
//             <label className="block text-gray-700 font-medium mb-2">
//               Organization Name
//             </label>
//             <input
//               type="text"
//               name="organizationName"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               onChange={handleChange}
//             />
//           </div>
//         )}

//         <div className="form-group">
//           <label className="block text-gray-700 font-medium mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label className="block text-gray-700 font-medium mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//             onChange={handleChange}
//           />
//         </div>

//         {!isLogin && (
//           <>
//             {type === "student" && (
//               <div className="form-group">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Institution
//                 </label>
//                 <input
//                   type="text"
//                   name="institution"
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                   onChange={handleChange}
//                 />
//               </div>
//             )}

//             {type === "organizer" && (
//               <div className="form-group">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                   onChange={handleChange}
//                 />
//               </div>
//             )}
//           </>
//         )}

//         {isLogin && (
//           <div className="forgot-password text-right mb-4">
//             <Link to="/forgot-password" className="text-indigo-600 text-sm">
//               Forgot Password?
//             </Link>
//           </div>
//         )}

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

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
