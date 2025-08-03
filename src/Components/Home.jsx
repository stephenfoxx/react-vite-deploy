import React, { useState } from "react";
import {Link} from "react-router-dom"


function Home() {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleBounce = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Matches CSS animation duration
  };

  return (
    <section
      className="home-section"
      style={{ padding: "4rem 2rem", color: "white" }}
    >
      <div className="intro">
        <h2>Hello, I'm</h2>
        <h1>Stephen Ogwu</h1>
        <p>Front-End Developer | React Enthusiast | AI Explorer</p>
        <br />
        <div
          className={`cta-buttons ${isBouncing ? "bounce" : ""}`}
          onClick={handleBounce}
        >
          <Link to="/projects" className="btn">
            {" "}
            view Projects
          </Link>

          <Link to="/contact" className="btn">
            {" "}
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
