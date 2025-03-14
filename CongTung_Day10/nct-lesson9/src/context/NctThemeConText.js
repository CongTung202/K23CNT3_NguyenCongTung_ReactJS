import { createContext, useState, useContext } from "react";

const NctContext = createContext();

export function NctThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const NctToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <NctContext.Provider value={{ theme, NctToggleTheme }}>
      <div className={theme}>{children}</div>
    </NctContext.Provider>
  );
}

export function useTheme() {
  return useContext(NctContext);
}
