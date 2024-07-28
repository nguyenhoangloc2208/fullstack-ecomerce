import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import ThemeProvider from '../context/ThemeContext';
import { useEffect, useState } from 'react';
import { getInitialTheme } from '../utils/theme';

export default function RootPage() {
  const [priTheme, setPriTheme] = useState<'dark' | 'light'>(getInitialTheme());

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setPriTheme(initialTheme);
  }, []);
  console.log('root page');
  return (
    <ThemeProvider initialTheme={priTheme}>
      <div className="flex h-screen flex-col font-sans text-base font-medium transition-all delay-75 ease-in-out">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
