import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* ===== PAGES ===== */

const Dashboard = () => (
  <div className="page">
    <h1>Hospital Dashboard</h1>
    <p>Welcome to the Hospital Management Portal.</p>
  </div>
);

const Patients = () => (
  <div className="page">
    <h1>Patients</h1>
    <ul>
      <li>Ravi Kumar</li>
      <li>Anita Sharma</li>
      <li>Rahul Verma</li>
    </ul>
  </div>
);

const Doctors = () => (
  <div className="page">
    <h1>Doctors</h1>
    <ul>
      <li>Dr. Mehta - Cardiologist</li>
      <li>Dr. Singh - Neurologist</li>
      <li>Dr. Khan - Pediatrician</li>
    </ul>
  </div>
);

const Appointments = () => (
  <div className="page">
    <h1>Appointments</h1>
    <p>No upcoming appointments.</p>
  </div>
);

/* ===== NAVIGATION ===== */

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">MediCare Portal</h2>
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointments">Appointments</Link>
    </div>
  </nav>
);

/* ===== APP ===== */

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
