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
          resetFormData(); // Switch to login after successful registration
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            {isLogin
              ? "Enter your details to access your account"
              : "Register as an organizer to get started"}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
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
                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={switchAuthModeHandler}
              className="ml-2 font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition-colors duration-200"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
