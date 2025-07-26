// src/pages/Projects.jsx
import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Chef Recipe Web Application",
      description: "AI-powered app that suggests recipes based on ingredients.",
      url: "https://github.com/stephenfoxx/mamaflow-recipe-app",
    },
    {
      title: "Student Performance Prediction",
      description:
        "ML-based React tool predicting academic outcomes with 76% accuracy.",
      url: "https://github.com/stephenfoxx/students-performance-prediction",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Retail platform with secure payment and PostgreSQL database integration.",
      url: "https://github.com/stephenfoxx/E-commerce-web-app",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectList.map((proj, idx) => (
          <a
            key={idx}
            className="card"
            href={proj.url}
            >

            
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
