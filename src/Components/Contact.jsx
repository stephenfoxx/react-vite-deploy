import React from "react";


function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="links">
        <a
          href="https://linkedin.com/in/stephen-ogwu-3a567826b" 
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/stephenfoxx/stephen"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
