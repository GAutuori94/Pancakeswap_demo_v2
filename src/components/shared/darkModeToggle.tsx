import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Home() {
  return (
    <div>
      <h1>Prova dark mode</h1>
      <div className="w-[200px] h-[200px] bg-primary dark:bg-failure">
      </div>
      <button><Toggle /></button>
    </div>
  )
}
export default Home


export function Toggle() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return <>
  <button onClick={toggleTheme}>Click to change mode</button>
  </>
}
