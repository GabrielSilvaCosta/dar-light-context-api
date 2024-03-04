

import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.css';

function Header() {
  const themeContext = useContext(ThemeContext);

  const headerClass = `header ${themeContext.theme}-theme`;
  const buttonClass = `button ${themeContext.theme === 'dark' ? 'moon' : 'sun'}`;

  return (
    <header className={headerClass}>
      <h1 className="title">Dark-Light</h1>
      <button className={buttonClass} onClick={() => themeContext.toggleTheme()}>
        {themeContext.theme === 'dark' ? '🌒' : '☀️'}
      </button>
    </header>
  );
}

export default Header;
