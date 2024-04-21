import React from 'react';
import './App.css';

function GroupDining({ onNavigate }) {
    const userImagePaths = [
        'src/images/me.png',
        'src/images/user1.png',
        'src/images/user2.png',
        'src/images/user3.png',
        'src/images/user4.png',
      ];

  const restaurantImagePaths = [
    'src/images/restaurant1.jpg',
    'src/images/restaurant2.jpg',
    'src/images/restaurant3.jpg',
  ];

  return (
    <div className="GroupDining">
      
      <div className="header">
        <h2>Group Name</h2>
        <button className="orange-button">Edit Group</button>
      </div>
      <button className="orange-button">Upcoming Reservations</button>
      <div className="user-images">
        {userImagePaths.map((imagePath, index) => (
          <div key={index} className="image-container">
            <img src={imagePath} alt="User" />
            <span>{index === 0 ? 'Me' : `User ${index}`}</span>
          </div>
        ))}
      </div>
      <p className="orangeText">Our Preferences: [combined preferences]</p>
      <p className="orangeText">Our Restrictions: [combined allergies]</p>
      <div className="dropdowns">
        {['occasion', 'price', 'distance', 'rating'].map((option) => (
          <select key={option} name={option} className="orange-dropdown">
            <option value="">{option}</option>
            {/* Add more options for each dropdown */}
          </select>
        ))}
      </div>
      <div className="recommended-restaurants">
        <h3>Recommended Restaurants:</h3>
        {restaurantImagePaths.map((imagePath, index) => (
          <div key={index} className="restaurant-container">
            <img src={imagePath} alt="Restaurant" />
            <h4>Restaurant Name</h4>
            <p>Restaurant Description</p>
          </div>
        ))}
      </div>
      <div className="current-selection">
        <h3>Current Selection:</h3>
        <img src="src/images/restaurant1.jpg" alt="Selected Restaurant" />
        <h4>Selected Restaurant Name</h4>
        <p>Selected Restaurant Description</p>
      </div>
      <button className="orange-button" onClick={() => onNavigate('Reserve')}>Reserve a Table</button>
    
      <button onClick={() => onNavigate('MyDiningGroups')} className="orange-button">Back</button>
</div>
  );
}

export default GroupDining;