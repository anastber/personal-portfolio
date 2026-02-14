import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Navigation.scss';

interface NavigationProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, onThemeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          <span className="code-text">anas.tber()</span>
        </a>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;