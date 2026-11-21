"use client";

import { useState } from "react";
import {
  Code,
  Palette,
  Globe,
  Atom,
  Monitor,
  Laptop,
  Mail,
  GraduationCap,
  Award,
  Sun,
  Moon
} from "lucide-react";

import "./globals.css";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    setStatus("Thank you! Your message is ready.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <main className={dark ? "dark" : ""}>

      {/* NAVBAR */}

      <nav className="navbar">
        <h2>MyPortfolio.</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          {dark ? " Light Mode" : " Dark Mode"}
        </button>
      </nav>

      {/* HOME */}

      <section className="hero" id="home">

        <div className="hero-content">
          <p>Hello, I'm</p>

          <h1>Sudarshini Gowda</h1>

          <h2>Engineering Student | Web Developer</h2>

          <p>
            Welcome to my personal portfolio website.
            I am passionate about learning technology
            and creating useful projects.
          </p>

          <a className="btn" href="#about">
            Explore More
          </a>
        </div>

        <div className="profile-placeholder">
          <div className="profile-circle">
            SG
          </div>

          <p>Welcome to my Portfolio</p>
        </div>

      </section>

      {/* ABOUT */}

      <section id="about">
        <h2>About Me</h2>

        <p>
          Hello! I am Sudarshini Gowda, an engineering
          student passionate about technology and
          web development. I enjoy learning new skills,
          exploring creative ideas and building projects.
          My goal is to improve my technical knowledge
          and grow as a professional.
        </p>
      </section>

      {/* SKILLS */}

      <section id="skills">
        <h2>My Skills</h2>

        <p className="section-subtitle">
          Technologies and programming languages I am learning.
        </p>

        <div className="cards skills-grid">

          <div className="card skill-card">
            <Globe size={38} />
            <h3>HTML</h3>
            <p>Building webpage structures</p>
          </div>

          <div className="card skill-card">
            <Palette size={38} />
            <h3>CSS</h3>
            <p>Styling and designing websites</p>
          </div>

          <div className="card skill-card">
            <Code size={38} />
            <h3>JavaScript</h3>
            <p>Adding interactivity to websites</p>
          </div>

          <div className="card skill-card">
            <Atom size={38} />
            <h3>React</h3>
            <p>Learning component-based development</p>
          </div>

          <div className="card skill-card">
            <Monitor size={38} />
            <h3>Next.js</h3>
            <p>Building modern web applications</p>
          </div>

          <div className="card skill-card">
            <Laptop size={38} />
            <h3>C Programming</h3>
            <p>Learning programming fundamentals</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}

      <section id="projects">
        <h2>My Projects</h2>

        <p className="section-subtitle">
          Some of my learning and development projects.
        </p>

        <div className="cards projects-grid">

          <div className="card project-card">

            <div className="project-icon">
              <Code size={40} />
            </div>

            <h3>Personal Portfolio Website</h3>

            <p>
              A responsive personal portfolio website
              developed to showcase my profile, skills
              and projects.
            </p>

            <div className="tech-tags">
              <span>Next.js</span>
              <span>React</span>
              <span>CSS</span>
            </div>

            <p className="project-status">
              Academic Project
            </p>

          </div>

        </div>
      </section>

      {/* EXPERIENCE */}

      <section id="experience">
        <h2>My Experience</h2>

        <p className="section-subtitle">
          My academic learning journey.
        </p>

        <div className="card journey-card">

          <div className="journey-icon">
            <GraduationCap size={42} />
          </div>

          <h3>Engineering Student</h3>

          <p className="journey-year">
            Academic Learning
          </p>

          <p>
            Learning programming, web development and
            software technologies through engineering
            coursework and practical projects.
          </p>

        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section id="achievements">
        <h2>My Achievements</h2>

        <p className="section-subtitle">
          Every step is a part of my growth.
        </p>

        <div className="card journey-card">

          <div className="journey-icon">
            <Award size={42} />
          </div>

          <h3>Continuous Learning</h3>

          <p>
            Improving my technical knowledge,
            exploring new technologies and developing
            practical skills through projects.
          </p>

        </div>
      </section>

      {/* CONTACT */}

      <section id="contact">
        <h2>Get In Touch</h2>

        <p className="section-subtitle">
          Have a question or want to connect? Send me a message.
        </p>

        <div className="contact-card">

          <h3>Let's Connect!</h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              <Mail size={17} />
              Send Message
            </button>

            <p>{status}</p>

          </form>

        </div>
      </section>

      {/* FOOTER */}

     <footer className="footer">
  <h2>Sudarshini Gowda</h2>

  <p>Engineering Student | Web Developer</p>

  <div className="social-links">
    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <Code size={22} />
    </a>

    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <Mail size={22} />
    </a>
  </div>

  <p className="copyright">
    © 2026 Sudarshini Gowda. All Rights Reserved.
  </p>
</footer>
    </main>
  );
}