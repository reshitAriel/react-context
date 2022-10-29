import UsernameChanger from "./components/UsernameChanger";
import UsernameDisplay from "./components/UsernameDisplay";
import Buttons from "./components/Buttons";
// import React from 'reasct'

import './App.css';
import React from 'react';

const App = () => {
  return (
    <>
      <UsernameChanger />
      <UsernameDisplay />
      <Buttons />
    </>
  );
}

export default App;