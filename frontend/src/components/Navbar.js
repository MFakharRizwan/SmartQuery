import React from "react";
import { Link, useLocation } from "react-router-dom";
import authService from "../services/authServices";
import '../css/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticated();

  const handleLogout = () => {
    authService.logout();
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <nav>
      <h2 className="logo">SmartQuery</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {!isAuthenticated ? (
          <>
            {location.pathname !== "/login" && <Link to="/login">Login</Link>}
            {location.pathname !== "/register" && <Link to="/register">Register</Link>}
          </>
        ) : (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;