import { main, section } from "framer-motion/client";
import React from "react";


function Skills() {
  return (

    <section className="skills-section">
      <div className="skills-container">
      <h2 className="sc">Skills</h2>
        <div>
          <h3 className="skh3">Technical Skills</h3>
          <div className="skill-div">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React.js</div>
            <div className="skill">C#</div>
            <div className="skill">Python</div>
            <div className="skill">Reat Api's</div>
            <div></div>
          </div>
        </div>
        <div>
          <h3 className="skh3">Tools & Platforms</h3>
          <div className="skill-div2">
            <div className="skill3">Jupyter Notebook</div>
            <div className="skill">Trello</div>
            <div className="skill">Slack</div>
          </div>
        </div>
        <div>
          <h3 className="skh3">Soft Skills</h3>
          <div className="skill-div3">
            <div className="skill3">Communication</div>
            <div className="skill3">Teamwork</div>
            <div className="skill3">Problem-solving</div>
            <div className="skill3">Critical Thinking</div>
            <div className="skill3">Adaptability</div>
            
            <div></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Skills;
