// src/pages/Projects.jsx
import React from "react";
import tenzies from "/src/images/tenzies.png";
import svm from "/src/images/svm.png";
import jumia from "/src/images/jumia.png";
import { div, ul } from "framer-motion/client";

function Projects() {
  const projectList = [
    {
      title: "Student Performance Prediction",
      description:
        "ML-based React tool predicting academic outcomes with 76% accuracy.",
      url: "https://github.com/stephenfoxx/students-performance-prediction",
      url2: "https://youtu.be/BcD5XCGrOIk",
      img: svm,
      techstack: "HTML, CSS, JavaScript, Python, Bootstrap, Kaggle",
      features: (
        <ul>
          <li>analyzing student performance using support vector machines.</li>
          <li>
            examines various factors like demographic details, studey habits
            e.t.c to predict student performance measured by their g.p.a.
          </li>
        </ul>
      ),
    },

    {
      title: "Tenzies game web application",
      description:
        "An interractive fun game where you match all dice with same number to win.",
      url: "https://github.com/stephenfoxx/tenzies-game-app",
      url2: "https://glistening-churros-e8b5ed.netlify.app/",
      techstack: "React, CSS, JavaScript",

      features: (
        <ul>
          <li>Interractive fun game for all.</li>
          <li>Match all dice with the same number to win game.</li>
          <li>Calming and simple to play. </li>
        </ul>
      ),
      img: tenzies,
    },

    {
      title: "E-Commerce Web App",
      description:
        "Retail platform with secure payment and PostgreSQL database integration.",
      url: "https://github.com/stephenfoxx/E-commerce-web-app",
      img: jumia,
      techstack: "React, HTML, CSS, Tailwind, Node.js",
      features: (
        <ul>
          <li>
            user-friendly ecommerce site for shopping for alll kind of items.
          </li>
          <li>login and create account features.</li>
          <li>functionality with selecting and removing items from cart.</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>

      <div className="project-cards">
        {projectList.map((proj, index) => (
          <div className="general-card">
            <div key={index} className="project-card">
              <img src={proj.img} alt={proj.title} className="project-image" />

              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <p><strong className="bold">Tech Stack: </strong>{ proj.techstack}</p>
                <div className="features">
                  <p><strong className="bold">key features:</strong>{ proj.features}</p>
                </div>
                <div className="alinks">
                  <a href={proj.url2}
                  >Live Demo</a>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
