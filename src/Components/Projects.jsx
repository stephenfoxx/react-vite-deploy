// src/pages/Projects.jsx
import React from "react";
import chefflow from "/src/images/chefflow.png";
import svm from "/src/images/svm.png";
import jumia from "/src/images/jumia.png";
import { div, ul } from "framer-motion/client";

function Projects() {
  const projectList = [
    {
      title: "Chef Recipe Web Application",
      description: "AI-powered app that suggests recipes based on ingredients.",
      url: "https://github.com/stephenfoxx/recipeapp",
      techstack: "React, CSS, Hugging face AI",

      features: (
        <ul>
          <li>generates recipe based on ingredients inputted.</li>
          <li>gives step by step guide to prepare recipe of meal derived.</li>
          <li>free and easiliy accessible to use.</li>
        </ul>
      ),
      img: chefflow,
    },
    {
      title: "Student Performance Prediction",
      description:
        "ML-based React tool predicting academic outcomes with 76% accuracy.",
      url: "https://github.com/stephenfoxx/students-performance-prediction/tree/master",
      img: svm,
      techstack: "HTML, CSS, JavaScript, Bootstrap, Kaggle",
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
                  <a href="">Live Demo</a>
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
