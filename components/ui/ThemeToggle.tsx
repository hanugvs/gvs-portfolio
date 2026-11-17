'use client';

import { Moon, Sun } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full bg-white/5 p-2 text-ink transition hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
