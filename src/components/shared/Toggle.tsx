import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <label className="toggleDarkBtn">
        <input
          type="checkbox"
          className="input_darkMode"
          onClick={toggleTheme}
        />
        <span className="sliderDarkMode"></span>
      </label>
    </>
  );
}
