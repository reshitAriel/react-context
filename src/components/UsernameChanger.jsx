//this component should have an input and a button that changes the username to the input's value
//the text in the component should be in the current language of the website, and the classnames should correspond with the current theme

const UsernameChanger = () => {


    // const [text, setText] = useState("");

    return (
        <div className={`-theme-clr`}>
            What is your name?<br /><br />
            <input /><br />
            <button className={`-theme-button`}>change username</button>
        </div>
    );
}

export default UsernameChanger;