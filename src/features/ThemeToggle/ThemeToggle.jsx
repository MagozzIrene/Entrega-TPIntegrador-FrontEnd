import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ toggleTheme, isLight }) => {
    return (
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {isLight ? <Moon /> : <Sun />}
        </button>
    );
};

export default ThemeToggle;
