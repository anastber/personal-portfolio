import React from 'react';
import './ThemeToggle.scss';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`toggle-track ${theme}`}>
        <div className="toggle-thumb">
          <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;