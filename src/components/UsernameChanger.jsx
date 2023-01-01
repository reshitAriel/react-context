import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { useTranslate } from "../hooks/useTranslate";

const UsernameChanger = () => {
    const [text, setText] = useState("");
    const { changeUsername } = useUser();
    const { theme } = useTheme();
    const translate = useTranslate();

    return (
        <div className={`${theme}-theme-clr`}>
            <span>{translate('whatYourName')}</span>
            <br /><br />
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <button className={`${theme}-theme-button clickable`} onClick={() => { changeUsername(text); }}>{translate('changeUsername')}</button>
        </div>
    );
};

export default UsernameChanger;