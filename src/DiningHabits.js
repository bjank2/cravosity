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
  
    const handleAllergyDetailsChange = (event) => { // New handler for allergy details
      setAllergyDetails(event.target.value);
    };
  
    const handleFavoriteFoodsChange = (event) => {
      setFavoriteFoods(event.target.value);
    };
  
    const handleBudgetChange = (event) => {
      setBudget(event.target.value);
    };
  
    return (
      <div className="App">
        <form>
          <label>
            Do you have any allergies?
            <input type="radio" value="Yes" checked={allergies === 'Yes'} onChange={handleAllergiesChange} /> Yes
            <input type="radio" value="No" checked={allergies === 'No'} onChange={handleAllergiesChange} /> No
          </label>
          {allergies === 'Yes' && (
            <label>
              Please enter your allergies:
              <input type="text" value={allergyDetails} onChange={handleAllergyDetailsChange} />
            </label>
          )}
          {allergies === 'No' && (
            <label>
              What are your favorite foods?
              <input type="text" value={favoriteFoods} onChange={handleFavoriteFoodsChange} />
            </label>
          )}
          <label>
            Preferred average budget:
            <input type="range" min="0" max="2" value={budget} onChange={handleBudgetChange} />
            {['$', '$$', '$$$'][budget]}
          </label>
        </form>
      </div>
    );
  }
  
  export default Habits;