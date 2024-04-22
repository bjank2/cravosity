import React, { useState } from 'react';
import './App.css';

function Rating({ onNavigate }) {
  const [preferenceMet, setPreferenceMet] = useState('yes');
  const [unmetPreferences, setUnmetPreferences] = useState([]);
  const [ratings, setRatings] = useState({
    vibe: 0,
    pricing: 0,
    accommodation: 0,
    distance: 0,
    groupDining: 0,
  });
  const [keepRestaurant, setKeepRestaurant] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePreferenceChange = (event) => {
    setPreferenceMet(event.target.value);
  };

  const handleUnmetPreferenceChange = (event) => {
    const preference = event.target.value;
    if (event.target.checked) {
      setUnmetPreferences([...unmetPreferences, preference]);
    } else {
      setUnmetPreferences(unmetPreferences.filter((pref) => pref !== preference));
    }
  };

  const handleRatingChange = (aspect, rating) => {
    setRatings({ ...ratings, [aspect]: rating });
  };

  const handleKeepRestaurantChange = (value) => {
    setKeepRestaurant(value);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSubmit = () => {
    onNavigate('Home');
  };

  return (
    <div className="Rating">
      <h2>How did you like the restaurant?</h2>
      <div>
        <div className="preference-question">
          <p>Were all of your preferences and restrictions met?</p>
          <label>
            <input
              type="radio"
              value="yes"
              checked={preferenceMet === 'yes'}
              onChange={handlePreferenceChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              checked={preferenceMet === 'no'}
              onChange={handlePreferenceChange}
            />
            No
          </label>
        </div>
        {preferenceMet === 'no' && (
          <div className="unmet-preferences">
            <p>Which preferences were not met?</p>
            <label>
              <input
                type="checkbox"
                value="vegetarian"
                checked={unmetPreferences.includes('vegetarian')}
                onChange={handleUnmetPreferenceChange}
              />
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                value="vegan"
                checked={unmetPreferences.includes('vegan')}
                onChange={handleUnmetPreferenceChange}
              />
              Vegan
            </label>
          </div>
        )}
        <div className="rating-sections">
          {['vibe', 'pricing', 'accommodation', 'distance', 'groupDining'].map((aspect) => (
            <div key={aspect} className="rating-section">
              <p>{aspect.charAt(0).toUpperCase() + aspect.slice(1)}</p>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span
                    key={rating}
                    className={`star ${ratings[aspect] >= rating ? 'filled' : ''}`}
                    onClick={() => handleRatingChange(aspect, rating)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="restaurant-retention">
          <p>Keep this restaurant in your suggestions?</p>
          <button
            type="button"
            className={`retention-button ${keepRestaurant === true ? 'selected' : ''}`}
            onClick={() => handleKeepRestaurantChange(true)}
          >
            Yes, I'd go back
          </button>
          <button
            type="button"
            className={`retention-button ${keepRestaurant === false ? 'selected' : ''}`}
            onClick={() => handleKeepRestaurantChange(false)}
          >
            No, I won't go back
          </button>
        </div>
        <div className="favorite-toggle">
          <label>
            <input
              type="checkbox"
              checked={isFavorite}
              onChange={handleFavoriteToggle}
            />
            <span className={`heart-icon ${isFavorite ? 'filled' : ''}`}>&#9829;</span>
            Save to favorites?
          </label>
        </div>
        <button type="button" className="orange-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Rating;