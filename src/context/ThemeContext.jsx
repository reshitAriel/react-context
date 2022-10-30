//make a context called themeContext and a context provider component. 
//the context should control the language of the website and the theme (dark/light)
//the values that are provided to the context should be: language, toggleLanguage, theme, toggleTheme

import React, { useContext, useState } from "react"

const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('english')

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'hebrew' ? 'english' : 'hebrew')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            language,
            toggleTheme,
            toggleLanguage
        }}>
            <div className={`${theme}-theme-bg`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)