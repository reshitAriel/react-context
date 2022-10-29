//this component should have an input and a button that changes the username to the input's value
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

import { useState } from "react";

const UsernameChanger = () => {
    const [text, setText] = useState("");
    // 1. 👇 ask for function that will change the username

    // 2. 🌟 ask for the theme color and insert it to all ${''}

    
    return (
        <div className={`${''}-theme-clr`}>
            What is your name?<br /><br />
            <input value={text} onChange={e => setText(e.target.value)}/><br />
            <button className={`${''}-theme-button clickable`} onClick={() => {}} >change username</button>
        </div>
    );
}

export default UsernameChanger;