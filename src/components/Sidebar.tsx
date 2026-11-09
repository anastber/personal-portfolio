import React from 'react';
import RotatingWords from './RotatingWords';
import ThemeToggle from './ThemeToggle';
import { links, rotatingWords, sections } from '../data/content';
import type { Theme } from '../hooks/useTheme';
import './Sidebar.scss';

interface SidebarProps {
  activeSection: string;
  theme: Theme;
  onThemeToggle: () => void;
}

const NAME = 'Anas Tber';

const Sidebar: React.FC<SidebarProps> = ({ activeSection, theme, onThemeToggle }) => (
  <aside className="sidebar" id="home">
    <h1 className="sidebar-name display" aria-label={NAME}>
      {[...NAME].map((char, i) =>
        char === ' ' ? (
          <span key={i} className="space" />
        ) : (
          <span key={i} className="char" style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
            {char}
          </span>
        )
      )}
    </h1>

    <p className="sidebar-role display">
      I build <RotatingWords words={rotatingWords} />,
      <br />
      from the model to production.
    </p>

    <p className="sidebar-status">
      Final-year engineering student at Centrale Lyon, focused on software and AI engineering
    </p>

    <nav className="sidebar-nav" aria-label="Sections">
      {sections.map(({ id, label }) => (
        <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : undefined}>
          <span className="roll">
            <span>{label}</span>
            <span aria-hidden="true">{label}</span>
          </span>
        </a>
      ))}
    </nav>

    <div className="sidebar-foot">
      <div className="sidebar-links">
        <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={links.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
      </div>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </div>
  </aside>
);

export default Sidebar;
