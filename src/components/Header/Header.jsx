import "./Header.css"
import Title from "../Title/Title";
import ThemeChange from "../ThemeChange/ThemeChange"
import Menu from "../Menu/Menu";

function Header({theme, onThemeToggle }) {
    return (
      <header className='header'>
        <Title/>
        <ThemeChange theme={theme} onThemeToggle={onThemeToggle} />
      </header>
    );
  }
  
  export default Header;


