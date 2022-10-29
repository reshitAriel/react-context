//this component should render the current username

import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const UsernameDisplay = () => {

    const {username} = useUser()
    const {theme} = useTheme()

    return (
        <div className={`${theme}-theme-clr`}> {/* the button's color should match the current theme */}
            {username}
        </div>
    );
}

export default UsernameDisplay;