export const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    console.log(
      storedPrefs,
      'check ist type:  ',
      Boolean(typeof storedPrefs === 'string'),
    );
    if (storedPrefs && ['dark', 'light'].includes(storedPrefs)) {
      return storedPrefs as 'dark' | 'light';
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light';
};
