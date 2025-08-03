import React from "react";


function Experience() {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="job">
        <h3>Front-End Developer - Bizmarrow Technologies</h3>
        <p>
          <em>Sep 2021 – Aug 2023</em>
        </p>
        <ul className="ex-lists">
          <li>
            Delivered a high-performing e-commerce shopping platform (React.js,
            Tailwind, PostgreSQL) for key retail client, integrating secure
            payment gateways and an AI-powered product recommendation engine;
            boosted online sales by 25% and elevated customer engagement.
          </li>
          <li>
            Slashed website loading time by 30% through strategic React lazy
            loading and performance optimization techniques, boosting site
            efficiency and user retention.
          </li>
          <li>
            Spearheaded the migration of legacy code to a modern React
            framework, enhancing scalability and maintainability, paving the way
            for future-proof applications.
          </li>
          <li>
            Collaborated closely with back-end teams to integrate REST API’s,
            ensuring smooth data flow which improved operational efficiency and
            minimized redundancies by 20%
          </li>
          <li>
            Conducted thorough reviews and UI enhancements, significantly
            improving application quality, usability, and end-user satisfaction
            metrics.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
