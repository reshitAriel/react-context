//this component should render a button that toggles the language when clicked.
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

const ChangeLanguage = () => {

    return ( 
        <div className={`-theme-clr`}>
            <button className={`-theme-button`}>hebrew</button>
        </div>
     );
}
 
export default ChangeLanguage;