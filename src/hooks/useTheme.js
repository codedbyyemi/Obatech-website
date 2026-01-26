import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log('Checking theme on mount...');
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme from localStorage:', savedTheme);
    
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('System prefers dark:', systemPrefersDark);
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    console.log('Setting initial theme to:', initialTheme);
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    console.log('Document class after toggle:', document.documentElement.className);
  }, []);

  const toggleTheme = () => {
    console.log('Current theme before toggle:', theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('New theme after toggle:', newTheme);
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    console.log('Document class after toggle:', document.documentElement.className);
  };

  return { theme, toggleTheme };
};