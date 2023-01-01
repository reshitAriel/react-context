import { useLanguage } from "../context/LanguageContext";
import { en } from "../translations/en";
import { he } from "../translations/he";

export const useTranslate = () => {
    const { language } = useLanguage();

    const translate = (key) => {
        const langObj = language === 'english' ? en : he;
        return langObj[key];
    };

    return translate;
};