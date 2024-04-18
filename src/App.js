import './App.css';
import React from 'react';
import Screens from './Screens';
import LoginScreen from './Login';
import NewUser from './NewUser';
import Dietary from './Dietary';
import Habits from './DiningHabits';
import GroupDining from './GroupDining';
import Reserve from './Reserve';

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
      {currentScreen === 'Habits' && <Habits onNavigate={navigate} />}
      {currentScreen === 'GroupDining' && <GroupDining onNavigate={navigate} />}
      {currentScreen === 'Reserve' && <Reserve onNavigate={navigate} />}
    </div>
  );
}

export default App;