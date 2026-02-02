import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to React SPA Routing</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This experiment demonstrates Browser Routing.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>Email: example@gmail.com</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
