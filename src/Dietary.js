import './App.css';
import React from 'react';
import LoginScreen from './Login';
import Screens from './Screens';
// Initial Screen with 
function NewUser({ onNavigate }) {

    return (
        <div className="Dietary">
            <header className="header2">
                <h2>Do you have any of the following dietary restrictions?</h2>
                <h3><i>You will be able to select allergies and preferences later on.</i></h3>
            </header>
            <div className="body">
                <div className="checkboxes">
                    <div className="checkbox-item"> <input type="checkbox" id="vegan" name="vegan" value="vegan" />
                        <label for="vegan">Vegan</label> </div>
                    <div className="checkbox-item"> <input type="checkbox" id="vegetarian" name="vegetarian" value="vegetarian" />
                        <label for="vegetarian">Vegetarian</label></div>
                    <div className="checkbox-item"> <input type="checkbox" id="halal" name="halal" value="halal" />
                        <label for="halal">Halal</label></div>
                    <div className="checkbox-item"> <input type="checkbox" id="gluten-free" name="gluten-free" value="gluten-free" />
                        <label for="gluten-free">Gluten-free</label> </div>
                    <div className="checkbox-item"> <input type="checkbox" id="lactose" name="lactose" value="lactose" />
                        <label for="lactose">Lactose Intolerance</label>  </div>
                    <div className="checkbox-item"> <input type="checkbox" id="kosher" name="kosher" value="kosher" />
                        <label for="kosher">Kosher</label> </div>
                    <div className="checkbox-item"> <input type="checkbox" id="pescatarian" name="pescatarian" value="pescatarian" />
                        <label for="pescatarian">Pescatarian</label> </div>
                    <div className="checkbox-item"> <input type="checkbox" id="keto" name="keto" value="keto" />
                        <label for="keto">Keto</label></div>
                    <div className="checkbox-item"> <input type="checkbox" id="paleo" name="paleo" value="paleo" />
                        <label for="paleo">Paleo</label> </div>
                    <div className="checkbox-item"><input type="checkbox" id="diabetes" name="diabetes" value="diabetes" />
                        <label for="diabetes">Diabetes</label> </div>
                    <button onClick={() => onNavigate('Next')} className="orange-button">Login</button>
                    <div className="orangeText"> <text><i>1/2</i> </text> </div>
                </div>
            </div>
        </div>

    );
}

export default NewUser;

