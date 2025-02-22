import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ZomatoClone</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {token ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={() => { localStorage.removeItem("token"); window.location.reload(); }}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;