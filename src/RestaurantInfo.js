// RestaurantInfo.js
import React from 'react';
import './App.css';

function RestaurantInfo({ onNavigate, selectedRestaurant, selectedMenuItems }) {
    const getRestaurantImage = (restaurantName) => {
        switch (restaurantName) {
            case 'Busy Burger':
                return require("./images/restaurant1.jpg");
            case 'Stax Cafe':
                return require("./images/restaurant2.png");
            default:
                return null;
        }
    };

    const getMenuItems = (restaurantName) => {
        switch (restaurantName) {
            case 'Busy Burger':
                return ['Impossible Burger', 'Cod Fish'];
            case 'Stax Cafe':
                return ['Blueberry Pancakes', 'Nutella & Berry'];
            default:
                return [];
        }
    };

    const getMenuItemImage = (menuItem) => {
        switch (menuItem) {
            case 'Impossible Burger':
                return require("./images/menu1.png");
            case 'Blueberry Pancakes':
                return require("./images/menu2.png");
            case 'Cod Fish':
                return require("./images/menu3.png");
            case 'Nutella & Berry':
                return require("./images/menu4.jpg");
            default:
                return null;
        }
    };
    const getMenuItemDescription = (menuItem) => {
        switch (menuItem) {
            case 'Impossible Burger':
                return '$9.99\n' +
                    '.........................................................................................................................................................................................................................................................\n' +
                    'Plant-Based Pattie, Leaf Lettuce, Tomato, Dill Pickle, Red Onion or Grilled Onion, Spicy Busy Sauce Served on Butter Toasted Bun';
            case 'Blueberry Pancakes':
                return '$12.75\n' +
                    '.........................................................................................................................................................................................................................................................\n' +
                    'Blueberries Inside, & Blueberry Lemon Compote';
            case 'Cod Fish':
                return '$7.99\n' +
                    '.........................................................................................................................................................................................................................................................\n' +
                    'Breaded Cod Fish, Leaf Lettuce, Tomato, Tartar Sauce on a Butter Toasted Bun';
            case 'Nutella & Berry':
                return '$13.75\n' +
                    '.........................................................................................................................................................................................................................................................\n' +
                    'Topped With Blueberry, Strawberry, And Banana';
            default:
                return '';
        }
    };

    const menuItems = getMenuItems(selectedRestaurant);

    return (
        <div className="RestaurantInfo">
            <div className="content">
                <header className="header">
                    <button onClick={() => onNavigate('Home')} className="orange-button">Back</button>
                </header>
                <div className="restaurant-info">
                    <img src={getRestaurantImage(selectedRestaurant)} alt="Restaurant" />
                    <h2>{selectedRestaurant}</h2>
                    <p>★★★★☆</p>
                    <p>Price Range: $$ ($10 to $25)</p>
                    <p>Occasion Type: Quick Bite</p>
                </div>
                <div className="recommended-menu">
                    <h4>Recommended Menu Items</h4>
                    {menuItems.map((menuItem, index) => (
                        <div className="menu-item" key={index}>
                            <img src={getMenuItemImage(menuItem)} alt={`Menu Item ${index + 1}`} />
                            <h5>{menuItem}</h5>
                            <p>{getMenuItemDescription(menuItem)}</p>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button onClick={() => onNavigate('GroupDining')} className="orange-button">Start Dining Group</button>
                    <button onClick={() => onNavigate('Reserve')} className="orange-button">Reserve Table</button>
                </div>
            </div>
        </div>
    );
}

export default RestaurantInfo;