// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const AuthForm = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     institution: "",
//     interests: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userInfo");
//     navigate("/"); // Redirect to home
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = isLogin
//       ? "http://localhost:5000/api/auth/login"
//       : "http://localhost:5000/api/auth/register";
//     console.log("Making request to:", url);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//           institution: formData.institution,
//           interests: formData.interests
//             .split(",")
//             .map((interest) => interest.trim()),
//         }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text(); // Get the error response as text
//         console.error("Error:", errorText);
//         throw new Error(errorText); // Throw an error with the response text
//       }

//       const data = await response.json();
//       console.log(data);

//       if (response.ok) {
//         if (isLogin) {
//           // Store the token and user data if needed
//           localStorage.setItem("token", data.token);
//           localStorage.setItem(
//             "userInfo",
//             JSON.stringify({
//               role: "student", // Set the role as 'student' after login
//               ...data.student,
//             })
//           );
//           navigate("/student-dashboard");
//         } else {
//           // Redirect to login after registration
//           setIsLogin(true);
//         }
//       } else {
//         setIsLogin(true);
//         resetFormData();
//       }
//     } catch (error) {
//       console.error("Registration failed", error.message);
//       alert("An error occurred: " + error.message);
//     }
//   };

//   const resetFormData = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       institution: "",
//       interests: "",
//     });
//   };

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevMode) => !prevMode); // Toggle between login and register
//     resetFormData(); // Reset form fields when switching
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-3xl font-semibold text-center mb-6">
//           {isLogin ? "Login" : "Register"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <>
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2 text-gray-700"
//                   htmlFor="fullName"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   id="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2 text-gray-700"
//                   htmlFor="institution"
//                 >
//                   Institution
//                 </label>
//                 <input
//                   type="text"
//                   name="institution"
//                   id="institution"
//                   value={formData.institution}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   className="block text-sm font-medium mb-2 text-gray-700"
//                   htmlFor="interests"
//                 >
//                   Interests (comma separated)
//                 </label>
//                 <input
//                   type="text"
//                   name="interests"
//                   id="interests"
//                   value={formData.interests}
//                   onChange={handleChange}
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </>
//           )}
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium mb-2 text-gray-700"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium mb-2 text-gray-700"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
//           >
//             {isLogin ? "Login" : "Register"}
//           </button>
//           <p className="mt-4 text-center">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <button
//               type="button"
//               onClick={switchAuthModeHandler}
//               className="text-blue-500 ml-1 underline"
//             >
//               {isLogin ? "Register" : "Login"}
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

// todo claude ai   with more stylish look

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

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
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              role: "student",
              ...data.student,
            })
          );
          navigate("/student-dashboard");
        } else {
          setIsLogin(true);
          resetFormData();
        }
      } else {
        setIsLogin(true);
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
    setIsLogin((prevMode) => !prevMode);
    resetFormData();
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10" />

            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {isLogin ? "Welcome Back" : "Join Us"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
                        placeholder="Enter your institution"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Interests
                      </label>
                      <input
                        type="text"
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
                        placeholder="e.g., AI, Machine Learning, Data Science"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200 ease-in-out"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 transform hover:scale-[1.02] transition-all duration-200"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      {isLogin
                        ? "New to platform?"
                        : "Already have an account?"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={switchAuthModeHandler}
                  className="mt-4 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200"
                >
                  {isLogin ? "Create an account" : "Sign in to your account"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
