import React from 'react';
import './App.css';

function Favorites({ onNavigate }) {
    return (
        <div className="Favorites">
            <div className="content">
                <header className="header">
                    <button onClick={() => onNavigate('Home')} className="orange-button">Back</button>
                    <h1>My Favorites</h1>
                </header>
                <div className="favorites-section">
                    <h4>Restaurants</h4>
                    <div className="restaurant-container">
                        <div className="restaurant-item">
                            <img src={require("./images/restaurant1.jpg")} alt="Favorite Restaurant 1" />
                            <p>Busy Burger</p>
                        </div>
                        <div className="restaurant-item">
                            <img src={require("./images/restaurant2.png")} alt="Favorite Restaurant 2" />
                            <p>Stax Cafe</p>
                        </div>
                    </div>
                    <h4>Dishes</h4>
                    <div className="dish-container">
                        <div className="dish-item">
                            <img src={require("./images/menu1.png")} alt="Favorite Dish 1" />
                            <p>Impossible Burger</p>
                        </div>
                        <div className="dish-item">
                            <img src={require("./images/menu2.png")} alt="Favorite Dish 2" />
                            <p>Blueberry Pancakes</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => onNavigate('GroupDining')} className="orange-button">Group Dining</button>
            </div>
        </div>
    );
}

export default Favorites;