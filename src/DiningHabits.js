import './App.css';
import React, { useState } from 'react';
import LoginScreen from './Login';
import Screens from './Screens';
import NewUser from './NewUser';

function Habits() {
  const [allergies, setAllergies] = useState('');
  const [allergyDetails, setAllergyDetails] = useState(''); // New state for allergy details
  const [favoriteFoods, setFavoriteFoods] = useState('');
  const [budget, setBudget] = useState(1); // Default budget

  const handleAllergiesChange = (event) => {
    setAllergies(event.target.value);
    if (event.target.value === 'No') {
      setAllergyDetails(''); // Clear allergy details if user selects No
    }
  };

  const handleAllergyDetailsChange = (event) => {
    setAllergyDetails(event.target.value);
  };

  const handleFavoriteFoodsChange = (event) => {
    setFavoriteFoods(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="DiningHabits">
      <form>
        <div className="header3">
          <h2>A Few More Questions...</h2>
        </div>
        <div className="body">
          <label className="checkbox-item">
            Do You Have Any Allergies?
            <div>
              <input type="radio" value="Yes" checked={allergies === 'Yes'} onChange={handleAllergiesChange} /> Yes
              <input type="radio" value="No" checked={allergies === 'No'} onChange={handleAllergiesChange} /> No
            </div>
          </label>
          {allergies === 'Yes' && (
            <label className="checkbox-item">
              Please Enter Your Allergies:
              <input type="text" value={allergyDetails} onChange={handleAllergyDetailsChange} />
            </label>
          )}
          {allergies === 'No' && (
            <label className="checkbox-item">
              What Are Your Favorite Foods?
              <input type="text" value={favoriteFoods} onChange={handleFavoriteFoodsChange} />
            </label>
          )}
          <label className="checkbox-item">
            Preferred Average Budget:
            <input type="range" min="0" max="2" value={budget} onChange={handleBudgetChange} />
            <div>{['$', '$$', '$$$'][budget]}</div>
          </label>
        </div>
        <button type="submit" className="orange-button">Done</button>
      </form>
    </div>
  );
}

export default Habits;