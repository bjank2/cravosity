import React, { useState } from "react";
import "./App.css";

function Reserve({ onNavigate, selectedRestaurant }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPartySize, setSelectedPartySize] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePartySizeChange = (event) => {
    setSelectedPartySize(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Date:", selectedDate);
    console.log("Time:", selectedTime);
    console.log("Party Size:", selectedPartySize);
  };

  const getRestaurantImage = () => {
    if (selectedRestaurant === "Busy Burger") {
      return require("./images/restaurant1.jpg");
    } else if (selectedRestaurant === "Stax Cafe") {
      return require("./images/restaurant2.png");
    }
    return null;
  };

  return (
    <div className="Reserve">
      <h2>Make a Reservation</h2>
      <div className="restaurant-info">
        <img src={getRestaurantImage()} alt="Restaurant" />
        <h3>{selectedRestaurant}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partySize">Party Size:</label>
          <select
            id="partySize"
            value={selectedPartySize}
            onChange={handlePartySizeChange}
            required
          >
            <option value="">Select party size</option>
            {[1, 2, 3, 4, 5, 6].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="button-container">
          <button
            onClick={() => onNavigate("GroupDining")}
            className="orange-button"
          >
            Back
          </button>
          <button
            type="button"
            className="orange-button"
            disabled={!selectedRestaurant}
            onClick={() => onNavigate("Rating")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reserve;
