//this component should render a button that toggles the language when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
import React from "react";
import { useTheme } from "../context/ThemeContext";
const ChangeLanguage = () => {

    const { theme, toggleLanguage, language } = useTheme()

    return (
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button clickable`} onClick={toggleLanguage}>{language === 'hebrew' ? 'hebrew' : 'english'}</button>
        </div>
    );
}

export default ChangeLanguage;