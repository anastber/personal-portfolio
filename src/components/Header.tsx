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

const NAME = 'Anas Tber';

const Header: React.FC<HeaderProps> = ({ activeSection, theme, onThemeToggle }) => {
  const scrolled = useScrolled(150);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="header-logo" href="#top" aria-label="Anas Tber, back to top">
          {[...NAME].map((char, i) =>
            char === ' ' ? (
              <span key={i} className="space" />
            ) : (
              <span key={i} className="char" style={{ '--i': i } as React.CSSProperties} aria-hidden="true">
                {char}
              </span>
            )
          )}
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
