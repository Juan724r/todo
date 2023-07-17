import "./Header.css"
import ThemeChange from "../ThemeChange/ThemeChange"
import Logo from "../Logo/Logo"

function Header({theme, onThemeToggle }) {
    return (
      <header className='header'>
        <ThemeChange theme={theme} onThemeToggle={onThemeToggle} />
        <Logo />
      </header>
    );
  }
  
  export default Header;


