// src/App.js (or App.jsx)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudentLogin from "./pages/StudentLogin";
import OrganizerLogin from "./pages/OrganizerLogin";
import StudentDashboard from "./pages/StudentDashboard";
import OrganizerDashboard from "./pages/OrganizerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/organizer-login" element={<OrganizerLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
