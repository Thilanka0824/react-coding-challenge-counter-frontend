import React, { createContext, useContext, useState } from "react";
import ClassHome from "../components/ClassHome";
import { ThemeContext } from "../context/ThemeContext";
import "../components/ClassHome.css"

// const ThemeContext = createContext(null);

const LoginContextPage = () => {
    const [theme, setTheme] = useState('dark')
    let words = 'Yo!'
  return (
    <div>
      <ThemeContext.Provider value={{
        theme,
        setTheme,
        words,
      }}>
        <h1>Login: </h1>
        <ClassHome />
      </ThemeContext.Provider>
    </div>
  );
};

export {LoginContextPage};
