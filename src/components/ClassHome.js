import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../components/ClassHome.css";

const ClassHome = () => {
  const { theme, setTheme, words } = useContext(ThemeContext);
  const funcAlert = () => alert(words)
  
  // const toggleTheme = () => {
  //   if(theme === 'dark') {
  //     setTheme("light")
  //   } else {
  //     setTheme("dark")
  //   }
  // }

const toggleTheme = () => {
  setTheme(theme === 'dark' ? 'light' : 'dark')
}
  return (
    <>
      <div className={theme}>Home</div>
      <button className="add-blank-button" onClick={toggleTheme}>
        Change Theme
      </button>
      <p>{theme}</p>
      <p>{words}</p>
      <button onClick={() => funcAlert()}>Funk</button>
    </>
  );
};

export default ClassHome;
