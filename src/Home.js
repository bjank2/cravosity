import React from 'react';
import './App.css';

function Home({ onNavigate }) {
    return (
        <div className="Home">
            <div className="content">
                <header className="header">
                    <h1>Find Food</h1>
                    <input type="text" placeholder="Search..." className="search-bar" />
                </header>
                <div className="dropdown-section">
                    <select className="orange-dropdown">
                        <option value="">Occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate-lunch">Corporate Lunch</option>
                        <option value="quick-bite">Quick Bite</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="networking">Networking</option>
                    </select>
                    <select className="orange-dropdown">
                        <option value="">Price</option>
                        <option value="0-10">$0 to $10</option>
                        <option value="10-25">$10 to $25</option>
                        <option value="25-35">$25 to $35</option>
                        <option value="35+">$35+</option>
                    </select>
                    <select className="orange-dropdown">
                        <option value="">Distance</option>
                        <option value="1">Within 1 mile</option>
                        <option value="2">Within 2 miles</option>
                        <option value="3">Within 3 miles</option>
                        <option value="3+">Over 3 miles</option>
                    </select>
                    <select className="orange-dropdown">
                        <option value="">Rating</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                    </select>
                </div>
                <button onClick={() => onNavigate('Favorites')} className="FavButton">My Favorites</button>
                <div className="recommended-section">
                    <h4>Restaurants For You</h4>
                    <div className="restaurant-container">
                        <div className="restaurant-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Busy Burger', menuItems: ['Impossible Burger'] })}>
                            <img src={require("./images/restaurant1.jpg")} alt="Restaurant 1" />
                            <p>Busy Burger</p>
                        </div>
                        <div className="restaurant-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Stax Cafe', menuItems: ['Blueberry Pancakes'] })}>
                            <img src={require("./images/restaurant2.png")} alt="Restaurant 2" />
                            <p>Stax Cafe</p>
                        </div>
                    </div>
                    <h4>Dishes Recommended For You</h4>
                    <div className="dish-container">
                        <div className="dish-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Busy Burger', menuItems: ['Impossible Burger'] })}>
                            <img src={require("./images/menu1.png")} alt="Dish 1" />
                            <p>Impossible Burger</p>
                        </div>
                        <div className="dish-item" onClick={() => onNavigate('RestaurantInfo', { restaurant: 'Stax Cafe', menuItems: ['Blueberry Pancakes'] })}>
                            <img src={require("./images/menu2.png")} alt="Dish 2" />
                            <p>Blueberry Pancakes</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => onNavigate('GroupDining')} className="orange-button">Group Dining</button>
            </div>
        </div>
    );
}

export default Home;

