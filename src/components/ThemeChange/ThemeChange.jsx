import "./ThemeChange.css"
import { ReactComponent as Icon } from "./Theme.svg"

function ThemeChange({theme, onThemeToggle }) {
  return (
    <div className={`themechange ${theme === 'dark' ? 'active' : ''}`}>
        <a href="##" className="themelink" onClick={onThemeToggle}>
          <div>Change Theme</div>
          {/* <Icon/> */}
        </a>
    </div>

  );
}

export default ThemeChange;

