import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../styles/Footer.css';

function Footer() {
  const themeContext = useContext(ThemeContext);

  const footerClass = `footer ${themeContext.theme}-theme`;

  return (
    <footer className={footerClass}>
      Tema Atual: {themeContext.theme}
    </footer>
  );
}

export default Footer;
