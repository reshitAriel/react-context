import ChangeLanguage from "./ChangeLanguage";
import ChangeTheme from "./ChangeTheme";

const Buttons = () => {


    return (
        <div style={{display: 'flex', direction:'ltr'}}>
            <ChangeTheme />
            <ChangeLanguage />
        </div>
    );
}

export default Buttons;