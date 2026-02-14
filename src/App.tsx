import React, { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import './styles/globals.scss';
import './App.scss';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const navHeight = 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app ${theme}`}>
      <ParticleBackground />
      <Navigation theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <span className="code-text">© 2025 Anas Tber</span>
            </div>
            <div className="footer-right">
              <a 
                href="https://github.com/anastber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/anas-tber-99b994222/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="mailto:anas.tber@etu.ec-lyon.fr"
                className="footer-link"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;