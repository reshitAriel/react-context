import React, { useContext, useState } from "react";

const LanguageContext = React.createContext({});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('english');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'hebrew' ? 'english' : 'hebrew');
    };

    return (
        <LanguageContext.Provider value={{
            language,
            toggleLanguage
        }}>
            <div>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);