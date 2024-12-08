import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({children}) => {
  
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <themeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </themeContext.Provider>
  )
}

export const useTheme = () => useContext(themeContext);