import React from 'react';
import ThemeToggle from './ThemeToggle';
import { sections } from '../data/content';
import { useScrolled } from '../hooks/useScrolled';
import type { Theme } from '../hooks/useTheme';
import './Header.scss';

interface HeaderProps {
  activeSection: string;
  theme: Theme;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, theme, onThemeToggle }) => {
  const scrolled = useScrolled(150);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="header-logo display" href="#top" tabIndex={scrolled ? 0 : -1}>
          Anas Tber
        </a>
        <nav className="header-nav" aria-label="Sections">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : undefined}>
              <span className="roll">
                <span>{label}</span>
                <span aria-hidden="true">{label}</span>
              </span>
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
};

export default Header;
