import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* ===== DASHBOARD ===== */

const Dashboard = () => (
  <div className="page">
    <h1>Dashboard</h1>

    <div className="card">
      <h2>Skills</h2>
      <ul>
        <li>React & Web Development</li>
        <li>Python Programming</li>
        <li>Machine Learning Basics</li>
        <li>UI/UX Design</li>
        <li>Problem Solving</li>
      </ul>
    </div>

    <div className="card">
      <h2>Projects</h2>
      <ul>
        <li>AI-powered Rehabilitation Game</li>
        <li>Fruit Ninja Hand Tracking Game</li>
        <li>Vendor Mitra Web Platform</li>
      </ul>
    </div>

    <div className="card">
      <h2>Goals</h2>
      <p>
        To become a Metaverse developer and build AI-driven interactive systems.
      </p>
    </div>
  </div>
);

/* ===== PROFILE ===== */

const Profile = () => (
  <div className="page">
    <h1>Profile</h1>

    <div className="card profile-card">
      <img
        src="/profile.png"   /* 👈 your image from public folder */
        alt="profile"
        className="profile-pic"
      />

      <div className="details">
        <h2>Dhanyasai Supraja</h2>
        <p>Computer Science & Engineering Student</p>
        <p>Specialization: AI & ML</p>
        <p>University: Chandigarh University</p>
        <p>Email: dhanyasai2005@gmail.com</p>
        <p>Interests: Game Dev, AI, Web Development</p>
      </div>
    </div>
  </div>
);

/* ===== APP ===== */

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
