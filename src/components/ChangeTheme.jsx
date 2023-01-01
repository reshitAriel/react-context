import { useTheme } from "../context/ThemeContext";
import React from "react";
import { useTranslate } from "../hooks/useTranslate";

const ChangeTheme = () => {
    const { theme, toggleTheme } = useTheme();
    const translate = useTranslate();

    return (
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button clickable`} onClick={toggleTheme}>{translate(theme === 'dark' ? 'light' : 'dark')}</button>
        </div>
    );
};

export default ChangeTheme;