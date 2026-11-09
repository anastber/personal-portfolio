import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  const current = document.documentElement.dataset.theme;
  if (current === 'light' || current === 'dark') return current;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage unavailable: the choice lasts for this visit only
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
};
