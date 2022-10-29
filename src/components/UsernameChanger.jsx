//this component should have an input and a button that changes the username to the input's value
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const UsernameChanger = () => {


    const [text, setText] = useState("");
    const {changeUsername} = useUser();
    const {theme} = useTheme();

    return (
        <div className={`${theme}-theme-clr`}>
            What is your name?<br /><br />
            <input value={text} onChange={e => setText(e.target.value)}  /><br />
            <button className={`${theme}-theme-button clickable`} onClick={()=> {changeUsername(text)}} >change username</button>
        </div>
    );
}

export default UsernameChanger;