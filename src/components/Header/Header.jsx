import "./Header.css"
import ThemeChange from "../ThemeChange/ThemeChange"
import Logo from "../Logo/Logo"

function Header({theme, onThemeToggle }) {
    return (
      <header className='header'>
        <Logo />
        <ThemeChange theme={theme} onThemeToggle={onThemeToggle} />
      </header>
    );
  }
  
  export default Header;


