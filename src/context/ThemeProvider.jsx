import { themeToggle } from '@/utils/themeToggle';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('');

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    themeToggle(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
