import "./ThemeChange.css"

function ThemeChange({theme, onThemeToggle }) {
  return (
    <div className={`themechange ${theme === 'dark' ? 'active' : ''}`}>
        <a href="#" className="themelink" onClick={onThemeToggle}>
          <div>Сменить тему</div>
        </a>
    </div>

  );
}

export default ThemeChange;

