import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { useTranslate } from "../hooks/useTranslate";

const ChangeLanguage = () => {

    const { theme } = useTheme();
    const { toggleLanguage, language } = useLanguage();
    const translate = useTranslate();

    return (
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button clickable`} onClick={toggleLanguage}>{translate('langName')}</button>
        </div>
    );
};

export default ChangeLanguage;