import { createContext, useContext } from "react";
import { useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('');

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    return <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
};

export const useTheme = (): ThemeContextType =>{
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}