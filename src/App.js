import './App.css';
import React, {useState} from 'react';
import Screens from './Screens';
import LoginScreen from './Login';
import NewUser from './NewUser';
import Dietary from './Dietary';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('Screens');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === 'Screens' && <Screens onNavigate={navigate} />}
      {currentScreen === 'LoginScreen' && <LoginScreen onNavigate={navigate} />}
      {currentScreen === 'NewUser' && <NewUser onNavigate={navigate} />}
      {currentScreen === 'Dietary' && <Dietary onNavigate={navigate} />}

    </div>
  )
}

export default App;
