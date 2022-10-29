//this component should render a button that toggles the theme when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

import { useTheme } from "../context/ThemeContext";
import React from "react";

const ChangeTheme = () => {
    const {theme, toggleTheme} = useTheme()
    return ( 
        <div className={`${theme}-theme-clr`}>
            <button className={`${theme}-theme-button clickable`} onClick={toggleTheme}>dark</button>
        </div>
     );
}
 
export default ChangeTheme;