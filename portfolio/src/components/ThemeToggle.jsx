import React from "react";
import "./themetoggle.css";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
  };

  return (
    <button onClick={toggle} aria-label="Toggle Theme" id="theme-toggle">
      <div className={`toggle-icon ${dark ? "dark-active" : ""}`}>
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </div>
    </button>
  );
}
