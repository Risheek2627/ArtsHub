import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentAuthForm from "./pages/StudentAuthForm";
import OrganizerAuthForm from "./pages/OrganizerAuthForm";
import StudentDashboard from "./pages/StudentDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import Events from "./components/Events";
import { EventProvider } from "./context/EventContext";

// Helper function to check authentication
const isAuthenticated = (role) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo && userInfo.role === role;
};

// Protected Route component
const ProtectedRoute = ({ element, role }) => {
  return isAuthenticated(role) ? element : <Navigate to="/" />;
};

function App() {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-login" element={<StudentAuthForm />} />
          <Route path="/organizer-login" element={<OrganizerAuthForm />} />
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute element={<StudentDashboard />} role="student" />
            }
          />
          <Route
            path="/organizer-dashboard"
            element={
              <ProtectedRoute
                element={<OrganizerDashboard />}
                role="organizer"
              />
            }
          />

          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

export default App;
