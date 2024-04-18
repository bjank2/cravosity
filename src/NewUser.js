import './App.css';
import React from 'react';
import LoginScreen from './Login';
import Screens from './Screens';
// Initial Screen with 
function NewUser({ onNavigate }) {

    return (
        <div className="NewUser">
            <header className="header">
                <h1>Create Account</h1>
                <input type="text" placeholder="Username" className="signup" />
                <input type="text" placeholder="Email" className="signup" />
                <input type="text" placeholder="Password" className="signup" />
                <input type="text" placeholder="Confirm Password" className="signup" />
                <button onClick={() => onNavigate('Dietary')} className="orange-button">Create</button>
                <button onClick={() => onNavigate('Screens')} className="orange-button">Back</button>

            </header>
        </div>
    );
}

export default NewUser;

