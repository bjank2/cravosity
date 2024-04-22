import React from 'react';
import './App.css';

function Favorites({ onNavigate }) {
    return (
        <div className="Favorites">
            <div className="content">
                <header className="header2">
                    <div className="button-center">
                    <h2>My Favorites</h2>

                    </div>
                </header>
                <div className="favorites-section">
                    <h4>Restaurants</h4>
                    <div className="restaurant-container">
                        <div className="restaurant-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Busy Burger', menuItems: ['Impossible Burger'] })}>
                            <img src={require("./images/restaurant1.jpg")} alt="Favorite Restaurant 1" />
                            <p>Busy Burger</p>
                        </div>
                        <div className="restaurant-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Stax Cafe', menuItems: ['Blueberry Pancakes'] })}>
                            <img src={require("./images/restaurant2.png")} alt="Favorite Restaurant 2" />
                            <p>Stax Cafe</p>
                        </div>
                    </div>
                    <h4>Dishes</h4>
                    <div className="dish-container">
                        <div className="dish-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Busy Burger', menuItems: ['Impossible Burger'] })}>
                            <img src={require("./images/menu1.png")} alt="Favorite Dish 1" />
                            <p>Impossible Burger</p>
                        </div>
                        <div className="dish-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Stax Cafe', menuItems: ['Blueberry Pancakes'] })}>
                            <img src={require("./images/menu2.png")} alt="Favorite Dish 2" />
                            <p>Blueberry Pancakes</p>
                        </div>
                    </div>
                </div>
                <div className="button-center">
                <button onClick={() => onNavigate('Home')} className="orange-button">Back</button>
                <button onClick={() => onNavigate('MyDiningGroups')} className="orange-button">Group Dining</button>

                </div>
            </div>
        </div>
    );
}

export default Favorites;