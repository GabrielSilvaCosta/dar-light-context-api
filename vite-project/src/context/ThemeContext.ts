type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

import { createContext } from "react";

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
