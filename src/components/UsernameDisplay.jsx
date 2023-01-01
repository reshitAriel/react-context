import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const UsernameDisplay = () => {

    const { username } = useUser();
    const { theme } = useTheme();

    return (
        <div className={`${theme}-theme-clr`}>
            {username}
        </div>
    );
};

export default UsernameDisplay;