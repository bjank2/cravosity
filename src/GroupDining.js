import React, { useState } from "react";
import "./App.css";

function GroupDining({ onNavigate, selectedGroup }) {
  const userImagePaths = [
    require("./images/me.png"),
    require("./images/user1.png"),
    require("./images/user2.png"),
    require("./images/user3.png"),
    require("./images/user4.png"),
  ];

  const restaurantImagePaths = [
    require("./images/restaurant1.jpg"),
    require("./images/restaurant2.png"),
  ];

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const handleRestaurantClick = (index) => {
    setSelectedRestaurant(index);
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setSelectedDistance(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const restaurantDescriptions = [
    "Hip counter-serve spot serving unique burgers & hot dogs, including plant-based options.",
    "We're Stax Cafe, a family-owned breakfast, lunch, and brunch spot in Chicago.",
  ];

  return (
    <div className="GroupDining">
      <div className="header">
        <h2>{selectedGroup ? selectedGroup.name : "Group Name"}</h2>
        <button className="orange-button">Edit Group</button>
      </div>
      <button className="orange-button">Upcoming Reservations</button>
      <div className="user-images">
        {userImagePaths.map((imagePath, index) => (
          <div key={index} className="image-container">
            <img src={imagePath} alt="User" />
            <span>{index === 0 ? "Me" : `User ${index}`}</span>
          </div>
        ))}
      </div>
      <p className="orangeText">Our Preferences: [combined preferences]</p>
      <p className="orangeText">Our Restrictions: [combined allergies]</p>
      <div className="dropdowns">
        <select
          name="occasion"
          className="orange-dropdown"
          value={selectedOccasion}
          onChange={handleOccasionChange}
        >
          <option value="">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="corporate-lunch">Corporate Lunch</option>
          <option value="quick-bite">Quick Bite</option>
          <option value="anniversary">Anniversary</option>
          <option value="networking">Networking</option>
        </select>
        <select
          name="price"
          className="orange-dropdown"
          value={selectedPrice}
          onChange={handlePriceChange}
        >
          <option value="">Price</option>
          <option value="0-10">$0 to $10</option>
          <option value="10-25">$10 to $25</option>
          <option value="25-35">$25 to $35</option>
          <option value="35+">$35+</option>
        </select>
        <select
          name="distance"
          className="orange-dropdown"
          value={selectedDistance}
          onChange={handleDistanceChange}
        >
          <option value="">Distance</option>
          <option value="1">Within 1 mile</option>
          <option value="2">Within 2 miles</option>
          <option value="3">Within 3 miles</option>
          <option value="3+">Over 3 miles</option>
        </select>
        <select
          name="rating"
          className="orange-dropdown"
          value={selectedRating}
          onChange={handleRatingChange}
        >
          <option value="">Rating</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
        </select>
      </div>
      <div className="recommended-restaurants">
        <h3>Recommended Restaurants:</h3>
        <div className="restaurant-list">
          {restaurantImagePaths.map((imagePath, index) => (
            <div
              key={index}
              className={`restaurant-container ${
                selectedRestaurant === index ? "selected" : ""
              }`}
              onClick={() => handleRestaurantClick(index)}
            >
              <div className="restaurant-image-container">
                <img src={imagePath} alt="Restaurant" />
              </div>
              <div className="restaurant-info">
                <h4>{index === 0 ? "Busy Burger" : "Stax Cafe"}</h4>
                <p>{restaurantDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedRestaurant !== null && (
        <div className="current-selection">
          <h3>Current Selection:</h3>
          <div className="selected-restaurant-container">
            <img
              src={restaurantImagePaths[selectedRestaurant]}
              alt="Selected Restaurant"
            />
            <div className="selected-restaurant-info">
              <h4>{selectedRestaurant === 0 ? "Busy Burger" : "Stax Cafe"}</h4>
              <p>{restaurantDescriptions[selectedRestaurant]}</p>
            </div>
          </div>
        </div>
      )}
      <button
        className="orange-button"
        onClick={() =>
          onNavigate("Reserve", {
            selectedRestaurant:
              selectedRestaurant === 0 ? "Busy Burger" : "Stax Cafe",
          })
        }
        disabled={selectedRestaurant === null}
      >
        Reserve a Table
      </button>
      <button
        onClick={() => onNavigate("MyDiningGroups")}
        className="orange-button"
      >
        Back
      </button>
    </div>
  );
}

export default GroupDining;
