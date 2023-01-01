import React, { useContext, useState } from "react";

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            <div className={`${theme}-theme-bg`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);