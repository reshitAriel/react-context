//this component should render a button that toggles the theme when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

const ChangeTheme = () => {

    return ( 
        <div className={`-theme-clr`}>
            <button className={`-theme-button`}>dark</button>
        </div>
     );
}
 
export default ChangeTheme;