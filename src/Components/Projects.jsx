// src/pages/Projects.jsx
import React from "react";


function Projects() {
  const projectList = [
    {
      title: "Chef Recipe Web Application",
      description: "AI-powered app that suggests recipes based on ingredients.",
    },
    {
      title: "Student Performance Prediction",
      description:
        "ML-based React tool predicting academic outcomes with 76% accuracy.",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Retail platform with secure payment and PostgreSQL database integration.",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((proj, idx) => (
          <div key={idx} className="card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
