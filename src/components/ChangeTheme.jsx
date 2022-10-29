//this component should render a button that toggles the theme when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

import React from "react";
   // 1. 👇 ask for function to toggle the theme

    // 2. 🌟 ask for the theme color and insert it to all ${''}
const ChangeTheme = () => {
    return ( 
        <div className={`${''}-theme-clr`}>
            <button className={`${''}-theme-button clickable`} onClick={()=>{}}>dark</button>
        </div>
     );
}
 
export default ChangeTheme;