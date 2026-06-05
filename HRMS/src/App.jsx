import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PortalLogin from './pages/PortalLogin';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route -> Landing Page */}
        <Route path="/" element={<LandingPage />} />
        {/* /login route -> Dashboard/Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* /portal-login route -> Management Portal Login */}
        <Route path="/portal-login" element={<PortalLogin />} />
        {/* /user-dashboard route -> User Dashboard */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;