import { createContext, ReactNode, useEffect, useState } from 'react';
import { getInitialTheme } from '../utils/theme';

interface ThemeContextProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

interface ThemeProviderProps {
  initialTheme?: 'dark' | 'light';
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    initialTheme || getInitialTheme(),
  );

  const rawSetTheme = (theme: 'dark' | 'light') => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  };

  useEffect(() => {
    if (initialTheme) {
      rawSetTheme(initialTheme);
    } else {
      const initial = getInitialTheme();
      setTheme(initial);
      rawSetTheme(initial);
    }
  }, [initialTheme]);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
