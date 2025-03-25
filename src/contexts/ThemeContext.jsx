import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/theme";

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("isDarkMode");
    if (storedTheme !== null) return storedTheme === "true";

    // If no preference, use system theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Sync with localStorage whenever `isDarkMode` changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme anywhere in the app
export const useTheme = () => useContext(ThemeContext);
