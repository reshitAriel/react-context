//this component should render a button that toggles the language when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme
import React from "react";

const ChangeLanguage = () => {
    // 1. 🌟 ask for the theme color and insert it to all ${''}

    // 2. 🔥 ask for function to toggle the language and the current text in the button should be in the current language
    return (
        <div className={`${''}-theme-clr`}>
            <button className={`${''}-theme-button clickable`} onClick={()=>{}}>english</button>
        </div>
    );
}

export default ChangeLanguage;