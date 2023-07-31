import "./ThemeChange.css"
import { ReactComponent as Icon } from "./sun.svg"

function ThemeChange({theme, onThemeToggle }) {
  return (
    <div className={`themechange ${theme === 'dark' ? 'active' : ''}`}>
        <a href="##" className="themelink" onClick={onThemeToggle}>
          <Icon className="icon"/>
        </a>
    </div>

  );
}

export default ThemeChange;

