import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { useReveal } from './hooks/useReveal';
import { sections } from './data/content';
import './styles/globals.scss';
import './styles/sections.scss';

const sectionIds = sections.map((s) => s.id);

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);
  useReveal();

  return (
    <>
      <Header activeSection={activeSection} theme={theme} onThemeToggle={toggleTheme} />
      <main className="page">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="footer">© {new Date().getFullYear()} Anas Tber</footer>
      </main>
    </>
  );
};

export default App;
