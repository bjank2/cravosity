import './App.css';
import React from 'react';
import Screens from './Screens';
import LoginScreen from './Login';
import NewUser from './NewUser';
import Dietary from './Dietary';
import Habits from './DiningHabits';
import GroupDining from './GroupDining';
import Reserve from './Reserve';
import Home from './Home';
import Favorites from './Favorites';
import RestaurantInfo from './RestaurantInfo';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('Screens');
  const [screenData, setScreenData] = React.useState(null);

  const navigate = (screen, data = null) => {
    setCurrentScreen(screen);
    setScreenData(data);
  };

  return (
      <div className="App">
        {currentScreen === 'Screens' && <Screens onNavigate={navigate} />}
        {currentScreen === 'LoginScreen' && <LoginScreen onNavigate={navigate} />}
        {currentScreen === 'NewUser' && <NewUser onNavigate={navigate} />}
        {currentScreen === 'Dietary' && <Dietary onNavigate={navigate} />}
        {currentScreen === 'Habits' && <Habits onNavigate={navigate} />}
        {currentScreen === 'Home' && <Home onNavigate={navigate} />}
        {currentScreen === 'Favorites' && <Favorites onNavigate={navigate} />}
        {currentScreen === 'RestaurantInfo' && (
            <RestaurantInfo
                onNavigate={navigate}
                selectedRestaurant={screenData?.restaurant}
                selectedMenuItems={screenData?.menuItems}
            />
        )}
        {currentScreen === 'GroupDining' && <GroupDining onNavigate={navigate} />}
        {currentScreen === 'Reserve' && <Reserve onNavigate={navigate} />}
      </div>
  );
}

export default App;