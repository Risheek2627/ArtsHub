// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const AuthForm = ({ type }) => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = isLogin
//       ? `http://localhost:5000/api/organizer/login`
//       : `http://localhost:5000/api/organizer/register`;

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Error:", errorText);
//         throw new Error(errorText);
//       }

//       const data = await response.json();
//       console.log("Response data", data);
//       if (response.ok) {
//         if (isLogin) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem(
//             "userInfo",
//             JSON.stringify({ role: "organizer", ...data.organizer })
//           );
//           navigate("/organizer-dashboard");
//         } else {
//           setIsLogin(true);
//           resetFormData(); // Switch to login after successful registration
//         }
//       } else {
//         setIsLogin(true);
//       }
//     } catch (error) {
//       console.error("Operation failed", error.message);
//       alert("An error occurred: " + error.message);
//     }
//   };

//   const resetFormData = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//     });
//   };

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevMode) => !prevMode);
//     resetFormData();
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">
//         {isLogin ? "Organizer Login" : "Organizer Register"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         {!isLogin && (
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium mb-2"
//               htmlFor="fullName"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               id="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>
//         )}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 rounded-md"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>
//         <p className="mt-4 text-center">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <button
//             type="button"
//             onClick={switchAuthModeHandler}
//             className="text-blue-500 ml-1 underline"
//           >
//             {isLogin ? "Register" : "Login"}
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

// todo more styling
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthForm = ({ type }) => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const url = isLogin
//       ? `http://localhost:5000/api/organizer/login`
//       : `http://localhost:5000/api/organizer/register`;

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           password: formData.password,
//         }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Error:", errorText);
//         throw new Error(errorText);
//       }

//       const data = await response.json();
//       console.log("Response data", data);
//       if (response.ok) {
//         if (isLogin) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem(
//             "userInfo",
//             JSON.stringify({ role: "organizer", ...data.organizer })
//           );
//           navigate("/organizer-dashboard");
//         } else {
//           setIsLogin(true);
//           resetFormData(); // Switch to login after successful registration
//         }
//       } else {
//         setIsLogin(true);
//       }
//     } catch (error) {
//       console.error("Operation failed", error.message);
//       alert("An error occurred: " + error.message);
//     }
//   };

//   const resetFormData = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//     });
//   };

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevMode) => !prevMode);
//     resetFormData();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
//             {isLogin ? "Welcome Back!" : "Create Account"}
//           </h2>
//           <p className="text-center text-sm text-gray-600 mb-8">
//             {isLogin
//               ? "Enter your details to access your account"
//               : "Register as an organizer to get started"}
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {!isLogin && (
//             <div>
//               <label
//                 className="block text-sm font-medium text-gray-700 mb-2"
//                 htmlFor="fullName"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 id="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//                 className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Enter your full name"
//               />
//             </div>
//           )}
//           <div>
//             <label
//               className="block text-sm font-medium text-gray-700 mb-2"
//               htmlFor="email"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label
//               className="block text-sm font-medium text-gray-700 mb-2"
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
//               className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//             >
//               {isLogin ? "Sign In" : "Create Account"}
//             </button>
//           </div>
//         </form>
//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             {isLogin ? "Don't have an account?" : "Already have an account?"}
//             <button
//               type="button"
//               onClick={switchAuthModeHandler}
//               className="ml-2 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition-colors duration-200"
//             >
//               {isLogin ? "Register" : "Sign In"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

// todo claude ai enchanced looking
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      ? `http://localhost:5000/api/organizer/login`
      : `http://localhost:5000/api/organizer/register`;

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
      console.log("Response data", data);
      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ role: "organizer", ...data.organizer })
          );
          navigate("/organizer-dashboard");
        } else {
          setIsLogin(true);
          resetFormData();
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-md w-full mx-4">
        {/* Glass morphism card effect */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl shadow-2xl border border-white/20">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-center mb-2 text-white">
                {isLogin ? "Welcome Back" : "Join as Organizer"}
              </h2>
              <p className="text-center text-purple-200 mb-8">
                {isLogin
                  ? "Manage your events with ease"
                  : "Start creating amazing events today"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-purple-100">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-purple-300/20 text-white placeholder-purple-300/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-100">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/20 text-white placeholder-purple-300/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-100">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/20 text-white placeholder-purple-300/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 text-white font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-500/50 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-purple-500/30"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-purple-200/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-purple-200">
                      {isLogin ? "New organizer?" : "Already registered?"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={switchAuthModeHandler}
                  className="mt-4 text-purple-300 hover:text-white font-medium transition-colors duration-200 underline-offset-4 hover:underline"
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
