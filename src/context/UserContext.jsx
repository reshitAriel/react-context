import React, { useContext, useState } from "react";
import { validateHebrew } from "../sub-functions/checkHebrew";
import { useTheme } from "./ThemeContext";

const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
    const { language } = useTheme();
    const [username, setUsername] = useState('Reshit');


    //! this function is only for later use
    const changeUsername = (str) => {
        console.log('now,', language);
        const isContainHeb = validateHebrew(str);
        if (language === 'hebrew' && isContainHeb) setUsername(str);
        else if (language === 'english' && !isContainHeb) setUsername(str);
        else setUsername('not in the right language');
    };

    return (
        <UserContext.Provider value={{ username, changeUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext)


