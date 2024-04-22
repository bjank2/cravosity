import './App.css';
import React from 'react';
import LoginScreen from './Login';

// Initial Screen with 
function Screens({ onNavigate }) {

    return (
        <div className="Screens">
            <header className="header">

                <h1>Cravosity</h1>
                <div className="buttons">
                    <button onClick={() => onNavigate('LoginScreen')} className="orange-button">Existing User</button>
                    <button onClick={() => onNavigate('NewUser')} className="orange-button">Create Account</button>
                    <p className="clickable-text" onClick={() => onNavigate('Home')}>Continue as Guest</p>

                </div>
            </header>
        </div>
    );
}

export default Screens;

