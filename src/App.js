import './App.css';
import React, {useState} from 'react';
import Screens from './Screens';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('Screens');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === 'Screens' && <Screens onNavigate={navigate} />}
    </div>
  )
}

export default App;
