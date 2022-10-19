import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { FaSun, FaMoon } from 'react-icons/fa';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setIcon(!icon);
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <div className='btn' onClick={handleClick}>
            {!icon ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
