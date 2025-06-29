import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    function toggleSidebar() {
      setIsSidebarOpen(!isSidebarOpen)
  }  
    
    //const closeSidebar = () => setIsSidebarOpen(false);
    
    function closeSidebar() {
        setIsSidebarOpen(false);
    }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Stephen Ogwu</div>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger icon for mobile */}
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          ×
        </button>
        <ul>
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeSidebar}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" onClick={closeSidebar}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeSidebar}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
