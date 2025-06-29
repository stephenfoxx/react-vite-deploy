// src/pages/About.jsx
import React from "react";


function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        I’m a dynamic Front-End Developer with an MSc in Software Engineering
        (Distinction) and over two years of experience building user-focused web
        applications. My tech stack includes React.js, HTML, CSS, JavaScript,
        and more. I thrive in collaborative environments and am passionate about
        AI and performance optimization.
      </p>
      <div className="education">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>University of Hertfordshire:</strong> MSc Software
            Engineering, 2023–2024
          </li>
          <li>
            <strong>Afe Babalola University:</strong> BSc Electrical
            Engineering, 2015–2020
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
