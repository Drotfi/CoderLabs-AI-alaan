// components/Layout.tsx
import React from 'react';
import { useState } from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My App</div>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-700 px-4 py-2 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <div className="glass p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;