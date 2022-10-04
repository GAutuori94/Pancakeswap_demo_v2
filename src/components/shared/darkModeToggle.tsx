import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Home() {
  return (
    <div>
      <h1>Prova dark mode</h1>
      <div className="w-[200px] h-[200px] bg-primary dark:bg-failure"></div>
      <Toggle />
    </div>
  );
}
export default Home;



export function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <label className="toggleDarkBtn ml-10">
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
