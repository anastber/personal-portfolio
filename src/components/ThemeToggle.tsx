import React from 'react';
import type { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      <span className="theme-toggle-label">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
};

export default ThemeToggle;
