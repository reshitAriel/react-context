//make a context called userContext and a context provider component. 
//the context should control the username
//the values that are provided to the context should be: username, setUsername

import React, { useContext, useState } from "react"
import { validateHebrew } from "../sub-functions/checkHebrew"
import { useTheme } from "./ThemeContext"

// 1: 👇create the Context
const UserContext = React.createContext({})

// 2: 👇create the Provider Component 
export const UserProvider = ({ children }) => {
    const { language } = useTheme()
    const [username, setUsername] = useState('miriam')


    //! this function is only for later use
    const changeUsername = (str) => {
        console.log('now,', language)
        const isContainHeb = validateHebrew(str)
        if (language === 'hebrew' && isContainHeb) setUsername(str)
        else if (language === 'english' && !isContainHeb) setUsername(str)
        else setUsername('not in the right language')
    }

    return (
        <UserContext.Provider value={{ username, changeUsername }}>
            {children}
        </UserContext.Provider>
    )
}

// (recommended step) : create custom hook 👇 
export const useUser = () => useContext(UserContext)


