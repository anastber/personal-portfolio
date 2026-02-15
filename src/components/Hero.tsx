import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import './Hero.scss';

const Hero: React.FC = () => {
  const roles = [
    'Data Scientist Intern @ BNP Paribas CIB',
    'Engineering Student @ Centrale Lyon',
    'AI & Machine Learning Enthusiast',
  ];

  const currentRole = useTypewriter({
    texts: roles,
    speed: 80,
    deleteSpeed: 40,
    delayBetweenTexts: 2500
  });

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="code-text">const datascientist = {`{`}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Anas Tber</span>
          </h1>

          <div className="hero-subtitle">
            <span className="code-text">role: "</span>
            <span className="typewriter-text">{currentRole}</span>
            <span className="cursor">|</span>
            <span className="code-text">"</span>
          </div>

          <div className="hero-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Paris, France</span>
          </div>

          <p className="hero-description">
            Passionate engineering student at Centrale Lyon currently working as a Data Scientist intern
            at BNP Paribas CIB (until July 2026). Experienced in AI, machine learning, and full-stack
            development.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a
              href="assets/documents/CV_English_T_version.pdf"
              download
              className="btn btn-secondary"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/anas-tber-99b994222/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-btn-linkedin"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/anastber"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn social-btn-github"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="mailto:anas.tber@etu.ec-lyon.fr"
              className="social-btn social-btn-email"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="hero-closing">
            <span className="code-text">{`}`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;